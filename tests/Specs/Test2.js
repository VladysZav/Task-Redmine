const {MainPage} = require ('../Pages/mainPage');
const { test, expect } = require('@playwright/test');
const {RegistrationPage} = require('../Pages/registrationPage')

test('Registration with empty lines', async ({page}) => {

    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.registration();
    const registrationP = new RegistrationPage(page);
    await registrationP.subButton();
});
