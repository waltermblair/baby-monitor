'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /stream when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/stream");
  });


  describe('stream', function() {

    beforeEach(function() {
      browser.get('index.html#!/stream');
    });


    it('should render stream when user navigates to /stream', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('activity-log', function() {

    beforeEach(function() {
      browser.get('index.html#!/activity-log');
    });


    it('should render activity-log when user navigates to /activity-log', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
