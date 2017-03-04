/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import thisSolution from '../src/thisSolution'

describe('Template', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('Solution()', function () {
    it('should ...', function () {
      return expect(thisSolution.Solution('abcdef'))
        .to.be.eqls(['ab', 'cd', 'ef'])
    })
    it('should ...', function () {
      return expect(thisSolution.Solution('abcde'))
        .to.be.eqls(['ab', 'cd', 'e_'])
    })
    it('should ...', function () {
      return expect(thisSolution.Solution('ABcDeF'))
        .to.be.eqls(['AB', 'cD', 'eF'])
    })
  })
})
