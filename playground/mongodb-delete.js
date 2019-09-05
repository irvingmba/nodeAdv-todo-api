const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // deleteMany
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({name: 'Andrew'}).then((res) => {
    //     console.log(res);
    // });
    db.collection('Users').findOneAndDelete({
        _id:new ObjectID("5d6d9ccd814062422d2a6b08")
    });
    client.close();
});