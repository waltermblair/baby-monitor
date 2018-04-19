'use strict';

angular.
    module('activityDetail').
    component('activityDetail', {
        templateUrl: 'activity-detail/activity-detail.html',
        controller: 'ActivityDetailController'
    }).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/activity-detail', {
            templateUrl: 'activity-detail/activity-detail.html',
            controller: 'ActivityDetailController'
        });
    }]).
    controller('ActivityDetailController', function ActivityDetailController($scope, $http, $routeParams) {
        var self = this;
        $http({
            url: 'http://localhost/angular-mysql/readActivity.php',
            method: "GET",
            params: {activityId: $routeParams.activityId}
        }).then(function (response) {
            self.activity = response.data;
            $scope.description = self.activity.description;
        });

        self.updateActivity = function () {
            var request = $http({
                url: 'http://localhost/angular-mysql/updateActivity.php',
                method: "POST",
                data: {
                    activityId: $routeParams.activityId,
                    description: $scope.description,
                    notes: $scope.notes
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                window.location = "#!/activities";
            });
        };

        self.deleteActivity = function () {
            var request = $http({
                url: 'http://localhost/angular-mysql/deleteActivity.php',
                method: "POST",
                data: {
                    activityId: $routeParams.activityId,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                window.location = "#!/activities";
            });
        };

    });

