/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const chai = require('chai');
const httpStatus = require('http-status');
const should = require('should');

const APIError = require('../../../src/libs/helpers/api-error');

const expect = chai.expect;

chai.config.includeStack = true;

describe('# APIError', () => {
  let apiError;
  beforeEach(() => {
    apiError = new APIError('Sample message error');
  });
  it('Should exists', (done) => {
    expect(apiError).to.not.equal(null);
    done();
  });
  it('Should be an instance of Error', (done) => {
    apiError.should.be.an.instanceOf(Error);
    done();
  });
  it('Should required two arguments', (done) => {
    expect(APIError.prototype.constructor.length).to.equal(2);
    done();
  });
  it('Should have property name with value APIError', (done) => {
    expect(apiError).to.have.property('name').and.to.equal('APIError');
    done();
  });
  it('Should have property message with value Sample message error', (done) => {
    expect(apiError).to.have.property('message').and.to.equal('Sample message error');
    done();
  });
  it('Should have property status with value 500', (done) => {
    expect(apiError).to.have.property('status').and.to.equal(500);
    done();
  });
  it('Should have property errors with value []', (done) => {
    expect(apiError).to.have.property('errors').and.to.be.an('array').an.to.empty; // eslint-disable-line no-unused-expressions
    done();
  });
  it('Should have property errors with value [{}]', (done) => {
    const apiErrorExpected = new APIError('message', httpStatus.OK, [{ message: 'message'} ]);
    expect(apiErrorExpected).to.have.property('errors').and.to.be.an('array').an.to.not.empty; // eslint-disable-line no-unused-expressions
    done();
  });
  it('Should have property isOperational with value false', (done) => {
    expect(apiError).to.have.property('isOperational').and.to.equal(false);
    done();
  });
  it('Should have property isOperational with value true', (done) => {
    const apiErrorExpected = new APIError('message', httpStatus.OK, [], true);
    expect(apiErrorExpected).to.have.property('isOperational').and.to.equal(true);
    done();
  });
  it('Should have property isPublic with value false', (done) => {
    expect(apiError).to.have.property('isPublic').and.to.equal(false);
    done();
  });
  it('Should have property isPublic with value true', (done) => {
    const apiErrorExpected = new APIError('message', httpStatus.OK, [], false, true);
    expect(apiErrorExpected).to.have.property('isPublic').and.to.equal(true);
    done();
  });
});
