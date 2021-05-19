const debug = require('debug')('app:database')
const mongoose = require('mongoose')
const { dbUser, dbPassword, dbName, dbHost } = require('../config')

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => debug('Databse connected'))
