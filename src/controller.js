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
        if (!options.includes(option)) {
            options.push(option)
        }
    })
})

ro.put('/ask', (req, res) => {
    const { answers } = req.body
    const movies = []
    service.findMovie(answers, (movie) => {
        if (!movie) {
            res.json({ movies })
            return
        }
        if (!movies.includes(movie)) {
            movies.push(movie)
        }
    })
})


module.exports = ro