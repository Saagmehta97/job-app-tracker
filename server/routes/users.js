const express = require('express');
const userController = require('../controllers/userController');

// const fileController = require('../controllers/fileController');

const routerSignup = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

routerSignup.get('/', (req, res) => {
  res.json({message: "Server Workin"})
});

routerSignup.post('/signup', userController.hashing, userController.createUser, (req, res) => {
    console.log(req.body)
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        user
    }
    res.status(200);
})


// ADD GET MORE CHARACTERS ROUTE HANDLER HERE



module.exports = routerSignup;
