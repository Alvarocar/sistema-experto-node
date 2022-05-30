const { Model, DataTypes } = require('sequelize')
const sequelize = require('../infra/conection')

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
})

module.exports = Category