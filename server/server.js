const express = require('express');
// const { restart } = require('nodemon');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routerSignup = require('./routes/users');
const applicationsRouter = require('./routes/applications');

const app = express();
// const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', routerSignup);
app.use('/dashboard', applicationsRouter);

// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/public/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// Global error handler:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.error('Error log:', errorObj.log);
  console.error('Error status:', errorObj.status);
  console.error('Error message:', errorObj.message);
  console.error('Stack trace:', err.stack);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
}); //listens on port 3000 -> http://localhost:3000/
