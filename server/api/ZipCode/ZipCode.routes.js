'use strict';

const router = require('express').Router();
const log = require('db.log');
const controller = require('./ZipCode.controller');

// the root of all these routes is /api/fetch-url/

// run this controller action for whenever an id param is defined for these routes
router.param('code', controller.zipCodeParam);

// define the get route and linkit to the proper controller action
router.route('/:code')
  .get(controller.getCityAndState)

module.exports = router;
