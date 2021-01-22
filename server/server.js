// import express
const express = require('express');

// test info
const { animals } = require('./data/animals.json');

// define local port
const PORT = process.env.PORT || 3001;

// instantiate express server
const app = express();

app.get('/api/animals', (req, res) => {
    res.send('Hello!');
})

// connect to server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})