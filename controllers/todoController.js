var bodyParser = require('body-parser');

var data = [
    { item: 'learn node.' },
    { item: 'auth 2.0 for todo.' },
    { item: 'host on app engine.' }
]

var urlEncoder = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlEncoder, function (req, res) {
        console.log(req.body);
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function (req, res) {

    });

};