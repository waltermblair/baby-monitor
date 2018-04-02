'use strict';

angular.module('myApp.activityLog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/activity-log', {
    templateUrl: 'activity-log/activity-log.html',
    controller: 'ActivityLogCtrl'
  });
}])

.controller('ActivityLogCtrl', [function() {

}]);