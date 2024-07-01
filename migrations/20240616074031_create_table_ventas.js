// 20230617123456_create_ventas_table.js
exports.up = function(knex) {
    return knex.schema.createTable('ventas', table => {
      table.increments('id').primary();
      table.string('metodopago').notNullable();
      table.string('estado').notNullable();
      table.string('detalles').notNullable();
      table.string('fecha').notNullable();
      table.timestamps(true, true); // Agregar las marcas de tiempo (created_at, updated_at)
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ventas');
  };
  