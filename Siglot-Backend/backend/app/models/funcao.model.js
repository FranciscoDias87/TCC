module.exports = (sequelize, Sequelize) => {
  const Funcao = sequelize.define('funcoes', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });
  return Funcao;
}