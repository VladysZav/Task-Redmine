const {MainPage} = require ('../Pages/mainPage');
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../Pages/loginPage')

test('Login with invalid data', async ({page}) => {
    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.logining();
    const loginP = new LoginPage(page);
    await loginP.submitButton();
});
