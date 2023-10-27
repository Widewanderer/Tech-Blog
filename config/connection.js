const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

//jawsdb_url is a Heroku add-on for the cloud database service
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "127.0.0.1", // localhost
      dialect: "mysql",
      port: 3306, // default port for mysql (3001 is for express)
      models: [__dirname + "/models"],
    }
  );
}

module.exports = sequelize;
