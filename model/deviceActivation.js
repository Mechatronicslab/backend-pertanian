const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeviceActivationSchema = new Schema({
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
    type: Date
  },
  device_type: {
    type: String
  },
  devices_actidevices_activation_date: {
    type: Date,
    default: new Date().toLocaleDateString()
  }
})

module.exports = mongoose.model('enak', DeviceActivationSchema)