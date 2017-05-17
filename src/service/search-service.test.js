import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import { equal } from 'assert'

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

		it('specify response for a specific request', function() {

		})
	})
})
