/**
 * Created by Aule on 2/12/15.
 */
angular.module('app')
.controller('ApplicationCtrl', function($scope) {
        $scope.$on('login', function(_, user) {
            $scope.currentUser = user
        })
    })