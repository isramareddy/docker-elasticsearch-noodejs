'use strict';

const express = require('express');
const mongoose = require('mongoose');

// models => driver
const Driver = require('./src/models/driver');
// Constants
const PORT = 3080;
const HOST = '0.0.0.0';

// App
const app = express();

// app.use(cors({origin : '*'}));
// app.use(bodyParser.json({ 'type': '*/*',limit: '20mb' }));
// app.use(express.static(path.resolve('./public')));


Driver.createMapping((err, mapping) => {
   if (err){
      console.log('error creating mapping !');
      console.log(err);
   }else{
      console.log('Mapping Created');
      console.log(mapping);
   }
})

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



      // Driver.find().limit(10).lean().then(
      //     (res) => console.log(res),
      //     (err) => console.log(err)
      // );

         Driver.search(
         {
                query_string: {
                    query: "Siab Mohamed Amine"
                }
            }, function(err, results) {
                // results here
                console.log(results.hits['hits']);
                console.log(err);
            }
         );


    },
    () => {
        console.log('MongoDB database connection failed!');
    });

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST,() => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
