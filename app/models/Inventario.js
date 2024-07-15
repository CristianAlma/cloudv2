const { Model } = require('objection');

class Inventario extends Model {
    static get tableName() {
        return 'inventario';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['producto', 'cantidad', 'fechaingreso', 'estado'],

            properties: {
                id: { type: 'integer' },
                producto: { type: 'string', minLength: 1 },
                cantidad: { type: 'string', minLength: 1 },
                fechaingreso: { type: 'string', minLength: 1 },
                estado: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
            }
        };
    }

    static async getInventarios() {
        return await Empleado.query();
    }

    static async insert(data) {
        return await Inventario.query().insert(data);
    }

    static async update(data, id) {
        return await Inventario.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Inventario.query().deleteById(id);
    }
}

module.exports = Inventario;
