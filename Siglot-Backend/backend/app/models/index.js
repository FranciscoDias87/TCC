import { DB, USER, PASSWORD, HOST, dialect as _dialect } from '../config/db.config';

import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: _dialect,
    operatorAliases: false
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: 'userId'
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

export default db;