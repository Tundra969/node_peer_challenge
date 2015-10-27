var http = require('http');

var account = require('./account');


http.createServer(function(req,res){
    res.writeHead(200);
    res.write(account());
    res.end();
}).listen(8000);

