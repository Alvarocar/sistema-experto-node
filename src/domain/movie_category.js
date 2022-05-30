const { Model, DataTypes } = require('sequelize')
const sequelize = require('../infra/conection')
const Category = require('./category')
const Movie = require('./movie')

class MovieCategory extends Model {}

MovieCategory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }

}, {
    sequelize,
})

module.exports = MovieCategory