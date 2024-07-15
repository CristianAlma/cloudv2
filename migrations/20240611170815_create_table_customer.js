/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customer', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.string('cargo').notNullable();
        table.string('correo').notNullable();
        table.string('direccion').notNullable();
        table.timestamps(true, true); // Esto agrega las columnas created_at y updated_at con marcas de tiempo automáticas
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customer');
};
