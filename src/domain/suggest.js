const { Model, DataTypes } = require('sequelize')
const sequelize = require('../infra/conection')
const Case = require('./case')
const Movie = require('./movie')

class Suggest extends Model {}

Suggest.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    case_id: {
        type: DataTypes.UUID,
        references: {
            model: Case,
            key: 'id',
        }
    },
    id_movie: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            key: 'id',
        }
    }

}, {
    sequelize,
    tableName: 'suggest',
})

module.exports = Suggest