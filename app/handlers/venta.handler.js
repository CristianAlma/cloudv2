const Venta = require('../models/Venta');

// Obtener todos los productos
const listVenta = async (req, res) => {
    try {
        const ventas = await Venta.query(); // Ejemplo de cómo obtener los productos usando Objection.js
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insertar un nuevo producto
const insertVenta = async (req, res) => {
    try {
        const venta = await Venta.query().insert(req.body); // Ejemplo de cómo insertar un producto usando Objection.js
        res.status(201).json(venta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto existente
const updateVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const venta = await Venta.query().patchAndFetchById(id, req.body); // Ejemplo de cómo actualizar un producto usando Objection.js
        res.json(venta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const venta = await Venta.query().deleteById(id); // Ejemplo de cómo eliminar un producto usando Objection.js
        res.json(venta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listVenta,
    insertVenta,
    updateVenta,
    deleteVenta,
};
