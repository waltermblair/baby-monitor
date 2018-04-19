'use strict';

describe('activityDetail', function() {

    beforeEach(module('activityDetail'));

    describe('ActivityDetailController', function() {
        var $httpBackend, ctrl, $scope;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend
                .expectGET('http://localhost/angular-mysql/readActivity.php')
                .respond(200, { foo: 'bar' });
            $scope = {};
            ctrl = $componentController('activityDetail', {$scope: $scope});
        }));

        it('2.2.1 - Activity Log controller calls readActivity.php on page load', function() {

            $httpBackend.flush();

        });


        it('2.3.1 - Activity Detail controller calls updateActivity.php when updateActivity() ' +
            '       is called and sends whatever data were changed in request', function() {

            $httpBackend.flush();

            $httpBackend
                .expectRoute('POST', 'http://localhost/angular-mysql/updateActivity.php')
                .respond(200);

            ctrl.updateActivity();

            $httpBackend.flush();

        });

        it('2.4.1 - Activity Detail controller calls deleteActivity.php  when deleteActivity() ' +
            '       is called', function() {

            $httpBackend.flush();

            $httpBackend
                .expectRoute('POST', 'http://localhost/angular-mysql/deleteActivity.php')
                .respond(200);

            ctrl.deleteActivity();

            $httpBackend.flush();

        });



    });

});