const { Model, DataTypes } = require('sequelize')
const Case = require('./case')
const sequelize = require('../infra/conection')

class Preferences extends Model {}

Preferences.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrementIdentity: true
    },
    case_id: {
        type: DataTypes.UUID,
        references: {
            model: Case,
            key: 'id'
        }
    }
}, {
    sequelize,
})

export default Preferences