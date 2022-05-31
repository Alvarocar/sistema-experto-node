const express = require('express')
const router = require('./src/controller')
const userRouter = require('./src/infra/controller/user')

const app = express()

app.use(express.json())

app.use('/api/exp', router)
app.use('/api/user', userRouter)

app.listen(8080, () => 
{console.info(`Starting in port number: ${8080}`)})