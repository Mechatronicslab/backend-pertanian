const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  guid: {
    type: String
  },
  no_ktp: {
    type: Number
  },
  nama: {
    type: String
  },
  no_hp: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  alamat: {
    type: String
  },
  password: {
    type: String
  },
  user_location: {
    latitude: {
      type: String
    },
    longitude: {
      type: String
    }
  },
  devices: [
    {
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
      devices_activation_date: {
        type: Date,
        default: new Date().toLocaleDateString()
      },
      zona: [{
          zona_name: {
            type: String
          },
          zona_number: {
            type: Number
          },
          jadwal: {
              dayPriod_timePriod: [
                {
                  type: Date
                }
              ],
              time_priode: [
                {
                  jam: {
                    type: String
                  }
                }
              ]
          },
          Seconds_duration: {
            type: Number
          },
          user_slot: {
            type: Number
          },
          foto: {
            type: String
          }
      }]
    }
  ]
})

module.exports = mongoose.model('hehe', UserSchema)