const { Model, DataTypes } = require('sequelize')
const sequelize = require('../infra/conection');
const Movie = require('./movie');

class Category extends Model {}

Category.init({
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
    tableName: 'category'
})



module.exports = Category