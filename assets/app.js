/**
 * Created by Aule on 1/14/15.
 * Application Logic for controllers ans services
 */

var app = angular.module("app",[])

//create the PostsCtrl module and dependency inject $scope, the scope ties/glues the controller to the view
//integrate to the REST API to post back to MongoDB.  Only the success function is posted and it nulls the value for the next time
app.controller("PostsCtrl",function ($scope, PostsSvc) {
    $scope.addPost = function() {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'Add Post Button',
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
})

app.service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts')
    }
    this.create = function (post) {
        return $http.post('/api/posts', post)
    }
})
