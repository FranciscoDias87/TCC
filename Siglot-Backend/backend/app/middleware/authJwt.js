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
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
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
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderador') {
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


isModeratorOrAdmin = (res, req, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderator') {
          next();
          return;
        }
        if (roles[i].name === 'admin') {
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
  isModeratorOrAdmin: isModeratorOrAdmin
};

module.exports = authJwt;