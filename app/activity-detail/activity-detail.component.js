'use strict';

var activityDetail = angular.
    module('activityDetail', ['ngRoute']).
    component('activityDetail', {
        templateUrl: 'activity-detail/activity-detail.html',
        controller: 'ActivityDetailController'
});

activityDetail.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/activity-detail', {
        templateUrl: 'activity-detail/activity-detail.html',
        controller: 'ActivityDetailController'
    });
}]);

activityDetail.controller('ActivityDetailController', function ActivityDetailController($scope, $http, $routeParams) {
    var self = this;
    $http({
        url: 'http://localhost/angular-mysql/readActivity.php',
        method: "GET",
        params: {activityId: $routeParams.activityId}
    }).then(function (response) {
        self.activity = response.data;
    });

    self.updateActivity = function () {
        $http({
            url: 'http://localhost/angular-mysql/updateActivity.php',
            method: "GET",
            params: {
                activityId: $routeParams.activityId,
                description: $scope.description,
                notes: $scope.notes
            }
        }).then(function (response) {
            console.log(response.data)
        });
    };

});

