require('./lib/mongoose')
const debug = require('debug')('app:server')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { port } = require('./config')
const apiServices = require('./router/services')
const notFoundHandler = require('./middleware/notFoundHandler')
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./middleware/errorHandler')
const app = express()

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

apiServices(app)

app.use(notFoundHandler)

app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(port, () => debug(`Server on port ${port}`))
