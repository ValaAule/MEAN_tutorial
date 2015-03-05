/**
 * Created by Aule on 2/21/15.
 * Tests logging in and making a post
 */

describe('create a post:', function () {
    it('type a post', function () {
        // go to homepage
        browser.get('http://localhost:3001')

        //submit a new post on the posts page
        element(by.css('nav .posts')).click()
        var post = 'my new post from an automated test' + Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()
        console.log('Created Post: ' + post)

    })
})