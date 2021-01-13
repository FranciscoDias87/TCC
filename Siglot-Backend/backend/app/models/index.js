const config = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorAliases: false
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.loterica = require("../models/loterica.model")(sequelize, Sequelize);
db.user = require("../models/user.model")(sequelize, Sequelize);
db.funcao = require("../models/funcao.model")(sequelize, Sequelize);

db.loterica.belongsToMany(db.user, {
  through: "user_loterica",
  foreignKey: "lotericaId",
  otherKey: "userId"
})

db.funcao.belongsToMany(db.user, {
  through: "user_funcoes",
  foreignKey: "funcaoId",
  otherKey: "userId"
});

db.user.belongsToMany(db.funcao, {
  through: "user_funcoes",
  foreignKey: "userId",
  otherKey: "funcaoId"
});

db.ROLES = ["user", "admin", "moderator", "Gerente", "Caixa"];

module.exports = db;