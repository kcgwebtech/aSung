const Sequelize = require('sequelize');

const database = new Sequelize(
    'aacount',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

module.exports = database;