const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  //Savar user no banco de dados
  User.create({
    username: req.body.username,
    matricula: req.body.matricula,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: 'Usuario foi registrado com sucesso' });
          });
        });
      } else {
        //funções usuário = 1
        user.setRoles([1]).then(() => {
          res.send({ message: 'Usuario foi registrado com sucesso' });
        });
      }
    })
    .catch(err => {
      res.send(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuário nao Encontrado" });
      }

      var passawordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passawordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Senha Inválida"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 3600 //1 hora
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          matricula: user.matricula,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};