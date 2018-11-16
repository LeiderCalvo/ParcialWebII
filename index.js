const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const fs = require('fs');
var pTitulo = 0;
var pDescrip = 0;
var pEnlaces = 0;

fs.writeFile('numeroDeVistas.txt', '', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine','handlebars');

app.get('/', function(request,  response){
    response.render('titulo');
});

app.get('/descripcion', function(request,  response){
    response.render('descripcion');
});

app.get('/enlaces', function(request,  response){
    response.render('enlaces');
});

app.listen(5500);