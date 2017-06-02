/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const httpStatus = require('http-status');

/**
 * Extendable error for APIError exceptions
 */
class ExtendableError extends Error {
  /**
   * Creates new instance of ExtendableError
   *
   * @param {string} message
   * @param {number} status
   * @param {Object[]} errors
   * @param {boolean} isOperational
   * @param {boolean} isPublic
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
 * Represents an API Error exceptions
 */
class APIError extends ExtendableError {
  /**
   * Creates new instance of APIError
   *
   * @param {string} message
   * @param {number} status
   * @param {Object[]} [errors]
   * @param {boolean} [isOperational]
   * @param {boolean} [isPublic]
   */
  constructor(message, status, errors = [], isOperational = false, isPublic = false) {
    super(message, status, errors, isOperational, isPublic);
  }
}

module.exports = APIError;
