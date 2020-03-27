//O método up é sempre responsável pela criação da tabela:
exports.up = function(knex) {
    //Criando nova tabela:
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  
};

//O método down serve para correção de erros 
exports.down = function(knex) {
    knex.schema.dropTable('ongs');
};
