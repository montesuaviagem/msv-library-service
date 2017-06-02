/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const _ = require('lodash');

/**
 *
 * @param errors
 */
module.exports.parse = (errors) => {
  const result = [];
  _.each(errors, (err) => {
    result.push({ message: err.message, attribute: err.path });
  });
  return result;
};
