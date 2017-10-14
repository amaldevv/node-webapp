'use strict';
var os = require('os');
const express = require('express');
const request = require('request');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static("public"));

app.get('/index', (req, res) => {
  res.send(__dirname + "/" + "index.html");
});
// api ------------------------------------------------------------
app.get('/api/getMessage', function (req, res) {
  

  

  // Invoke service
  request('http://web-api:9900', function (error, response, body) {
      if(error) console.log(error);
      res.send('Hello from WebAPI running on ' + os.hostname() + ' and ' + body);
      console.log('Hello from WebAPI running on ' + os.hostname() + ' and ' + body);
  });
}); 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);