/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const httpStatus = require('http-status');

/**
 *
 */
class ExtendableError extends Error {
  /**
   *
   * @param message
   * @param status
   * @param errors
   * @param isOperational
   * @param isPublic
   */
  constructor(message, status, errors, isOperational, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status || httpStatus.INTERNAL_SERVER_ERROR;
    this.errors = errors;
    this.isOperational = isOperational;
    this.isPublic = isPublic;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 *
 */
class APIError extends ExtendableError {
  constructor(message, status, errors = [], isOperational = false, isPublic = false) {
    super(message, status, errors, isOperational, isPublic);
  }
}

module.exports = APIError;
