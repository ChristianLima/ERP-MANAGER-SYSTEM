const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
