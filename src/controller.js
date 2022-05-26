const { Router } = require('express')
const service = require('./service')
const ro = Router()

ro.put('/', async (req, res) => {
    const { answers } = req.body
    const options = []
    await service.query(answers, (option) => {
        if (!option) {
            res.json({ options })
            return
        }
        options.push(option)
    })
})


module.exports = ro