const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
  symbol: {
    type: String,
    required: true
  },
  lastPrice: {
    type: Number,
    required: true
  },
  change: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  marketCap: {
    type: Number,
    required: true
  },
  timesSearched: {
    type: Number
  },
  datesSearched: {
    type: [Date]
  },
  lastSearched: {
    type: Date
  }
})

module.exports = User = mongoose.model('stocks', StockSchema)