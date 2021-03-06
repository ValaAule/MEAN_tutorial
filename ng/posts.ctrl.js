/**
 * Created by Aule on 2/6/15.
 * create the PostsCtrl module and dependency inject $scope, the scope ties/glues the controller to the view
 * integrate to the REST API to post back to MongoDB.  Only the success function is posted and it nulls the value for the next time
 */

angular.module('app')
.controller("PostsCtrl",function ($scope, PostsSvc) {
    $scope.addPost = function() {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'Add Post Button',
                body: $scope.postBody
            //if server responses success, unshift (add) the post onto $scope.posts and then set it to null
            }).success(function (post) {
             //   $scope.posts.unshift(post) - removed to prevent aadded it twice
                $scope.postBody = null
                console.log('posts.ctrl.js: create post successful')
            })
        }
    }

// I don't seem to be able to call this code successfully
$scope.$on('ws:new_post', function (_, post) {
    $scope.$apply(function () {
        $scope.posts.unshift(post)
        console.log('posts.ctrl.js: websocket new post successful')
        })
    })

    PostsSvc.fetch()
        .success(function (posts) {
            $scope.posts = posts
            console.log('posts.ctrl.js: fetch post successful')
        })
})
