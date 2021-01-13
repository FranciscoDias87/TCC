module.exports = (sequelize, Sequelize) => {
    const Loterica = sequelize.define("loterica", {
        nameLoterica: {
            type: Sequelize.STRING
        },
        codConvenio: {
            type: Sequelize.STRING
        },
        codagencia: {
            type: Sequelize.STRING
        },
        nameagencia: {
            type: Sequelize.STRING
        }
    });

    return Loterica;
};