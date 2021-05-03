const debug = require('debug')('app:server')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { port } = require('./config')
const app = express()

app.use(cors())
app.use(morgan('dev'))

app.listen(port, () => debug(`Server on port ${port}`))
