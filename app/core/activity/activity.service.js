angular.
    module('core.activity').
    factory('Activity', ['$resource',
        function($resource) {
            return $resource('activities/:activityId.json', {}, {
                query: {
                    method: 'GET',
                    params: {activityId: 'activities'},
                    isArray: true
                }
            })
        }
    ]);