'use strict'

const ZipCode = require('./ZipCode.model')
const j = require('j.require')
const _ = require('lodash')
const log = require('db.log')

exports.zipCodeParam = (req, res, next, code) => {
  // fetch the necessary fields for the result
  ZipCode
    .find({where: { code }, attributes: ['code', 'city', 'state']})
    .then((result) => {
      if(!result){
        res.end('No result with that code')
        return
      }

      // attach result to the request object
      req.result = result
      next()
    })
    .catch((err) => {
      log.error(`Error in the zipCodeParam endpoint: ${err.stack}`)
      next(err)
    })
}

exports.getCityAndState = (req, res, next) => {
  res.json(req.result)
}
