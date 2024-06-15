const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('../models/userModels');

const userController = {};

userController.hashing = async (req, res, next) => {
  const { password } = req.body;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashWord = await bcrypt.hash(password, salt);
    res.locals.hashWord = hashWord;
    return next();
  } catch (err) {
    return next({
      log: err,
      message: { err: 'BIG error in userController.hashing' },
    });
  }
  const { password } = req.body;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashWord = await bcrypt.hash(password, salt);
    res.locals.hashWord = hashWord;
    return next();
  } catch (err) {
    return next({
      log: err,
      message: { err: 'BIG error in userController.hashing' },
    });
  }
};

userController.createUser = (req, res, next) => {
const { firstName, lastName, username } = req.body;
  const hashWord = res.locals.hashWord;

  const params = [firstName, lastName, username, hashWord];

  const query = `INSERT INTO applications VALUES ($1, $2, $3, $4) RETURNING *`;

  db.query(query, params)
    .then((createdUser) => {
      console.log('Hi from createUser method');

      console.log('Created user: ', createdUser);
      console.log(res.locals);
      res.locals.createdUser = createdUser.rows[0];
      return next();
    })
    .catch((err) => {
      return next({error: err, message: 'Error in userController.createUser'});
    })
};

module.exports = userController;
