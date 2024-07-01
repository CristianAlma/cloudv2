exports.up = function(knex) {
    return knex.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('descripcion').notNullable();
        table.string('categoria').notNullable();
        table.string('precio').notNullable();
        table.timestamp(true, true);

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('productos')
  
};
