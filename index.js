var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// fire controllers
todoController(app);

// lister to port 3000
app.listen(3000);

console.log('You are listening to port 3000');

