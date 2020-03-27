//Controla o perfil das ongs!!

//Importando a conexão com o banco de dados:
const connection = require('../database/connection');

module.exports = {
    //O método index faz a listagem de todos os dados da tabela
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

            return response.json(incidents);
    }
}