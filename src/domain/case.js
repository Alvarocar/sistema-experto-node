const { Model, DataTypes } = require('sequelize')
const Client = require('./client')
const sequelize = require('../infra/conection')

class Case extends Model {}

Case.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: Client,
            key: 'id',
        }
    },

}, {
    sequelize,
    tableName: 'case'
})

module.exports = Case