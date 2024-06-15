const express = require('express');
const userController = require('../controllers/userController');

// const fileController = require('../controllers/fileController');

const routerSignup = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

routerSignup.get('/', (req, res) => {
  res.json({message: "Server Workin"})
});

routerSignup.post('/signup', userController.hashing, userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.createdUser);
})


// ADD GET MORE CHARACTERS ROUTE HANDLER HERE



module.exports = routerSignup;
