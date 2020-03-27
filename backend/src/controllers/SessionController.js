//Verifica se as ongs estão online!!

//Importando a conexão com o banco de dados:
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        //Verificando se a ong existe validando seu id:
        const {id} = request.body;

        //Buscando a ong no banco de dados:
        const ong = await connection('ong')
            .where('id', id)
            .select('name')
            .first();

        //condicional se a ong não existir:
        if (!ong) {
            return response.status(400).json({error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
}