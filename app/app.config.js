angular.
    module('myApp').
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/activity-log', {
                redirectTo: '/activities'
            }).
            when('/activities', {
                template: '<activity-log></activity-log>'
            }).
            when('/activities/:activityId', {
                template: '<activity-detail></activity-detail>'
            }).
            otherwise({redirectTo: '/stream'});
    }
]);