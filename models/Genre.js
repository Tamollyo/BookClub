const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Genre = new Schema(
  {
    type: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('database', Genre)
