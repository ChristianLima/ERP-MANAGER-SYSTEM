const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Você pode importar mais modelos aqui depois
// db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
