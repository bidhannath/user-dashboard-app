const dbConfig = require('../config/database');
const Sequelize = require('sequelize');

let sequelize = new Sequelize(dbConfig);
export { sequelize };