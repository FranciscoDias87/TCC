const db = require("../models");

const FUNCOES = db.funcoes;
const User = db.user;


checkDuplicateUsernameOrMatricula = (req, res, next) => {
  //Username
  User.findOne({
    where: {
      nameFuncionario: req.body.nameFuncionario
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


checkFuncoesExisted = (req, res, next) => {
  if (req.body.funcoes) {
    for (let i = 0; i < req.body.funcoes.length; i++) {
      if (!FUNCOES.includes(req.body.funcoes[i])) {
        res.status(400).send({
          message: "Falha! Função não existe = " + req.body.funcoes[i]
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrMatricula: checkDuplicateUsernameOrMatricula,
  checkFuncoesExisted: checkFuncoesExisted
}

module.exports = verifySignUp;


