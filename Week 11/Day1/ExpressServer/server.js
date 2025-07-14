// import my libraries
const express = require('express');
const path = require('path');
const ejs = require('ejs');


//import routers
productRouter=require('./routes/product');


// create server
const server = express();

//set view engine
server.set('view engine', 'ejs');

//bind template directory
server.set('views', path.join(__dirname, 'templates'))

//middlewares
//set static folder
server.use(express.static(path.join(__dirname, 'static')));



//connect routers
server.use('/', productRouter);


//connect to database


//basic route handling

// Basic route handling
// server.get('/', async function (req, res) => {
//   res.send('You are on the home page');
// });

//start server and listen to port
const PORT=3000;
server.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Error starting server:', err.message);
});

//http://localhost:3000/