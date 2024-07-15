const Empleado = require('../models/Empleado');

// Obtener todos los productos
const listEmpleado = async (req, res) => {
    try {
        const empleados = await Empleado.query(); // Ejemplo de cómo obtener los productos usando Objection.js
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insertar un nuevo producto
const insertEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.query().insert(req.body); // Ejemplo de cómo insertar un producto usando Objection.js
        res.status(201).json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto existente
const updateEmpleado = async (req, res) => {
    try {
        const id = req.params.id;
        const empleado = await Empleado.query().patchAndFetchById(id, req.body); // Ejemplo de cómo actualizar un producto usando Objection.js
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteEmpleado = async (req, res) => {
    try {
        const id = req.params.id;
        const empleado = await Empleado.query().deleteById(id); // Ejemplo de cómo eliminar un producto usando Objection.js
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listEmpleado,
    insertEmpleado,
    updateEmpleado,
    deleteEmpleado,
};
