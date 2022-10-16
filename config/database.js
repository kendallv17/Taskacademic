require('dotenv').config()

module.exports = {

  // Configuracion de DB
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD ||null,
  database: process.env.DB_DATABASE || "database_development",
  host: process.env.DB_HOST ||"127.0.0.1",
  dialect: process.env.DB_DIALECT || "postgres",

  // Configurar Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Configuracion de Migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations"

}
