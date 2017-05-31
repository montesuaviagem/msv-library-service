/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const httpStatus = require('http-status');

/**
 *
 * @param {string} env
 */
module.exports = env => (err, req, res, next) => { // eslint-disable-line no-unused-vars
  env = env || process.env.NODE_ENV || 'production'; // eslint-disable-line no-param-reassign
  const error = {
    message: err.isPublic ? err.message : httpStatus[err.status]
  };
  if (err.errors && err.errors.length > 0) {
    error.errors = err.errors;
  }
  if (env === 'development') {
    error.stack = err.stack;
  }
  return res.status(err.status).json(error);
};
