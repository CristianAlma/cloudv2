/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('ventas', function(table) {
      table.integer('customer_id').unsigned().notNullable();  // Añadir columna customer_id
      table.foreign('customer_id').references('id').inTable('customer');  // Definir la clave foránea
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.table('ventas', function(table) {
      table.dropForeign('customer_id');
      table.dropColumn('customer_id');
    });
  };
