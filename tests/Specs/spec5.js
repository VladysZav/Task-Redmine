const {MainPage} = require ('../Pages/mainPage');
const { test, expect } = require('@playwright/test');

test('Checking the search bar functionality', async ({page}) => {
    const mainP = new MainPage(page);
    await mainP.goToMainPage();
    await mainP.enterTextInSearchBar('example');
});
