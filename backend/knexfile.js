// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      //Local do banco de dados:
      filename: './src/database/db.sqlite'
    },
    //Configuração da pasta migrations:
    migrations: {
      directory: './src/database/migrations'
    },
    //Corrigindo o erro da tabela knex:
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
