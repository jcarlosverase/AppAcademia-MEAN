var express = require('express');
var mongoose = require('mongoose');
var con = require('./connection');
var model = require('./model');

var add = mongoose.model('add', model, 'alumnos');
mongoose.connect(con.connectionString);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/getAlumnos', function(req, res){

    add.find(function (err, docs){

        if (err)
        {
            console.log(err);
        }

        res.json(docs);
    });

    
});

var port = 3000;

app.listen(port, function(){

    console.log('server running in port number: ' + port);
});
