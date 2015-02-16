/**
 * Created by Aule on 2/9/15.
 * Used for register page
 */

angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
        $scope.register = function (username, password) {
            UserSvc.register(username, password)
                    .then(function (user){
                    $scope.$emit('login', user)
                    console.log('register.ctrl.js: registration succesful')
            })
        }
    })