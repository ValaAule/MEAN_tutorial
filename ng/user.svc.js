/**
 * Created by Aule on 2/9/15.
 */

angular.module('app')
.service('UserSvc', function($http){
    var svc = this
    svc.getUser = function(){
        return $http.get('/api/users')
        .then(function (response) {
            console.log('user.svc.js: get user successful')
            return response.data
        })
    }

    svc.login=function(username, password) {
        return $http.post('/api/sessions', {
            username: username, password: password
        }).then(function (response) {
            svc.token = response.data
            $http.defaults.headers.common['X-Auth'] = response.data
            console.log('user.svc.js: login successful')
            return svc.getUser()
        })
    }

 //used to register new users and automatically logs them in
    svc.register = function (username, password) {
        console.log('user.svc.js: user registration successful')
        return $http.post('/api/users', {
            username: username, password: password
        }).then(function () {
            return svc.login(username, password)
        })
    }
})