import { user as _user, role, Sequelize } from "../models";
import { secret } from "../config/auth.config";
const User = _user;
const Role = role;

const Op = Sequelize.Op;

import { sign } from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcryptjs';

export function signup(req, res) {
  //Savar user no banco de dados
  User.create({
    username: req.body.username,
    matricula: req.body.matricula,
    password: hashSync(req.body.password, 8)
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
}

export function signin(req, res) {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuário nao Encontrado" });
      }

      var passawordIsValid = compareSync(
        req.body.password,
        user.password
      );

      if (!passawordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Senha Inválida"
        });
      }

      var token = sign({ id: user.id }, secret, {
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
}