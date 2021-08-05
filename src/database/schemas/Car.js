const mongoose = require('../connectionWithMongoose')

const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },

  model: {
    type: String,
    required: true
  },
  version: {
    type: String
  },

  year: {
    type: Number
  },

  traveled_kilometer: {
    type: Number,
    required: true
  },

  gearshift: {
    type: String,
    required: true
  },

  sale_price: {
    type: Number,
    required: true
  },

  created_at: {
    type: Date,
    default: Date.now()
  }
})

const CarModel = mongoose.model('Car', CarSchema)

module.exports = CarModel
