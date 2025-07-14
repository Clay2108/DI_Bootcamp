//import libraries

http = require ('http');

// create server
server = http.createServer(async function (req, res) {
    res.end ('Hello World');
});

//listen to port 3000
PORT=3000;
server.listen(PORT, function () {
    console.log('Server is running at port ' + PORT);
});
//end of code

//Where it is hosted?

//http://localhost:3000/

