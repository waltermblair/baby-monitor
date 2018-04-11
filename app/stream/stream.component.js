'use strict';

var stream = angular.
    module('stream', ['ngRoute']).
    component('stream', {
        templateUrl: 'stream/stream.html',
        controller: 'StreamCtrl'
});

stream.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stream', {
        templateUrl: 'stream/stream.html',
        controller: 'StreamCtrl'
    });
}]);

stream.controller('StreamCtrl', ['$scope', function($scope) {
    $scope.videoStream = {
        src: "http://192.168.1.233/html/index.php",
        title: "Video Stream"
    };
    $scope.audioStream = {
        src: "http://192.168.1.233:8000/raspi",
        title: "Audio Stream"
    };
}]);

stream.filter('trusted', ['$sce', function($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);