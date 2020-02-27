const router = require('express').Router()
const deviceController = require('../controller/device')

router.post('/register', (req, res) => {
  deviceController.registrasi(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/aktivasi/:id', (req, res) => {
  deviceController.aktivasiDevice(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


module.exports = router