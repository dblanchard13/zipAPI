'use strict'

const ZipCode = require('./ZipCode.model')
const j = require('j.require')
const _ = require('lodash')
const log = require('db.log')

exports.zipCodeParam = (req, res, next, code) => {
  // fetch the necessary fields for the result
  let attributes = ['code', 'city', 'state']
  // add latitude and longitude if request query includes precise
  if (req.query['precise']) attributes = attributes.concat('latitude', 'longitude')

  ZipCode
    .find({where: { code }, attributes})
    .then((result) => {
      if(!result){
        res.end('No result with that code')
        return
      }

      // capitalize only the first letter of each word in the city name
      result.city = result.city.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
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
