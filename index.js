const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
app.use(express.static('public'))''
app.get('/', function(req, res) {
	res.render(__dirname + './public/index.html');
  res.render(__dirname + './public/twentyQ.js');
});

http.listen(process.env.PORT || 3333, function() {
	console.log('listening on 3333');
});
