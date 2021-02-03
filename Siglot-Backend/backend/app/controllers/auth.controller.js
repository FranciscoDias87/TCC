const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Funcao = db.funcoes;
const Loterica = db.loterica;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  //Savar user no banco de dados
  User.create({
    nameFuncionario: req.body.nameFuncionario,
    cpf: req.body.cpf,
    matricula: req.body.matricula,
    funcao: req.body.funcao,
    /*senha criptografada*/
    password: bcrypt.hashSync(req.body.password, 8)
    /*senha sem criptografia*/
    /*password: req.body.password*/

  })
    .then(user => {
      if (req.body.funcoes) {
        Funcao.findAll({
          where: {
            name: {
              [Op.or]: req.body.funcoes
            }
          }
        }).then(funcoes => {
          user.setFuncao(funcoes).then(() => {
            res.send({ message: 'Usuario registrado com sucesso' });
          });
        });
      } else {
        //funções usuário = 1
        user.setFuncoes([1]).then(() => {
          res.send({ message: 'Usuario foi registrado com sucesso' });
        });
      }
    })
    .catch(err => {
      res.send(500).send({ message: err.message });
    });
};


exports.signupLot = (req, res) => {
  //Savar loterica no banco de dados
  Loterica.create({
    nameLoterica: req.body.nameLoterica,
    codConvenio: req.body.codConvenio,
    codagencia: req.body.codagencia,
    nameagencia: req.body.nameagencia
  })
    .then(() => {
      res.send({ message: "Loterica Cadastrada com Sucesso" });
    })
    .catch(err => {
      res.send(500).send({ message: err.message });
    });
}

exports.signin = (req, res) => {
  User.findOne({
    where: {
      matricula: req.body.matricula
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuário não Encontrado" });
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
      user.getFuncoes().then(funcoes => {
        for (let i = 0; i < funcoes.length; i++) {
          authorities.push("FUNCAO_" + funcoes[i].name.toUpperCase());
        }
        res.status(200).send({
          accessToken: token,
          funcoes: authorities,
          id: user.id,
          matricula: user.matricula,
          nameFuncionario: user.nameFuncionario,
          password: user.password
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};