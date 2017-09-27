var assert = require('assert');

describe('Google Page Test', function() {
    it('do a search on the Google Page', function () {
        browser.url(browser.options.baseUrlGoogle);
        browser.setValue('#lst-ib', "fbhdbhfdbgfovhrtreiusjkcndlskcjniweuvnuivevwi" + '\n');
        const element = $('div.card-section > p:nth-child(1)');
        const actualText = element.getText();
        assert.equal(actualText, 'La búsqueda de fbhdbhfdbgfovhrtreiusjkcndlskcjniweuvnuivevwi no obtuvo ningún resultado.');
    });
});