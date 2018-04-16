'use strict';

var activityLog = angular.
    module('activityLog', ['ngRoute']).
    component('activityLog', {
        templateUrl: 'activity-log/activity-log.html',
        controller: 'ActivityLogController'
});

activityLog.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/activity-log', {
        templateUrl: 'activity-log/activity-log.html',
        controller: 'ActivityLogController'
    });
}]);

activityLog.controller('ActivityLogController', function ActivityLogController($scope, $http) {

    $scope.createActivity = function() {
        $http.get('http://localhost/angular-mysql/createActivity.php').
            then(function(response) {
            console.log(response.data)
        });
    };

    $scope.readActivities = function() {
        $http.get('http://localhost/angular-mysql/readActivities.php').
           then(function(response) {
                $scope.orderProp = 'time';
                $scope.activities = response.data;
        });
    };

});