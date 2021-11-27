const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen('8000',()=> console.log('Servidor corriendo en puerto 8000'));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve('./views/home.html'));
})