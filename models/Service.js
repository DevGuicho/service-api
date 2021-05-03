const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  port: {
    type: Number,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  ranking: {
    type: String,
    required: true
  }
})

serviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject.__v
    delete returnedObject._id
  }
})

const Service = model('Service', serviceSchema)

module.exports = Service
