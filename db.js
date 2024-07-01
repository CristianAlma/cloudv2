const Knex = require('knex') // llamada a la libreria knex
const { Model } = require('objection') // llamada a model de objetion
const knexConfig = require('./knexfile') //Llamada a configuracion

const knex = Knex(knexConfig.development); //Inicializar el objeto
Model. knex(knex); //Configurar objetion con datos de knex

module.exports = knex; //exportar configuracion
