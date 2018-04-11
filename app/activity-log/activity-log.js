'use strict';

var activityLog = angular.module('myApp.activityLog', ['ngRoute']);

activityLog.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/activity-log', {
        templateUrl: 'activity-log/activity-log.html',
        controller: 'ActivityLogController'
    });
}]);

activityLog.controller('ActivityLogController', function ActivityLogController($scope, $http) {
    $scope.testActivities = [
        {
            description: 'test 1',
            time: 'time 1'
        },
        {
            description: 'test 2',
            time: 'time 2'
        }
    ];

    $scope.createActivity = function() {
        var request = $http({
            url: 'http://localhost/angular-mysql/createActivity.php',
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
    };

    $scope.readActivities = function() {
        var request = $http({
            url: 'http://localhost/angular-mysql/readActivities.php',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            console.log(response.data);
            $scope.activities = response.data;
        });
    }
});