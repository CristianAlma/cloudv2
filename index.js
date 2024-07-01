//importar librerias

const express = require('express');
const knex = require('./db');//llamado a conf de db
const routes = require('./routes');//llamado rutas

const app = express();// cremaos una nueva instancia
const port = 3000;// puerto de salida 

app.use(express.json()) //configurar tipo de dato js

app.use('/api', routes);//configura la url base y tutas

app.listen(port, ()=>{//ejecuta la api po el puerto 3000
    //mensaje 
    console.log(`Servidor corriendo en el puerto ${port}`);
})