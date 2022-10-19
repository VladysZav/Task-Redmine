const {MainPage} = require ('../Pages/mainPage');
const { test, expect } = require('@playwright/test');
const {RegistrationPage} = require('../Pages/registrationPage')

test('Registration with too long data input', async ({page}) => {
    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.registration();
    const registrationP = new RegistrationPage(page);
    await registrationP.enterLargeData();
    await registrationP.subButton();
});
