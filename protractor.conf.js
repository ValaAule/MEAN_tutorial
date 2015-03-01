/**
 * Created by Aule on 2/21/15.
 * Protractor configuration file
 */

exports.config = {
    framework: 'mocha',
    specs: [
        'test/e2e/**/*.spec.js'
    ],
    mochaOpts: {
        enableTimeouts: false
    },
    onPrepare: function() {
        process.env.PORT = 3001
        require('./server')
    }
}
