'use strict'

const log = require('db.log')
const j = require('j.require')
const db = j.require('db/db')
const dataTypes = require('sequelize')

// define the model with sequelize
const ZipCode = db.define('zip_code', {

  code: dataTypes.STRING,

  city: dataTypes.STRING,

  state: dataTypes.STRING,

  latitude: dataTypes.FLOAT,

  longitude: dataTypes.FLOAT

})

ZipCode.sync().then(() => log.info('Database has been synced'))

module.exports = ZipCode
