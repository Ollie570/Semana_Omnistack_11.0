//Importando a conexão com o banco de dados:
const connection = require('../database/connection');

//Pacote crypto para geração de strigs aleatórias:
const crypto = require('crypto');

module.exports = {
    //O método index faz a listagem de todos os dados da tabela
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        //Enviando somente os dados necessários:
        const {name, email, whatsapp, city, uf} = request.body;

        //Gerando 4 bytes de carácteres aleatórios e convertendo para string do tipo hexadecimal:
        const id = crypto.randomBytes(4).toString('HEX');

        //Inserindo as colunas na tabela ongs:
        //Await: Espera o código de inserção ser finalizado para prosseguir
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({id});
    }
};