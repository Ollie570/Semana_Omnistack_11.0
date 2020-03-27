//Require: Importando módulos express para dentro da variável express
const express = require('express');

//Importando as rotas:
const routes = require('./routes');

//Importando o cors (método de segurança para que só as ongs enviem incidentes):
const cors = require('cors');

//Variável criando a aplicação:
const app = express();

//Converte json em javascript (precisa ir antes das rotas!):
app.use(express.json());

//Utilizando o routes:
app.use(routes);

//Utilizando o cors:
app.use(cors());

/**
 * Métodos HTTP
 * Get: Busca e lista uma informação do back-end
 * Post: Cria uma informação no back-end
 * Put: Altera uma informação do back-end
 * Delete: Apaga uma informação do back-end
 */

 /**
  * Tipos de parâmetros
  * Query params: Parâmetros nomeados enviados na rota apôs "?" e servem para filtros e paginação
  * Route params: Parâmetros usados para identificar recursos (um único recurso)
  * Request body: Corpo da requisição, usado para criar e alterar recursos
  */

/**
 * Bancos de dados
 * Sql: MySql, Sqlite, PostgreSql, Oracle, etc
 * NoSql: MongoDB, CouchDB, etc
 * 
 * Driver Sql: SELECT * FROM users
 * Query builder javascript: table('users').select('*')
 */

//Listen: Faz a aplicação "ouvir" uma porta específica
app.listen(3333); 

//node index.js/ npm start: Comandos no terminal que iniciam o servidor