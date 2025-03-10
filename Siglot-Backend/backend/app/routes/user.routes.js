const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "x-access-token, Origin, Contet-types, Accept"
    );
    next();
  });

  app.get('/api/test/all', controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get(
    "api/test/gerente",
    [authJwt.verifyToken, authJwt.isGerente],
    controller.gerenteBoard
  );

  app.get(
    "api/test/caixa",
    [authJwt.verifyToken, authJwt.isCaixa],
    controller.caixaBoard
  );
}