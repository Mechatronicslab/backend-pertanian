const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  devices_mac_address: {
    type: String
  },
  devices_name: {
    type: String
  },
  devices_code: {
    type: String
  },
  devices_registration_date: {
    type: Date,
    default: Date().toLocaleString()
  }
})

module.exports = mongoose.model('croot', UserSchema)