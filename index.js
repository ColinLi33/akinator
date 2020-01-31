const express = require('express');
const app = express();

app.use(express.static('public'))
app.get('/', function(req, res) {
	res.render(__dirname + './public/index.html');
});

app.listen(process.env.PORT || 3333, () => console.log('Hosting on 3333'))
