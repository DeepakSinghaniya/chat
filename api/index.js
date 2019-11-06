import express from 'express';

import {MongoClient} from 'mongodb';

MongoClient.connect('mongodb://@127.0.0.1:27017/admin', (err, database) => {
    console.log('database');
    console.log(database);
    console.log('err');
    console.log(err);
})


const app = express();

app.get('*', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});