/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const chai = require('chai');
const httpMock = require('node-mocks-http');
const sinon = require('sinon');

const APIError = require('../../../src/libs/helpers/api-error');

const expect = chai.expect;

describe('# ErrorHandlerMiddleware', () => {
  let middleware;
  beforeEach(() => {
    middleware = require('../../../src/libs/middlewares/error-handler.middleware');
  });
  it('Should exists', (done) => {
    expect(middleware).to.not.equal(null);
    done();
  });
  it('Should return an function', (done) => {
    expect(middleware()).to.be.an('function');
    done();
  });
  it('Should required one argument', (done) => {
    expect(middleware.length).to.equal(1);
    done();
  });
  describe('## calling', () => {
    let req;
    let res;
    let err;
    let next;
    beforeEach(() => {
      req = httpMock.createRequest();
      res = httpMock.createResponse();
      err = new APIError('Sample Error', 500, []);
      next = () => {};
    });
    it('Should call middleware function and return an object', (done) => {
      middleware()(err, req, res, next);
      expect(res._isJSON()).to.be.true; // eslint-disable-line no-unused-expressions
      done();
    });
    it('Should call middleware function and return an object with message property', (done) => {
      middleware()(err, req, res, next);
      expect(JSON.parse(res._getData())).to.have.property('message');
      done();
    });
    it('Should call middleware function and return an object with message property equals Sample Error when error isPublic === true', (done) => {
      const error = new APIError('Sample Error', 500, [], false, true);
      middleware()(error, req, res, next);
      expect(JSON.parse(res._getData())).to.have.property('message').and.to.equal('Sample Error');
      done();
    });
    it('Should call middleware function and return an object with message property equals http status name when error isPublic === false', (done) => {
      middleware()(err, req, res, next);
      expect(JSON.parse(res._getData())).to.have.property('message').and.to.equal('Internal Server Error');
      done();
    });
    it('Should call middleware function and return HTTP STATUS 500', (done) => {
      middleware()(err, req, res, next);
      expect(res.statusCode).to.equal(500);
      done();
    });
    it('Should call middleware function and return HTTP STATUS 400', (done) => {
      const error = new APIError('Sample Error', 400, []);
      middleware()(error, req, res, next);
      expect(res.statusCode).to.equal(400);
      done();
    });
    it('Should call middleware function and return an object without errors property when in Error is not defined', (done) => {
      middleware()(err, req, res, next);
      expect(JSON.parse(res._getData())).to.not.have.property('errors');
      done();
    });
    it('Should call middleware function and return an object with errors property', (done) => {
      const error = new APIError('Sample Error', 400, [{ message: 'message' }]);
      middleware()(error, req, res, next);
      expect(JSON.parse(res._getData())).to.have.property('errors');
      done();
    });
    it('Should call middleware function and return an object with property stack if env argument equals development', (done) => {
      middleware('development')(err, req, res, next);
      expect(JSON.parse(res._getData())).to.have.property('stack');
      done();
    });
    it('Should call middleware function and return an object without property stack if env argument not equals development', (done) => {
      middleware('production')(err, req, res, next);
      expect(JSON.parse(res._getData())).to.not.have.property('stack');
      done();
    });
  });
});
