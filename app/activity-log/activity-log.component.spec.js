'use strict';

describe('activityLog', function() {

    beforeEach(module('activityLog'));

    describe('ActivityLogController', function() {
        var $httpBackend, ctrl, $scope;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend
                .expectGET('http://localhost/angular-mysql/readActivities.php')
                .respond(200, { foo: 'bar' });
            $scope = {};
            ctrl = $componentController('activityLog', {$scope: $scope});
        }));

        // http://www.bradoncode.com/blog/2015/06/26/unit-testing-http-ngmock-fundamentals/
        it('1.2.1 - Activity Log controller calls readActivities.php on page load', function() {

            $httpBackend.flush();

        });

        it('1.2.2 - Activity Log controller posts to createActivity.php and gets from ' +
            '       readActivities.php after createActivity() is called', function() {

            $httpBackend
                .expectRoute('POST', 'http://localhost/angular-mysql/createActivity.php')
                .respond(200);

            $httpBackend
                .expectGET('http://localhost/angular-mysql/readActivities.php')
                .respond(200, { foo: 'bar' });

            $scope.createActivity();

            $httpBackend.flush();

        });


    });

});