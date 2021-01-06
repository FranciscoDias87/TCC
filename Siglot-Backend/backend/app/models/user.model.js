module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        nameLoterica: {
            type: Sequelize.STRING
        },
        codConvenio: {
            type: Sequelize.STRING
        },
        matriculaGerente: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return User;
};