/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import CamelCaseMethod from '../src/CamelCaseMethod'

describe('camelCase', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('camelCase()', function () {
    it('should String tobe camelCase', function () {
      return expect(CamelCaseMethod.camelCase('a'))
        .to.be.equal('A')
    })

    it('should String tobe camelCase', function () {
      return expect(CamelCaseMethod.camelCase('This is the final test case'))
        .to.be.equal('ThisIsTheFinalTestCase')
    })

    it('should String tobe camelCase', function () {
      return expect(CamelCaseMethod.camelCase('WEIRD STRING CASE'))
        .to.be.equal('WeirdStringCase')
    })

    it('should String tobe camelCase', function () {
      return expect(CamelCaseMethod.camelCase('similar code variations'))
        .to.be.equal('SimilarCodeVariations')
    })

    it('should String tobe camelCase', function () {
      return expect(CamelCaseMethod.camelCase('4564'))
        .to.be.equal('4564')
    })
  })
})
