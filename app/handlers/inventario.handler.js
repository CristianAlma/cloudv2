const Inventario = require('../models/Inventario');

// Obtener todos los productos
const listInventario = async (req, res) => {
    try {
        const inventario = await Inventario.query(); // Ejemplo de cómo obtener los productos usando Objection.js
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insertar un nuevo producto
const insertInventario = async (req, res) => {
    try {
        const inventario = await Inventario.query().insert(req.body); // Ejemplo de cómo insertar un producto usando Objection.js
        res.status(201).json(inventario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto existente
const updateInventario = async (req, res) => {
    try {
        const id = req.params.id;
        const inventario = await Inventario.query().patchAndFetchById(id, req.body); // Ejemplo de cómo actualizar un producto usando Objection.js
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteInventario = async (req, res) => {
    try {
        const id = req.params.id;
        const inventario = await Empleado.query().deleteById(id); // Ejemplo de cómo eliminar un producto usando Objection.js
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listInventario,
    insertInventario,
    updateInventario,
    deleteInventario,
};
