/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const chai = require('chai');
const httpMock = require('node-mocks-http');
const sinon = require('sinon');

const APIError = require('../../../src/libs/helpers/api-error');

const expect = chai.expect;

describe('# APIErrorMiddleware', () => {
  let middleware;
  beforeEach(() => {
    middleware = require('../../../src/libs/middlewares/api-error.middleware'); // eslint-disable-line global-require
  });
  it('Should exists', (done) => {
    expect(middleware).to.not.equal(null);
    done();
  });
  it('Should return an function', (done) => {
    expect(middleware()).to.be.an('function');
    done();
  });
  it('Should required none arguments', (done) => {
    expect(middleware.length).to.equal(0);
    done();
  });
  describe('## next()', () => {
    let req;
    let res;
    let err;
    beforeEach(() => {
      req = httpMock.createRequest();
      res = httpMock.createResponse();
      err = Error('sample message error');
    });
    it('Should call next() once', (done) => {
      const next = sinon.spy();
      middleware()(err, req, res, next);
      expect(next.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
      done();
    });
    it('Should call next() and argument be an instance APIError', (done) => {
      middleware()(err, req, res, (e) => {
        e.should.be.instanceOf(APIError);
        done();
      });
    });
  });
});
