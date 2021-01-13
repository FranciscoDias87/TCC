const { verifySignUp, verifySignUpLot } = require('../middleware');
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Acess-Control-Allow-Headers",
      "x-acess-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    '/api/auth/signupLot',
    [
      verifySignUpLot.checkDuplicateNameLotericaORCodConvenio
    ],
    controller.signupLot
  );

  app.post(
    '/api/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrMatricula,
      verifySignUp.checkFuncoesExisted
    ],
    controller.signup

  );

  app.post("/api/auth/signin", controller.signin);
};