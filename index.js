require('./lib/mongoose')
const debug = require('debug')('app:server')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { port } = require('./config')
const apiServices = require('./router/services')
const app = express()

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

apiServices(app)

app.listen(port, () => debug(`Server on port ${port}`))
