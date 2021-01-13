const jwt = require('jsonwebtoken');
const config = require("../config/auth.config");
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "Token nao fornecido!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Nao autorizado'
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (res, req, next) => {
  User.findByPk(req.userId).then(user => {
    user.getFuncao().then(funcoes => {
      for (let i = 0; i < funcoes.length; i++) {
        if (funcoes[i].name === 'admin') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Requer Nivel de Admin'
      });
      return;
    });
  });
};


isModerator = (res, req, next) => {
  User.findByPk(req.userId).then(user => {
    user.getFuncao().then(funcoes => {
      for (let i = 0; i < funcoes.length; i++) {
        if (funcoes[i].name === 'moderador') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Requer Nivel de Moderador'
      });
      return;
    });
  });
};


isGerente = (res, req, next) => {
  User.findByPk(req.userId).then(user => {
    user.getFuncao().then(funcoes => {
      for (let i = 0; i < funcoes.length; i++) {
        if (funcoes[i].name === 'Gerente') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Requer Nivel de Gerente'
      });
      return;
    });
  });
};


isCaixa = (res, req, next) => {
  User.findByPk(req.userId).then(user => {
    user.getFuncao().then(funcoes => {
      for (let i = 0; i < funcoes.length; i++) {
        if (funcoes[i].name === 'Caixa') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Requer Nivel de Caixa'
      });
      return;
    });
  });
};


isModeratorOrAdmin = (res, req, next) => {
  User.findByPk(req.userId).then(user => {
    user.getFuncao().then(funcoes => {
      for (let i = 0; i < funcoes.length; i++) {
        if (funcoes[i].name === 'moderator') {
          next();
          return;
        }
        if (funcoes[i].name === 'admin') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Requer Nivel de Moderador ou Admin'
      });
      return;
    });
  });
};



const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isGerente: isGerente,
  isCaixa: isCaixa,
  isModeratorOrAdmin: isModeratorOrAdmin
};

module.exports = authJwt;