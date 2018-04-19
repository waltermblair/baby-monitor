'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Activity Log', function() {

    it('1.1.1 - should be reached by Activity Log menu item', function() {
        browser.get("#!/activities");
        expect(browser.getLocationAbsUrl()).toBe('/activities');
    });

    it('1.1.2 - should be reached by Submit button click in Activity Detail', function() {

    });

    it('1.1.3 - reached by Delete button clicks in Activity Detail', function() {

    });

});
