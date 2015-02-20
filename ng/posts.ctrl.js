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
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
                console.log('posts.ctrl.js: create post successful')
            })
        }
    }

  $scope.$on('ws:new_post', function (_, post) {
    $scope.$apply(function () {
      $scope.posts.unshift(post)
    })
  })

    PostsSvc.fetch()
        .success(function (posts) {
            $scope.posts = posts
            console.log('posts.ctrl.js: fetch post succesful')
        })
})
