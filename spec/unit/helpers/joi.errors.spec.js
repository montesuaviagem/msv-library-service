/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

const chai = require('chai');
const should = require('should');
const _ = require('lodash');

const mockJoiErrors = require('../../mock-joi-errors.json');

const expect = chai.expect;

chai.config.includeStack = true;

describe('# JoiErrors', () => {
  let joiErrors;
  beforeEach(() => {
    joiErrors = require('../../../src/internal/joi-errors');
  });
  it('Should exists', (done) => {
    expect(joiErrors).to.not.equal(null);
    done();
  });
  describe('## parse()', () => {
    it('Should exists', (done) => {
      expect(joiErrors.parse).to.not.equal(null);
      done();
    });
    it('Should be an function', (done) => {
      expect(joiErrors.parse).to.be.an('function');
      done();
    });
    it('Should required ne argument', (done) => {
      expect(joiErrors.parse.length).to.equal(1);
      done();
    });
    it('Should return an array', (done) => {
      expect(joiErrors.parse()).to.be.an('array');
      done();
    });
    describe('### transform error', () => {
      it('Should transform an JoiError to custom error', (done) => {
        joiErrors.parse(mockJoiErrors.originalErrors).should.eql(mockJoiErrors.expectedErrors);
        done();
      });
      it('Should transform an JoiError to custom error with property message', (done) => {
        expect(joiErrors.parse(mockJoiErrors.originalErrors)[0]).to.have.property('message');
        done();
      });
      it('Should transform an JoiError to custom error with property attribute', (done) => {
        expect(joiErrors.parse(mockJoiErrors.originalErrors)[0]).to.have.property('attribute');
        done();
      });
    });
  });
});
