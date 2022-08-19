const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;
        this.registrationButton = page.locator('[href="/account/register"]');
        this.loginButton = page.locator('[href="/login"]');
        this.inputSearchBar = page.locator('[accesskey="f"]');
        this.registrationForm = page.locator('#new_user');
    }

    async goToMainPage() {
        await this.page.goto('https://www.redmine.org/');
    }

    async registration(){
        await this.registrationButton.click();
        await this.page.waitForLoadState();
    }

    async  logining(){
        await this.loginButton.click();
        await this.page.waitForLoadState();
    }

    async enterTextInSearchBar(searchText){
        await this.inputSearchBar.fill(searchText);
        await this.inputSearchBar.press('Enter');
    }

}
    