const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const tasksRouter = require('../tasks/tasks-router.js');
const usersRouter = require('../users/users-router.js');
const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router');

const server = express();

server.use(helmet());
server.use(cors({
  origin: process.env.CORS_ORIGIN_URL,
  credentials: true
}))
server.use(express.json());

server.use('/api/users', authenticate, usersRouter);
server.use('/api/auth', authRouter);
server.use('/api/tasks', authenticate, tasksRouter);

server.get('/', (req, res, next) => {
  res.status(200).json({ api: "running "});
});

module.exports = server;