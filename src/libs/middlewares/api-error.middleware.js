/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const httpStatus = require('http-status');

const APIError = require('../helpers/api-error');

/**
 *
 */
module.exports = () => (err, req, res, next) => {
  if (!(err instanceof APIError)) {
    const status = err.status || err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const errors = err.errors || [];
    return next(new APIError(err.message, status, errors));
  }
  return next(err);
};
