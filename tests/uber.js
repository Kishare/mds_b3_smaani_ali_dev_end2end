describe('Uber tests', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr'));

    test('Open Uber Website', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('/html/head/title')
        .waitForElementPresent('//*[@id="main"]')
        .end();
    });

    test('Check block login in the header wrapper', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .end();
    });

    test('Check login block in two sections', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .end();
    });

    test('Check login chauffeur section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .waitForElementPresent('//*[@id="useridInput"]')
        .waitForElementPresent('//*[@id="app-body"]/div/div[1]/form/div[2]/button')
        .click('//*[@id="app-body"]/div/div[1]/form/div[2]/button')
        .assert.urlContains('https://auth.uber.com/login/')
        .end();
    });

    test('Check login passager section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .assert.urlContains('https://auth.uber.com/login/')
        .waitForElementPresent('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
        .waitForElementPresent('//*[@id="next-button"]')
        .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
        .waitForElementPresent('//*[@id="app-content"]/div/div/div/div/div/a[1]/div/div[2]')
        .waitForElementPresent('//*[@id="googleLoginButton"]/div/div[2]')
        .end();
    });

    test('Check Registration block in two sections', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .end();
    });

    test('Check Registration block with Devenir Professional section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a/div[2]')
        .assert.urlContains('https://www.uber.com/a/join-new')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[3]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[4]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[5]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[6]/div/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[8]/div/div/div[1]/input')
        .waitForElementPresent('//*[@id="maincontent"]/div[2]/div/form/div[9]/div/input')
        .end();
    });

    test('Check Registration block with Commander une course section', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .assert.urlContains('https://auth.uber.com/login')
        .waitForElementPresent('//*[@id="firstName"]')
        .waitForElementPresent('//*[@id="lastName"]')
        .waitForElementPresent('//*[@id="mobile"]')
        .waitForElementPresent('//*[@id="email"]')
        .waitForElementPresent('//*[@id="addPassword"]')
        .end();
    });

    test('Registration with Commander une course section shouldnt pass', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="answerForm"]/button')
        .click('//*[@id="error-caption-mobile"]')
        .end();
    });

    test('Registration should pass', function (browser) {
      browser
        .useXpath()
        .waitForElementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]')
        .waitForElementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a/div[2]')
        .waitForElementPresent('//*[@id="firstName"]')
        .waitForElementPresent('//*[@id="lastName"]')
        .waitForElementPresent('//*[@id="mobile"]')
        .waitForElementPresent('//*[@id="email"]')
        .waitForElementPresent('//*[@id="addPassword"]')
        .waitForElementPresent('//*[@id="answerForm"]/button')
        .setValue('//*[@id="firstName"]', 'Ki')
        .setValue('//*[@id="lastName"]', 'Share')
        .setValue('//*[@id="mobile"]', '753951741')
        .setValue('//*[@id="email"]', 'random.mail@mail.com')
        .setValue('//*[@id="addPassword"]', 'azertyuiop123456789')
        .click('//*[@id="answerForm"]/button')
        .end();
    });
/*
// Exemple pour basculer sur du XPATH
.useXpath() 
   .waitForElementPresent('//button[@id="/sign-in/"]')
   .waitForElementPresent('//button[@id="/signup/"]')
// Revenir sur du CSS
.useCSS()

describe('Ecosia example', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

    test('Uber test', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    });
*/


});
