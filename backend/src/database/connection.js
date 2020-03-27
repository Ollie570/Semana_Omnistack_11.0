//Arquivo de conexão com o banco de dados!!

//Importando o knex:
const knex = require('knex');

//Importando as configurações do banco de dados:
const configuration = require('../../knexfile');

//Criando a conexão:
const connection = knex(configuration.development);

//Exportando a conexão:
module.exports = connection;
