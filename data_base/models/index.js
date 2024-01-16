const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        operatorsAliases: false,
    },
);

sequelize
    .authenticate()
    .then(() => {
        console.log(
            `          [  CONNECTED WITH DB ${config.database}]`,
        );
    })
    .catch(err => {
        console.log('          [  CONNECTED WITH DB:ERROR! ]: ' + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, DataTypes);
db.companies = require('./company')(sequelize, DataTypes);
db.vacancies = require('./vacancy')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(res => {
    console.log('          [  SYNC DONE  ]');
});

module.exports = db;