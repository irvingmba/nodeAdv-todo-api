var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Started on port 3000");
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
    console.log(req.body);
});

// GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    };
    // res.send(req.params);

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        };
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

});

module.exports = {app};