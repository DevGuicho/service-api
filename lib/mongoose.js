const debug = require('debug')('app:databse')
const mongoose = require('mongoose')
const { dbUser, dbPassword, dbName } = require('../config')

const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ih2pv.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => debug('Databse connected'))
