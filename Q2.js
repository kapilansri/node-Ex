var http = require('http');

//create a server object:

http.createServer(function (req, res) {

res.write('Welcome to Uki. I am Kapilan'); //write a response to the

res.end(); //end the response

}).listen(8000); //the server object listens on port


