var express = require('express');
var formidable = require('formidable');
var math = require('mathjs');

var app = express();


app.use(express.static(__dirname + '/public'));

/*
app.get('/', function(request, response) {
    response.send('Hello World');
});
*/

app.get('/SubmitHello', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello ' + request.query.userName + '!<br />');
    response.end('Have a great day!');
    console.log('Handled request from ' + request.query.userName);
});

app.get('/addition', function(request, response) {
    var x = Number(request.query.x);
    var y = Number(request.query.y);
    result = math.add(x, y);

    response.writeHead(200, { 'Content-Type': 'application/json'});
    response.end(' { "result": ' + result + '}');
    console.log("Handle addition request for x = " + x + ": y = " + y);
});

app.post('/substract', function(request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function(err, fields) {
        var x = Number(fields.x);
        var y = Number(fields.y);
        result = math.subtract(x, y);

        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(' { "result": ' + result + '}');
        console.log("Handle addition request for x = " + x + ": y = " + y);
    });
});

app.put('/multiply', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var x = Number(fields.x);
        var y = Number(fields.y);
        //result = math.multiplication(x, y);
        var result = x * y;
        
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('{ "result": ' + result + '}');
        console.log('Handled multiplication request for x=' + x + ' : y=' + y);
}); });

app.delete('/divide', function (request, response) {
    console.log("server code divide handling");
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var x = Number(fields.x);
        var y = Number(fields.y);
        
        //result = math.division(x, y);
        console.log("x = " + x);
        console.log("y = " + y);
        var result = x / y;

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('{ "result": ' + result + '}');
        console.log('Handled division request for x=' + x + ' : y=' + y);
}); });

var port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);