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

const productoHandler = require('./app/handlers/producto.handler');

router.get('/productos', productoHandler.listProducto)//Para obtener cliente
router.post('/productos', productoHandler.insertProducto)//Para insertar cliente
router.patch('/productos/:id', productoHandler.updateProducto)// Para actualiozar cliente
router.delete('/productos/:id', productoHandler.deleteProducto)// Para eliminar cliente

const empleadoHandler = require('./app/handlers/empleado.handler');

router.get('/empleados', empleadoHandler.listEmpleado)//Para obtener cliente
router.post('/empleados', empleadoHandler.insertEmpleado)//Para insertar cliente
router.patch('/empleados/:id', empleadoHandler.updateEmpleado)// Para actualiozar cliente
router.delete('/empleados/:id', empleadoHandler.deleteEmpleado);// Para eliminar cliente


const inventarioHandler = require('./app/handlers/inventario.handler');

router.get('/inventarios', inventarioHandler.listInventario)//Para obtener cliente
router.post('/inventarios', inventarioHandler.insertInventario)//Para insertar cliente
router.patch('/inventarios/:id', inventarioHandler.updateInventario)// Para actualiozar cliente
router.delete('/inventarios/:id', inventarioHandler.deleteInventario);// Para eliminar cliente

// ... otras rutas ...
module.exports = router;