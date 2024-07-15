const Producto = require('../models/Producto');

// Obtener todos los productos
const listProducto = async (req, res) => {
    try {
        const productos = await Producto.query(); // Ejemplo de cómo obtener los productos usando Objection.js
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insertar un nuevo producto
const insertProducto = async (req, res) => {
    try {
        const producto = await Producto.query().insert(req.body); // Ejemplo de cómo insertar un producto usando Objection.js
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto existente
const updateProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await Producto.query().patchAndFetchById(id, req.body); // Ejemplo de cómo actualizar un producto usando Objection.js
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteProducto = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await Producto.query().deleteById(id); // Ejemplo de cómo eliminar un producto usando Objection.js
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto,
};
