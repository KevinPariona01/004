/*
VA A REVISAR SI EXISTE EL PUERTO CONFIGURADO
*/
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));

app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.send('INICIO DEL SERVIDOR');
});

app.get('/home',  (req, res)=>{
    res.render('home',{
        parametro1: 'parametro 1 como data'
    });
});

app.get('*', function (req, res){
    res.sendFile(__dirname +'/public/404.html');
});

app.listen(port, ()=>{
    console.log(`Esta corriendo en el puerto ${port}` );
});