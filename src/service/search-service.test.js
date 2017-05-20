import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import {equal, assert} from 'assert'
import {submitSearch} from './search-service'

describe('mocking service requests', function() {
  describe('with the expected results', function() {
    beforeEach(function() {
      // Import custom axios instance
      moxios.install()
    })
    afterEach(function() {
      // Remove custom axios instance
      moxios.uninstall()
    })

    it('specify an expected response', function() {
      let callback = sinon.spy();
      submitSearch({}, 'https://anyurl.com/api').then(callback)
      moxios.wait(function() {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: {
            "airline": {
              "code": 2,
              "name": "Chan",
              "thumbnail": ""
            },
            "result": [
              {
                "flightcode": "123",
                "origin": "MDE",
                "destination": "BOG",
                "price": 125000,
                "currency": "COP",
                "date": "20:30 16-08-2017"
              }, {
                "flightcode": "4536",
                "origin": "MDE",
                "destination": "BOG",
                "price": 97000,
                "currency": "COP",
                "date": "12:30 12-05-2017"
              }
            ]
          }
        }).then(function() {
          equal(callback.called, true);
        })
      })
    })
  })
})
