const {MainPage} = require ('../Pages/mainPage');
const { test, expect } = require('@playwright/test');
const {RegistrationPage} = require('../Pages/registrationPage')

test('TestCase_3', async ({page}) => {
    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.registration();
    const registrationP = new RegistrationPage(page);
    await registrationP.enterLargeData();
    await registrationP.subButton();
});
