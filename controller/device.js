const userModel = require('../model/user')
const deviceModel = require('../model/device')
const response = require('../config/response')
const ObjectId = require('mongoose').Types.ObjectId

exports.registrasi = (data) =>
  new Promise((resolve, reject) => {
    deviceModel.create(data)
      .then(() => resolve(response.suksesResponse('Berhasil Registrasi Device')))
      .catch(() => reject(response.errorResponse('Gagal Registrasi Device')))
  })

exports.aktivasiDevice = (macAddres, userId) =>
  new Promise((resolve, reject) => {
    deviceModel.findOneAndDelete({
      devices_mac_address: macAddres
    }).then(device => {
      if (device) {
        delete device.__v
        userModel.updateOne({
          _id: ObjectId(userId)
        },
        {
          $push: {
            devices: device
          }
        }).then(() => {
          resolve(response.suksesResponse('Berhasil Aktivasi Deive'))
        }).catch((err) => {
          console.log(err)
        })
      } else {
        reject(response.errorResponse('Mac Address Tidak Terdaftar'))
      }
    })
  })