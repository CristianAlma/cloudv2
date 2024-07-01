const Customer = require('../models/Customer');

//crear una funcion para llamado a select del modelo
//envia parametros req y res
//req significa request = peticion
//sec significa response = respuesta

const listCustomer = async (req, res) => {
    try {
        const customer = await Customer.getCustomers();
        res.json(customer); // convertir a json la respuesta
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }

}

const insertCustomer = async(req, res) => {
    try {
        const customer = await Customer.insert(req.body);
        //201 es para crear
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }

}


const updateCustomer = async(req, res) => {
    try {
        const customer = await Customer.update(req.body, req.params.id);
        //200 es para crear, por default
        res.json(customer)
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }

}


const deleteCustomer = async(req, res) => {
    try {
        const customer = await Customer.delete(req.params.id);
        res.json(customer)
    } catch (error) {
        res.status(500).json( {error: error.message } );

    }

}

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};