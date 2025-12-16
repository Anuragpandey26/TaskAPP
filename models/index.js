const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Task = require('./task')(sequelize, Sequelize);


db.User.hasMany(db.Task, { foreignKey: 'userId', onDelete: 'CASCADE' });
db.Task.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
