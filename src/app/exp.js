const Client = require("../domain/client")
const Case = require("../domain/case")
const { gToken } = require("../util/jwt")
const Category = require("../domain/category")
const Preferences = require('../domain/preferences')
const { sequelize } = require("../domain/client")

const access = async (id) => {
    try {
        const client = await Client.findOne({ where: { id } })
        if (!client) {
            throw new Error('Acceso Denegado')
        }
        return client
    } catch(e) {
        throw new Error(e)
    }
}



/**
 * 
 * @param {string} id UUID Client
 */
module.exports.createCase = async (
    id
) => {
    try {
        const client = await Client.findOne({ where: { id } })
        if (!client) {
            throw new Error('Acceso Denegado')
        }
        const caseInstance = Case.build({ user_id: client.getDataValue('id') })
        const caseResult = await caseInstance.save()
        return { case: caseResult, token: gToken(client.get({ plain: true })), type: 'Bearer' }
    } catch(e) {
        console.error(e)
        throw new Error('Algo Salio mal')
    }
}

module.exports.start = async (userId) => {
    try {
        const currentUser =await access(userId)
        const categories = await Category.findAll({ limit: 4 })
        return { options: categories, token: gToken(currentUser.get({ plain: true })), type: 'Bearer'}
    } catch(e) {
        console.error(e)
        throw new Error('Algo Salio mal')
    }
}

// answer === category
module.exports.giveAnswer = async (
    options = { case_id: '', answer: '', client_id: '' }
) => {
    try {
        await access(options.client_id)
        await Preferences.create({ case_id: options.case_id, category: options.answer })
        const preferencesModel = await Preferences.findAll({ where: { case_id: options.case_id } })
        const preferences = preferencesModel.map(v => v.get({ plain: true }))
        sequelize.query(`
            Select c.name from category as c
            inner join movie_category as mc on c.id = mc.category_id
            where mc.movie_id in
            (SELECT m.id FROM category as c
            inner join movie_category as mc on c.id = mc.category_id
            inner join movie as m on m.id = mc.movie_id
            where c.name = 'horror' or c.name = 'zombies' --dinamic
            group by m.id
            having count(*) >= 2) --dinamic 
            group by c.name
            having c.name != 'horror' and c.name != 'zombies' --dinamic
        `)
        return
    } catch(e) {
        throw new Error(e.message)
    }
}