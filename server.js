'use strict';

const express = require('express');

// Constants
const PORT = 3080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST,() => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
