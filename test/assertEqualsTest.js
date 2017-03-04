/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import assertEquals from '../src/assertEquals'

describe('Template', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })


  describe('solution()', function () {
    it('should number in searchText to be 2', function () {
      return expect(assertEquals.solution('abcdeb', 'b'))
        .to.be.equal(2)
    })

    it('should number in searchText to be 1', function () {
      return expect(assertEquals.solution('abc', 'b'))
        .to.be.equal(1)
    })

    it('should number in searchText to be 1', function () {
      return expect(assertEquals.solution('abbc', 'bb'))
        .to.be.equal(1)
    })

    it('should number in searchText to be 1', function () {
      return expect(assertEquals.solution('abbc', 'bb'))
        .to.be.equal(1)
    })

    it('should number in searchText to be 1', function () {
      return expect(assertEquals.solution('abcdefdhvbhibjkyb', 'z'))
        .to.be.equal(0)
    })
  })
})

