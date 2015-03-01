/**
 * Created by Aule on 2/21/15.
 * Tests logging in and making a post
 */
describe('making a post', function () {
    it('logs in and creates a new post', function () {
        // go to homepage
        browser.get('http://localhost:3001')

        //submit a new post on the posts page
        element(by.css('nav .register')).click()
        element(by.model('username')).sendKeys('protractor' + Math.random())
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()

    })
})