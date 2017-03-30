var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to db

mongoose.connect('mongodb://test:test@ds145790.mlab.com:45790/tododb');

// create scheme of mongoose db

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({
//     item: 'First todo'
// }).save(function (err) {
//     if (err) throw err;

//     console.log('item save');
// });


// var data = [
//     { item: 'learn node.' },
//     { item: 'auth 2.0 for todo.' },
//     { item: 'host on app engine.' }
// ]

var urlEncoder = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        // get data mongo db
        Todo.find({}, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.render('todo', { todos: data });
            }
        });

    });

    app.post('/todo', urlEncoder, function (req, res) {
        console.log(req.body);
        var newTodo = Todo(req.body).save(function (err, data) {
            if (err) {
                throw err;
            } else {
                res.json({});
            }
        });


    });

    app.delete('/todo/:item', function (req, res) {
        console.log(req.params.item);

        Todo.find({ item: req.params.item.replace(/\-/g, '') })
            .remove(function (err, data) {
                if (err) {
                    throw err;
                } else {
                    res.json({});
                }
            });

        // data = data.filter(function (todo) {
        //     return todo.item.replace(/ /g, "-") !== req.params.item;
        // });

    });

};