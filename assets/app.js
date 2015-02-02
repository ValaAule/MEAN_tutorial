/**
 * Created by Aule on 1/14/15.
 * Server file
 */


//create the app module
var app = angular.module("app",[])

app.service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts')
    }
    this.create = function (post) {
        return $http.post('/api/posts', post)
    }
})

//create the PostsCtrl module and dependency inject $scope, the scope ties/glues the controller to the view
//integrate to the REST API to post back to MongoDB.  Only the success function is posted and it nulls the value for the next time
app.controller("PostsCtrl",function ($scope, PostsSvc) {
    $scope.addPost = function() {
        if ($scope.postBody) {
            $http.post('/api/posts', {
                username: 'new user3',
                body: $scope.postBody
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })
        }
    }

    PostsSvc.fetch()
        .success(function (posts) {
            $scope.posts = posts
})

console.log('app.js called')