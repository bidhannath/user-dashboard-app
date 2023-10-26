module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  logging: false,
  seederStorage: 'sequelize',
  pool:{
     max: 10,
     acquire: 40000,
     idle: 2000,     
     evict: 1000
  }
};