const userModel = require('../model/user')
const deviceModel = require('../model/device')
const activationDeviceModel = require('../model/deviceActivation')
const response = require('../config/response')
const ObjectId = require('mongoose').Types.ObjectId

exports.registrasi = (data) =>
  new Promise((resolve, reject) => {
    deviceModel.create(data)
      .then(() => resolve(response.suksesResponse('Berhasil Registrasi Device')))
      .catch(() => reject(response.errorResponse('Gagal Registrasi Device')))
  })

exports.aktivasiDevice = (data, userId) =>
  new Promise((resolve, reject) => {
    deviceModel.findOneAndDelete({
      devices_mac_address: data.macAddress
    }).then(device => {
      if (device) {
        delete device.__v
        let deviceActivation = {
          devices_mac_address: device.devices_mac_address,
          devices_name: device.devices_name,
          devices_code: data.deviceCode,
          device_type: device.device_type,
          devices_registration_date: device.devices_registration_date
        }
        activationDeviceModel.create(deviceActivation)
          .then(() => {
            userModel.updateOne({
                _id: ObjectId(userId)
              },
              {
                $push: {
                  devices: deviceActivation
                }
              }).then(() => {
                resolve(response.suksesResponse('Berhasil Aktivasi Device'))
              }).catch((err) => {
                reject(response.errorResponse('Terjadi Kesalahan Pada Server'))
              })
          }).catch(err => {
            reject(response.errorResponse('Terjadi Kesalahan Pada Server'))
          })
      } else {
        reject(response.errorResponse('Mac Address Tidak Terdaftar'))
      }
    })
  })

exports.tambahZona = (data) =>
  new Promise((resolve, reject) => {
    userModel.updateOne({
      email: data.email,
      "devices.mac": data.mac
    },
    {
      $push: {
        "devices.$.zona": {
                zona_name: data.zona_name,
                zona_number: data.zona_number,
                jadwal: []
              }
      }
    }).then(() => {
      resolve(response.suksesResponse('Berhasil Nambah Zona'))
    }).catch(() => {
      reject(response.errorResponse('Gagal Menambah Zona'))
    })
  })