const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const fs = require('fs');
var pTitulo = 0;
var pDescrip = 0;
var pEnlaces = 0;

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine','handlebars');

app.get('/', function(request,  response){
    response.render('titulo');
    pTitulo+=1;
    fs.writeFile('numeroDeVistas.txt',`Página Titulo: ${pTitulo} visitas
Página descripcion: ${pDescrip} visitas
Página enlaces: ${pEnlaces} visitas`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

app.get('/descripcion', function(request,  response){
    response.render('descripcion');
    pDescrip+=1;
    fs.writeFile('numeroDeVistas.txt',`Página Titulo: ${pTitulo} visitas
Página descripcion: ${pDescrip} visitas
Página enlaces: ${pEnlaces} visitas`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

app.get('/enlaces', function(request,  response){
    response.render('enlaces');
    pEnlaces+=1;
    fs.writeFile('numeroDeVistas.txt',`Página Titulo: ${pTitulo} visitas
Página descripcion: ${pDescrip} visitas
Página enlaces: ${pEnlaces} visitas`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});

app.listen(5500);