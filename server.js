var express = require('express');
var mongoose = require('mongoose');
var con = require('./connection');
var model = require('./model');
var bodyparser = require('body-parser');
var add = mongoose.model('add', model, 'alumnos');
mongoose.connect(con.connectionString);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyparser.json());
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

app.post('/getAlumnos', function(req, res){

    console.log(req.body);
    var addAlumno = new add(

        req.body
    );

    addAlumno.save(function (err){

        if (err)
        {
            console.log(err);
        }

        res.json(addAlumno);
    });    
});

app.get('/getOne/:id', function(req, res){

    var id = req.params.id;

    add.findOne({'_id': mongoose.Types.ObjectId(id)}, function (err, docs){

        if (err)
        {
            console.log(err);
        }

        res.json(docs);
    });    
});

app.put('/updateAlumno/:id', function(req, res){

    var id = req.params.id;
    var conditions = {'_id': mongoose.Types.ObjectId(id)};
    var update = {'$set':req.body};
    var options = {'new':true};

    add.findOneAndUpdate(conditions, update, options, function (err, docs){

        if (err)
        {
            console.log(err);
        }

        res.json(docs);
    });    
});

app.delete('/getAlumnos/:id', function (req, res){

    var id = req.params.id;
    
    console.log(id);

    add.remove({'_id': mongoose.Types.ObjectId(id)}, function(err, docs){

        if (err){
            console.log(err);
        }

        res.json(docs);
    });
});


var port = process.env.PORT || 5000;

app.listen(port, function(){

    console.log('server running in port number: ' + port);
});
