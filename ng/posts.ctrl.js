/**
 * Created by whitman on 2/6/15.
 */
angular.module('app')

//create the PostsCtrl module and dependency inject $scope, the scope ties/glues the controller to the view
//integrate to the REST API to post back to MongoDB.  Only the success function is posted and it nulls the value for the next time
.controller("PostsCtrl",function ($scope, PostsSvc) {
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
