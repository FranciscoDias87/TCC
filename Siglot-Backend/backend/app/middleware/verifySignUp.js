
import { ROLES as _ROLES, user as _user } from "../models";

const ROLES = _ROLES;
const User = _user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  //Username
  User.findOne({
    where: {
      username: req.body.username
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

export default verifySignUp;

