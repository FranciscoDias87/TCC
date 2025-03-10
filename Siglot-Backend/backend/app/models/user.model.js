module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        nameFuncionario: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        matricula: {
            type: Sequelize.STRING
        },
        funcao: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return User;
};