const router = require('express').Router();
// helps hash the password
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

// this has all the functions from the models
const Users = require('../users/users-model.js');

// localhost:3300/api/auth - this is in server.js
router.post('/register', (req, res, next) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);

  // this is from let user, updating password
  user.password = hash;

  // this is from users-model.js
  Users.add(user)
    .then(saved => {
      // const token = generateToken(user); *this might not be necessary
      res.status(201).json({ created_user: {
        id: saved.id, 
        username: saved.username
        } 
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/login', (req, res, next) => {
  let { username, password } = req.body;
  Users.findBy(username)
    .first()
    .then(user => {
      // password comes from req.body
      // user.password come from database
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, jwt_token: token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// user is being inserted in router.post to create token
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '30 min'
  };

  return jwt.sign(payload, secret, options);
};

module.exports = router;