const express = require('express')
const router = require('./src/controller')
const userRouter = require('./src/infra/controller/user')
const jwt = require('./src/util/jwt')
const { expressjwt, UnauthorizedError } = require('express-jwt')
const sample = require('./src/bootstrap/sample_sql')
sample()

const app = express()

app.use(express.json())

app.use('/api/exp', expressjwt({ secret: jwt.getSecret, algorithms: ['HS256'] }), router)

app.use((err, _, res, next) => { 
    if (err.name == 'UnauthorizedError') {
        res.status(err.status).json({ message: err.message })
        console.error(err)
        return
    }
    next()
})

app.use('/api/user', userRouter)

app.listen(3000, () => 
{console.info(`Starting in port number: ${3000}`)})