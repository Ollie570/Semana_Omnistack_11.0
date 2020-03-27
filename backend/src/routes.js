//Require: Importando módulos express para dentro da variável express
const express = require('express');

//Importando o OngController:
const OngController = require('./controllers/OngController');

//Importando o IncidentController:
const IncidentController = require('./controllers/IncidentController');

//Importando o ProfileController:
const ProfileController = require('./controllers/ProfileController');

//Importando o SessionController:
const SessionController = require('./controllers/SessionController');

//Desacoplando o módulo de rotas do express em uma nova variável:
const routes = express.Router();

//Criando a rota de sessão:
routes.post('/sessions', SessionController.create);

//Rota listando todas as ongs do banco de dados:
routes.get('/ongs', OngController.index);

//Criando uma rota para as ongs:
routes.post('/ongs', OngController.create);

//Rota para os perfis:
routes.get('/profile', ProfileController.index);

//Rota listando todos os incidentes do banco de dados:
routes.get('/incidents', IncidentController.index);

//Criando uma rota para os incidentes:
routes.post('/incidents', IncidentController.create);

//Criando rota para deletar um incidente:
routes.delete('/incidents/:id', IncidentController.delete);

//Exportando rotas para que sejam acessadas pelo index:
module.exports = routes;