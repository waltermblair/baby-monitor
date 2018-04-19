'use strict';

angular.
    module('activityLog').
    component('activityLog', {
        templateUrl: 'activity-log/activity-log.html',
        controller: 'ActivityLogController'
    }).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/activity-log', {
            templateUrl: 'activity-log/activity-log.html',
            controller: 'ActivityLogController'
        });
    }]).
    controller('ActivityLogController', function ActivityLogController($scope, $http) {

        $scope.readActivity = function() {
            $http.get('http://localhost/angular-mysql/readActivities.php').
            then(function(response) {
                $scope.orderProp = 'time';
                $scope.activities = response.data;
            });
        };

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
                console.log(response.data);
                $scope.readActivity();
            });
        };

        $scope.readActivity();

    });