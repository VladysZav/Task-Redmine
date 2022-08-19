
const {MainPage} = require ('../Pages/mainPage');
const { test, expect } = require('@playwright/test');
const {RegistrationPage} = require('../Pages/registrationPage')
const {LoginPage} = require('../Pages/loginPage')

test('TestCase_1', async ({page}) => {
    
    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.registration();

    const registrationP = new RegistrationPage(page);
    await registrationP.enterData();
    await registrationP.subButton();
}); 

test('TestCase_2', async ({page}) => {

    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.registration();

    const registrationP = new RegistrationPage(page);
    await registrationP.subButton();
});

test('TestCase_3', async ({page}) => {

    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.registration();

    const registrationP = new RegistrationPage(page);
    await registrationP.enterLargeData();
    await registrationP.subButton();
});

test('TestCase_4', async ({page}) => {

    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.logining();

    const loginP = new LoginPage(page);
    await loginP.submitButton();
});

test('TestCase_5', async ({page}) => {

    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.enterTextInSearchBar('example');
});