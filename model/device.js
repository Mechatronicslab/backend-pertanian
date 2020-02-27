const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeviceSchema = new Schema({
  devices_mac_address: {
    type: String
  },
  devices_name: {
    type: String
  },
  device_type: {
    type: String
  },
  devices_registration_date: {
    type: Date,
    default: Date().toLocaleString()
  }
})

module.exports = mongoose.model('croot', DeviceSchema)