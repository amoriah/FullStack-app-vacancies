module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            defaultValue: 'Вася Губкин',
        },
        respondedVacancies: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: [],
            allowNull: true,
        },
        login: {
            type: DataTypes.STRING,
            require: true,
        },
        password: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false,
        },
    });

    return User;
};
