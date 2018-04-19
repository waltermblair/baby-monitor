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
        it('2.3.1 - Activity Detail controller calls updateActivity.php when updateActivity() ' +
            '       is called and sends whatever data were changed in request', function() {

            $httpBackend.flush();

            expect($scope.activities).toEqual({ foo: 'bar' });
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

            expect($scope.activities).toEqual({ foo: 'bar' });
        });


    });

});