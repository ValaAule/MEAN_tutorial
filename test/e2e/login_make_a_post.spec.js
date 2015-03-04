/**
 * Created by Aule on 2/21/15.
 * Tests logging in and making a post
 */
describe('making a post', function () {
    it('logs in and creates a new post', function () {
        // go to homepage
        browser.get('http://localhost:3001')

        //fill out and submit login form
        element(by.css('nav .login')).click()
        element(by.model('username')).sendKeys('wkwok')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()

        //submit a new post on the posts page
        element(by.css('nav .posts')).click()
        var post = 'my new post from an automated test' + Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()

        //the user should now see their post as the first post on the page
        //browser.pause()

    })
    //drops MongoDB after each test run
    //afterEach(function () {
    //db.connection.db.dropDatabase()
    //})
})