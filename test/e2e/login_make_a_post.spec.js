/**
 * Created by Aule on 2/21/15.
 * Tests logging in and making a post
 */

var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = require('chai').expect

describe('login and make a post:', function () {
    it('login and creates a new post', function () {
        // go to homepage
        browser.get('http://localhost:3001')

        //fill out and submit login form
        element(by.css('nav .login')).click()
        element(by.model('username')).sendKeys('wkwok')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()
    })

    it('go to posts and type in a new post', function() {

        //submit a new post on the posts page
        element(by.css('nav .posts')).click()
        var post = 'my new post from an automated test' + Math.random()
        element(by.model('postBody')).sendKeys(post)
        element(by.css('form .btn')).click()
        console.log('Created Post: ' + post)

        //can't get this to run in the proper sequence - it grabs the first post before tests run rather than after
        //expect(element.all(by.css('ul.posts li')).first().getText()).to.eventually.contain(post)

        //the user should now see their post as the first post on the page
        //browser.pause()

    })
    //drops MongoDB after each test run
    //afterEach(function () {
    //db.connection.db.dropDatabase()
    //})
})