/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import Username from '../src/Username'

describe('toWeirdCase', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('addUsername()', function () {
    it('should to be addUsername year', function () {
      return expect(Username.addUsername([
        { firstName: 'Emily', lastName: 'N.', age: 30 },
      ]))
        .to.be.eqls([
          { firstName: 'Emily', lastName: 'N.', age: 30, username: 'emilyn1987' },
        ])
    })

    it('should to be addUsername year', function () {
      return expect(Username.addUsername([
        { firstName: 'Nor', lastName: 'E.', age: 21 },
      ]))
        .to.be.eqls([
          { firstName: 'Nor', lastName: 'E.', age: 21, username: 'nore1996' },
        ])
    })
  })
})

