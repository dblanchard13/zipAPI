'use strict'

const router = require('express').Router()

// use the urlFetch routes for the andpoint at /api/zip-code
router.use('/zip-code', require('./ZipCode/ZipCode.routes'))

module.exports = router
