const { Model, DataTypes } = require('sequelize')
const sequelize = require('../infra/conection');
const Category = require('./category');

class Movie extends Model {}

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    tableName: 'movie',
})

module.exports = Movie