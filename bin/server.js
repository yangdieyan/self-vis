var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '/../dist')));

var port = 3000;


var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("The server is running.\n");
    console.log("url is http://%s:%s", host, port);
});
