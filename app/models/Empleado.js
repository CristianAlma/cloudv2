const { Model } = require('objection');

class Empleado extends Model {
    static get tableName() {
        return 'empleados';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'apellido', 'cargo', 'correo', 'direccion'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                apellido: { type: 'string', minLength: 1 },
                cargo: { type: 'string', minLength: 1 },
                correo: { type: 'string', minLength: 1 },
                direccion: { type: 'string', minLength: 1 },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                age: { type: 'integer' }
            }
        };
    }

    static async getEmpleados() {
        return await Empleado.query();
    }

    static async insert(data) {
        return await Empleado.query().insert(data);
    }

    static async update(data, id) {
        return await Empleado.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Empleado.query().deleteById(id);
    }
}

module.exports = Empleado;
