const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res, next) => {
  Users.findNoPass()
    .then(users => {
      res.json(users);
    })
    .catch( err => res.send({ message: "Error contacting database" }));
});

module.exports = router;