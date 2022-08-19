const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{

    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('[type="submit"]');
    }

    async submitButton() {
        await this.loginButton.click();
    }
}
