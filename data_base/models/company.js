module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        name: {
            type: DataTypes.STRING,
            defaultValue: 'Company',
        },
        createdVacancies: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: [],
            allowNull: true,
        },
        login: {
            type: DataTypes.STRING,
            unique: true,
            require: true,
        },
        password: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false,
        },
    });

    return Company;
};
