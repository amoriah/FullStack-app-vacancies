module.exports = (sequelize, DataTypes) => {
    const Vacancy = sequelize.define('Vacancy', {
        title: {
            type: DataTypes.STRING,
            defaultValue: 'vacancy title',
        },
        description: {
            type: DataTypes.STRING(1000),
            defaultValue: 'description',
        },
        contacts: {
            type: DataTypes.STRING,
            defaultValue: 'contacts',
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        grade: {
            type: DataTypes.STRING,
            defaultValue: 'grade',
        },
        englishLvl: {
            type: DataTypes.STRING,
            defaultValue: 'englishLvl',
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        responded: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
        }
    });

    return Vacancy;
};
