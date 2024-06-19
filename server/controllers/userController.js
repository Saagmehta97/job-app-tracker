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
};

userController.createUser = (req, res, next) => {
  const { firstName, lastName, username } = req.body;
  const hashWord = res.locals.hashWord;

  const params = [firstName, lastName, username, hashWord];
  console.log('inside createUser');
  const query = `INSERT INTO users(firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *`;
  // const passQuery = `SELECT password FROM users WHERE username = '${username}'`;

  db.query(query, params)
    .then((createdUser) => {
      console.log('Hi from createUser method');
      res.locals.createdUser = createdUser.rows[0];

      console.log('Created user: ', createdUser);
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        error: err,
        message: 'Error in userController.createUser',
      });
    });
};

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  //query for the stored password in the database using the username as the condition
  //use bcrypt compare to check entered password and stored password
  try {
    // $1 for parameterized queries, instead of string template literal
    const passQuery = `SELECT password FROM users WHERE username = $1`;
    // passing in array of usernames so it can replace the placeholders from the parameterized queries
    const storedPass = await db.query(passQuery, [username]);
    //console.log(storedPass, ' this is storedPass');
    const dbPass = storedPass.rows[0].password;
    //console.log(dbPass, ' this is dbPass');

    const queryResult = await bcrypt.compare(
      password.toString(),
      dbPass.toString()
    );
    // console.log(queryResult + ' this is queryResult');
    //console.log(storedPass + 'this is storedpass');
    if (queryResult) {
      res.locals.userName = username;
      res.locals.loginPassword = dbPass;
    } else {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    return next();
  } catch (err) {
    return next({
      log: err,
      message: { err: 'small error in userController.verifyUser' },
    });
  }
};

// userController.setCookies = (req, res, next) => {
//   const { username } = req.body;
//   res.cookie(currentUser, username);
//   res.send("cookie set");
//   return next();
// };

module.exports = userController;
