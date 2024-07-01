const express = require('express'); // llamado a framework

// llamar a handlers del api
const customerHandler = require('./app/handlers/customer.handler');

//variable para encapsular rutas
const router = express.Router();

//registrar las rutas
//comenzamos con las rutas del cliente
router.get('/customers', customerHandler.listCustomer)//Para obtener cliente
router.post('/customers', customerHandler.insertCustomer)//Para insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer)// Para actualiozar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)// Para eliminar cliente

// ... otras rutas ...
module.exports = router;