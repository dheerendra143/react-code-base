const express = require('express');
const path = require('path');
const app = express();
var fs = require("fs");
const PORT = 9000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/listUsers', function (req, res) {
  fs.readFile( __dirname + "/" + "server/utils/users.json", 'utf8', function (err, data) {
     res.end( data );
  });
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
console.log("Server Started...", PORT, __dirname )