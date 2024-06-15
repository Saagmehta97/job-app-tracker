const bcrypt = require('bcrypt')
const saltRounds = 10;
const db = require('../models/userModels')


const userController = {};

userController.hashing = async (req, res, next) => {
  const { password } = req.body;    
try {
  const hashWord = await bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(password, salt, function(err, hash){
    })
  })
  res.locals.hashWord = hashWord;
  return next();
} catch(err) {
  return next({log: err, message: {err: "BIG error in userController.hashing"}});
}
};

userController.createUser = async (req, res, next) => {
  const { firstName, lastName, username } = req.body;    
  try {
    const hashWord = res.locals.hashWord;
    console.log('firstName is: ', firstName);
    console.log('ln is: ', lastName);
    console.log('user is: ', username);
    console.log('pass is: ', hashWord);
    next();
  } catch(error) {
    return next({log: err, message: {err: "small error in userController.createUser"}})
  }
};

module.exports = userController;



