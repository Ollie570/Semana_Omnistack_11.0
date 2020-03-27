//O método up é sempre responsável pela criação da tabela:
exports.up = function(knex) {
    //Criando nova tabela:
    return knex.schema.createTable('incidents', function(table) {
        //Increments: Cria uma chave primária que se autoincrementa
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Coluna para armazenar as ongs que registraram um incidente:
        table.string('ong_id').notNullable();

        //Criando a chave estrangeira:
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

//O método down serve para correção de erros 
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
