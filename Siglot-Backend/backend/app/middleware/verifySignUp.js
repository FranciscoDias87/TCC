const db = require("../models");

const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  //Username
  User.findOne({
    where: {
      nameLoterica: req.body.nameLoterica
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Falha! Usuário já está em uso!"
      });
      return;
    }


    //Matricula
    User.findOne({
      where: {
        matricula: req.body.matricula
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Falha! Matricula já está em uso!"
        });
        return;
      }
      next();
    });
  });
};


checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.lenght; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Falha! Função não existe = " + req.body.role[i]
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
}

module.exports = verifySignUp;

