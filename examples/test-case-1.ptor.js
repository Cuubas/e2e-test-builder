// PTOR:start
// File was generated by Selenium Protractor
var TEST_CASE = {
  "items": [
    {
      "type": "comment",
      "value": "http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create"
    },
    {
      "type": "command",
      "command": "open",
      "locator": "http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li a",
      "value": ""
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "document.querySelector('h3').id = 'test-id';",
      "value": ""
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "css=p:nth-child(7) .keyword:nth-child(2)",
      "value": "element.innerHTML = '<span e2e-tag=\"foo\"><select><option value=\"1\">value 1</option><option value=\"2\">value 2</option><option value=\"3\">Foo 3</option></select></span>';"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "id=test-id",
      "value": "element.style.border='1px solid red';"
    },
    {
      "type": "command",
      "command": "select",
      "locator": "css=[e2e-tag=\"foo\"] select",
      "value": "label=regexpi:foo"
    },
    {
      "type": "command",
      "command": "select",
      "locator": "css=[e2e-tag=\"foo\"] select",
      "value": "index=0"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "setTimeout(function(){document.querySelector('h1').style.display = 'none'},1000);",
      "value": ""
    },
    {
      "type": "command",
      "command": "waitForNotVisible",
      "locator": "css=h1",
      "value": "5000"
    },
    {
      "type": "command",
      "command": "mouseDownAt",
      "locator": "css=.summary",
      "value": ""
    },
    {
      "type": "command",
      "command": "mouseUpRightAt",
      "locator": "css=.summary",
      "value": "20,50"
    },
    {
      "type": "command",
      "command": "store",
      "locator": "123",
      "value": "data.abc"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(2) a",
      "value": ">"
    },
    {
      "type": "command",
      "command": "assertCookieByName",
      "locator": "_referrer_og",
      "value": "2"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "css=.toc li:nth-child(3) a",
      "value": "element.click()"
    },
    {
      "type": "command",
      "command": "echoEval",
      "locator": "document.title",
      "value": ""
    },
    {
      "type": "command",
      "command": "storeEval",
      "locator": "document.title",
      "value": "title"
    },
    {
      "type": "command",
      "command": "echo",
      "locator": "${title}",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(4) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "echo",
      "locator": "${data.abc ||'123'}",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(6) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(7) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "assertText",
      "locator": "css=.toc li a:contains('Center')",
      "value": "Grow a flex item X times as big as other flex items"
    },
    {
      "type": "command",
      "command": "echoText",
      "locator": "css=.toc li a:contains('Center')",
      "value": ""
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "css=.cta:nth-child(5)",
      "value": "element.onclick = ()=>{alert('clicked')}"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.cta:nth-child(5)",
      "value": ""
    },
    {
      "type": "command",
      "command": "assertAlert",
      "locator": "",
      "value": "clicked"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li a",
      "value": ""
    },
    {
      "type": "command",
      "command": "sleep",
      "locator": "",
      "value": "500"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=#foo",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": ""
    },
    {
      "type": "command",
      "command": "assertCssCount",
      "locator": "css=input",
      "value": "6"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.sketching",
      "value": ""
    },
    {
      "type": "command",
      "command": "type",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": ""
    },
    {
      "type": "command",
      "command": "sendKeys",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": "test@example.com${KEY_ENTER}"
    }
  ],
  "title": "cheatsheet",
  "baseUrl": "http://google.com"
};
// PTOR:end

// Do not modify anything below as changes will be lost!

'use strict'
module.exports = (function(config, data) {

    var title;

    describe('cheatsheet', function() {

        it('http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create', function() {

            browser.get(`http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create`);
            browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li a`)).getWebElement());
            element(by.css(`.toc li a`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.toc li a|`);});

            browser.executeScript(`var element = arguments[0];`,element(by.xpath(` 'test-id';`)).getWebElement());
            browser.executeScript(`var element = arguments[0];element.innerHTML = '<span e2e-tag="foo"><select><option value="1">value 1</option><option value="2">value 2</option><option value="3">Foo 3</option></select></span>';`,element(by.css(`p:nth-child(7) .keyword:nth-child(2)`)).getWebElement());
            browser.executeScript(`var element = arguments[0];element.style.border='1px solid red';`,element(by.id(`test-id`)).getWebElement());
            element(by.css(`[e2e-tag="foo"] select`)).element(by.cssContainingText('option',`regexpi:foo`)).click();
            element(by.css(`[e2e-tag="foo"] select`)).element(by.css(`option:nth-child(1)`)).click();
            browser.executeScript(`var element = arguments[0];`,element(by.xpath(` 'none'},1000);`)).getWebElement());
            browser.wait(protractor.ExpectedConditions.invisibilityOf(element(by.css(`h1`))), 5000,`waitForNotVisible|css=h1|5000`);
            fail('command mouseDownAt is not supported');
            fail('command mouseUpRightAt is not supported');
            data.abc = element(by.xpath(`123`));
            browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(2) a`)).getWebElement());
            element(by.css(`.toc li:nth-child(2) a`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.toc li:nth-child(2) a|>`);});

            element(by.xpath(`_referrer_og`)).getAttribute("cookieByName").then(function (_value) {
                expect(_value).toEqual(`2`,`assertCookieByName|_referrer_og|2`);
                browser.executeScript(`var element = arguments[0];element.click()`,element(by.css(`.toc li:nth-child(3) a`)).getWebElement());
                fail('command echoEval is not supported');
                browser.executeScript('return ' + `document.title`).then(function(_value){
                    title = _value;
                    console.info(`${title}`);
                    browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(4) a`)).getWebElement());
                    element(by.css(`.toc li:nth-child(4) a`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.toc li:nth-child(4) a|`);});

                    console.info(`${data.abc ||'123'}`);
                    browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(6) a`)).getWebElement());
                    element(by.css(`.toc li:nth-child(6) a`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.toc li:nth-child(6) a|`);});

                    browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(7) a`)).getWebElement());
                    element(by.css(`.toc li:nth-child(7) a`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.toc li:nth-child(7) a|`);});

                    element(by.cssContainingText(`.toc li a`, `Center`)).getText().then(function (_value) {
                        expect(_value).toEqual(`Grow a flex item X times as big as other flex items`,`assertText|css=.toc li a:contains('Center')|Grow a flex item X times as big as other flex items`);
                        fail('command echoText is not supported');
                        browser.executeScript(`var element = arguments[0];element.onclick = ()=>{alert('clicked')}`,element(by.css(`.cta:nth-child(5)`)).getWebElement());
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.cta:nth-child(5)`)).getWebElement());
                        element(by.css(`.cta:nth-child(5)`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.cta:nth-child(5)|`);});

                        expect(browser.switchTo().alert().getText()).toEqual(`clicked`,`assertAlert||clicked`);
                        browser.switchTo().alert().accept();
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li a`)).getWebElement());
                        element(by.css(`.toc li a`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.toc li a|`);});

                        browser.sleep(500);
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css('')).getWebElement());
                        element(by.css('')).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=|`);});

                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`#foo`)).getWebElement());
                        element(by.css(`#foo`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=#foo|`);});

                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.sketching .email input[name="fields[email]"]`)).getWebElement());
                        element(by.css(`.sketching .email input[name="fields[email]"]`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.sketching .email input[name="fields[email]"]|`);});

                        element.all(by.css(`input`)).count().then(function (_value) {
                            expect(_value).toEqual(6,`assertCssCount|css=input|6`);
                            browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.sketching`)).getWebElement());
                            element(by.css(`.sketching`)).click().then(function(){},function(err){fail(err+"\ncommand: "+`click|css=.sketching|`);});

                            element(by.css(`.sketching .email input[name="fields[email]"]`)).sendKeys('');
                            element(by.css(`.sketching .email input[name="fields[email]"]`)).sendKeys(`test@example.com${KEY_ENTER}`);
                        });

                    });

                });

            });

        });

    });

});

