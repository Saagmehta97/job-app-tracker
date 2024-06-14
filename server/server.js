const express = require('express');
const { restart } = require('nodemon');
const app = express();
const path = require('path');

// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.json({message: "Server Workin"})
});







app.listen((3000), ()=> {
  console.log('listening on port 3000')
}); //listens on port 3000 -> http://localhost:3000/
