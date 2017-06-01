/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const httpStatus = require('http-status');

const APIError = require('../helpers/api-error');

/**
 *
 * @param {string} message
 */
module.exports = message => (err, req, res, next) => {
  message = message || httpStatus[httpStatus.NOT_FOUND]; // eslint-disable-line no-param-reassign
  return next(new APIError(message, httpStatus.NOT_FOUND, [], true, true));
};
