'use strict';
var os = require('os');
const express = require('express');
const request = require('request');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
// api ------------------------------------------------------------
app.get('/api', function (req, res) {
  

  

  // Invoke service
  request('http://web-api:9900', function (error, response, body) {
      if(error) console.log(error);
      res.send('Hello from service A running on ' + os.hostname() + ' and ' + body);
      console.log('Hello from service A running on ' + os.hostname() + ' and ' + body);
  });
}); 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);