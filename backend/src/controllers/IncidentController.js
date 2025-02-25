//Controle de incidentes!!

//Criando a conexão com o banco de dados:
const connection = require('../database/connection');

//Criação de incidentes:
module.exports = {
    async index (request, response) {

        //Criando a paginação dos incidentes:
        const {page = 1} = request.query;

        //Total de casos:
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.city', 'ongs.uf']);

        //Retornando total de incidentes usando o header:
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;
        //Headers: guarda informações sobre o contexto da requisição
        //Acessando o id da ong:
        const ong_id = request.headers.authorization;

        //Inserindo os dados na tabela incidents e pegando o id:
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id});
    },

    //Criando método para deletar incidentes:
    async delete(request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        //Verificando para que a ong não apague o incidente de outra ong:
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({error: 'Operation not permitted.' });
        }
        

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();


    }
};