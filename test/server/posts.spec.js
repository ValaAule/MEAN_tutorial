/**
 * Created by Aule on 3/5/15.
 * Mocha: Stub for a controller test (just checks to see if controller exists)
 */

var expect = require('chai').expect
var ctrl = require('../../controllers/api/posts')

describe('controllers.api.posts', function() {
    it('exists', function() {
        expect(ctrl).to.exist
    })
})