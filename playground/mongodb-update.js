const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID("5d6d9b7a25251b4142c1259b")
    }, {
        $set:{
            name: 'Andrew'
        },
        $inc: {
            age:1
        }
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
    client.close();
});