const db = require("../models");

const Loterica = db.loterica


checkDuplicateNameLotericaORCodConvenio = (req, res, next) => {
  //Nome da Loterica
  Loterica.findOne({
    where: {
      nameLoterica: req.body.nameLoterica
    }
  }).then(loterica => {
    if (loterica) {
      res.status(400).send({
        message: "Falha! Loterica já está cadastrada!"
      });
      return;
    }


    //Cod de Convenio
    Loterica.findOne({
      where: {
        codConvenio: req.body.codConvenio
      }
    }).then(loterica => {
      if (loterica) {
        res.status(400).send({
          message: "Falha! Convenio já está em uso!"
        });
        return;
      }
      next();
    });
  });
}



const verifySignUpLot = {
  checkDuplicateNameLotericaORCodConvenio: checkDuplicateNameLotericaORCodConvenio
}


module.exports = verifySignUpLot;

