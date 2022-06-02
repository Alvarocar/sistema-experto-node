const { Router, response } = require('express')
const service = require('./service')
const ro = Router()
const jwt = require('./util/jwt')
const expService = require('./app/exp')

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

ro.post('/create_case',  (req, res) => {
    const { authorization } = req.headers
    const [, auth] = authorization.split(' ')
    const client = jwt.decryptToken(auth)
    expService.createCase(client.id)
    .then(result => {
        res.status(201)
        .json(result)
    })
    .catch(e => {
        res.status(400)
        .json({ message: e.message })
    })
})

ro.get('/start_exp', (req, res) => {
    const { authorization } = req.headers
    const [, auth] = authorization.split(' ')
    const client = jwt.decryptToken(auth)
    expService.start(client.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(e => {
        res.status(400).json({message: e.message})
    })
})

ro.post('/give_answer', (req, res) => {
    const { authorization } = req.headers
    const [, auth] = authorization.split(' ')
    const client = jwt.decryptToken(auth)
    const { case_id } = req.query
    const { answer } = req.body
    expService.giveAnswer({ case_id: case_id, answer, client_id: client.id  })
    .then(result => {
        res.status(200).json({options: result})
    })
    .catch(e => {
        res.status(400).json({message: e.message})
    })

})

ro.get('/suggest', (req, res) => {
    const { authorization } = req.headers
    const [, auth] = authorization.split(' ')
    const client = jwt.decryptToken(auth)
    const { case_id } = req.query
    expService.suggest({ case_id: case_id, client_id: client.id  })
    .then(result => {
        res.status(200).json({movies: result})
    })
    .catch(e => {
        res.status(400).json({message: e.message})
    })
})

module.exports = ro