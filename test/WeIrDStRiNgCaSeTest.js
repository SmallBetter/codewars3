/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import WeIrDStRiNgCaSe from '../src/WeIrDStRiNgCaSe'

describe('toWeirdCase', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('toWeirdCase()', function () {
    it('should return the correct value for a single word', function () {
      return expect(WeIrDStRiNgCaSe.toWeirdCase('a'))
        .to.be.equal('A')
    })
    it('should return the correct value for a single word', function () {
      return expect(WeIrDStRiNgCaSe.toWeirdCase('This is the final test case'))
        .to.be.equal('ThIs Is ThE FiNaL TeSt CaSe')
    })
    it('should return the correct value for a single word', function () {
      return expect(WeIrDStRiNgCaSe.toWeirdCase('56465'))
        .to.be.equal('56465')
    })
    it('should return the correct value for a single word', function () {
      return expect(WeIrDStRiNgCaSe.toWeirdCase('WEIRD STRING CASE'))
        .to.be.equal('WeIrD StRiNg CaSe')
    })
    it('should return the correct value for a single word', function () {
      return expect(WeIrDStRiNgCaSe.toWeirdCase('similar code variations'))
        .to.be.equal('SiMiLaR CoDe VaRiAtIoNs')
    })
  })
})
