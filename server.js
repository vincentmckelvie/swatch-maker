require('dotenv').config()
const express = require("express");
const app = express();
const compression = require("compression");

app.use(compression());

app.use(express.static(__dirname+'/dist'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3007, ()=>{console.log("listening on 3007")});