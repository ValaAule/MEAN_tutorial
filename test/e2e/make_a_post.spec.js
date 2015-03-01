/**
 * Created by Aule on 2/21/15.
 * Tests logging in and making a post
 */
describe('making a post', function () {
    it('logs in and creates a new post', function () {
        // go to homepage
        browser.get('http://localhost:3001')

        //submit a new post on the posts page
        element(by.css('nav .posts')).click()
        var post = 'my new post from an automated test' + Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()

    })
})