'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Activity Log', function() {

    it('1.1.1 - should be reached by Activity Log menu item', function() {
        browser.get("#!/activities");
        expect(browser.getLocationAbsUrl()).toBe('/activities');
    });

    it('1.1.2 - should be reached by Submit button click in Activity Detail', function() {
        browser.get("#!/activities/1");
        element(by.buttonText('Submit')).click();
        expect(browser.getLocationAbsUrl()).toBe('/activities');
    });

    it('1.1.3 - reached by Delete button clicks in Activity Detail', function() {
        browser.get("#!/activities/1");
        element(by.buttonText('Delete')).click();
        expect(browser.getLocationAbsUrl()).toBe('/activities');
    });

    it('1.3.1 - All activities returned by readActivities.php are visible in table', function() {
        browser.get("#!/activities");
        expect($('table').getText()).toContain("wiggling");
    });

    // TODO - 1.4.1
    xit('1.4.1 - Activity display is sorted by Description when alphabetical is selected', function() {
        browser.get("#!.activities");
    });

    // TODO - 1.4.2
    xit('1.4.2 - Activity display is sorted by Datetime when Newest is selected', function() {
        browser.get("#!.activities");
    });

    // TODO - 1.5.1
    xit('1.5.1 - Activity display is filtered by text entered', function() {
        browser.get("#!.activities");
    });

    // TODO - 1.6.1
    xit('1.6.1 - Activity Log controller calls createActivity.php when Create button is clicked with valid text', function() {

    });

    // TODO - 1.6.2
    xit('1.6.2 - Activity Log controller does not call createActivity.php when Create button is clicked is called with invalid text', function() {

    });

});

describe('Activity Detail', function() {

   it('2.1.1 - /activities/:id is reached by clicking on an activity in the activity log', function() {
        browser.get("#!/activities");
        var item = element(by.cssContainingText("a", "Details"));
        var url = item.getAttribute('href');
        item.click();
        expect(browser.getCurrentUrl()).toEqual(url);
   });

});