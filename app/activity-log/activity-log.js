'use strict';

angular.module('myApp.activityLog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/activity-log', {
        templateUrl: 'activity-log/activity-log.html',
        controller: 'ActivityLogCtrl'
    });
}])

.controller('ActivityLogCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.postData = function() {
        var request = $http({
            url: 'http://localhost/angular-mysql/server.php',
            method: 'POST',
            data: {
                description: $scope.description,
                time: new Date(),
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            console.log(response.data)
        });
    }
}]);