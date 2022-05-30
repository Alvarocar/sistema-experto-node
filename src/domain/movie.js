const { Model, DataTypes } = require('sequelize')
const sequelize = require('../infra/conection')

class Movie extends Model {}

Movie.init({
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

module.exports = Movie