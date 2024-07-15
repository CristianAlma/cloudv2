const { Model } = require('objection');

class Producto extends Model {
    static get tableName() {
        return 'productos';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'descripcion', 'categoria', 'precio','seccion'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string', minLength: 1 },
                categoria: { type: 'string', minLength: 1 },
                precio: { type: 'string', minLength: 1 },
                seccion: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getProductos() {
        return await Producto.query();
    }

    static async insert(data) {
        return await Producto.query().insert(data);
    }

    static async update(data, id) {
        return await Producto.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Producto.query().deleteById(id);
    }
}

module.exports = Producto;
