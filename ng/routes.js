/**
 * Created by Aule on 2/9/15.
 *
 */

angular.module('app')
.config(function ($routeProvider) {
        $routeProvider
            .when('/', {controller: 'PostsCtrl', templateUrl: 'posts.html'})
            .when('/register', {controller: 'RegisterCtrl', templateUrl: 'register.html'})
            .when('/login', {controller: 'LoginCtrl', templateUrl: 'login.html'})
    })