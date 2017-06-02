/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

/**
 * Monte sua Viagem Lib modules.
 * @module @msv/libs
 */
const msvLibs = exports;

/**
 *
 * @type {string}
 */
msvLibs.version = require('./version');
/**
 *
 * @type {APIError}
 */
msvLibs.APIError = require('./libs/helpers/api-error');
/**
 *
 */
msvLibs.joiMessageErrors = require('./libs/helpers/joi-messages');
/**
 *
 */
msvLibs.apiErrorMiddleware = require('./libs/middlewares/api-error.middleware');
/**
 *
 */
msvLibs.apiNotFoundErrorMiddleware = require('./libs/middlewares/api-not-found-error.middleware');
/**
 *
 */
msvLibs.errorHandlerMiddleware = require('./libs/middlewares/error-handler.middleware');
