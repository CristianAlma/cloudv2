exports.up = function(knex) {
    return knex.schema.createTable('inventario', table => {
        table.increments('id').primary();
        table.string('producto').notNullable();
        table.string('cantidad').notNullable();
        table.string('fechaingreso').notNullable();
        table.string('estado').notNullable();
        table.timestamp(true, true);

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('inventario')
  
};
