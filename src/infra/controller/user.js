const { Router } = require('express')
const userService = require('../../app/user')
const ro = Router()

ro.post('/signup', (req, res) => {
    const { fullname, email, password } = req.body
    userService.createUser({ fullname, email, password })
    .then(jwt => {
        res.status(201)
        .json({ token: jwt, type: 'Bearer' })
    })
    .catch((e) => {
        res.status(400)
        .json({ message: e.message })
    })
})

ro.put('/login', (req, res) => {
    const { email, password } = req.body
    userService.getToken({ email, password })
    .then(token => {
        res.status(200)
        .json({ token, type: 'Bearer' })
    })
    .catch(e => {
        res.status(400)
        .json({ message: e.message })
    })
})

module.exports = ro
