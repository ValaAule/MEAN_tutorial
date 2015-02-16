angular.module('app')
.service('PostsSvc', function ($http) {
    this.fetch = function () {
        console.log('posts.svc.js: fetch post successful')
        return $http.get('/api/posts')
    }
    this.create = function (post) {
        console.log('posts.svc.js: create post successful')
        return $http.post('/api/posts', post)
    }
})