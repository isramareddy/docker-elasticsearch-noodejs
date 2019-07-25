
import '@babel/polyfill';
import express from 'express';
import mongoose from 'mongoose';
import Driver from'./src/models/driver';
// Constants
import {SERVER_HOST, SERVER_PORT} from './src/config/constants';
// route
import router  from './src/services/route';
// App
const app = express();



Driver.createMapping((err, mapping) => {
   if (err){
      console.log('error creating mapping !');
      // console.log(err);
   }else{
      console.log('Mapping Created');
      console.log(mapping);
   }
});

var stream = Driver.synchronize();
var count = 0;

stream.on('data', ()=> {
    count++;
});
stream.on('close', ()=> {
    console.log(`Indexed ${count} documents`);
});
stream.on('error', ()=> {
    console.log(err);
});

mongoose.connect('mongodb://localhost/yassirDB',
    {   autoReconnect:true,
        poolSize: 20,
        socketTimeoutMS: 480000,
        keepAlive: 300000,
        keepAliveInitialDelay : 300000,
        connectTimeoutMS: 30000,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useNewUrlParser: true,
        useCreateIndex: true,
    }
);
const connection = mongoose.connection;

connection.once('open',
    () => {
        console.log('MongoDB database connection established successfully!');
    },
    () => {
        console.log('MongoDB database connection failed!');
    });

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.use('/api/v1', router);

app.listen(SERVER_PORT, SERVER_HOST,() => {
    console.log(`Server is running on ${SERVER_HOST}:${SERVER_PORT}`);
});
