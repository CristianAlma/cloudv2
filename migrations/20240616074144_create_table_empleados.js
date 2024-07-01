exports.up = function(knex) {
    return knex.schema.createTable('empleados', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.string('cargo').notNullable();
        table.string('correo').notNullable();
        table.string('direccion').notNullable();
        table.timestamp(true, true);

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('empleados')
  
};
