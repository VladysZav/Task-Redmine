const { expect } = require('@playwright/test');

exports.RegistrationPage = class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.userNameString = page.locator('[id="user_login"]');
        this.passwordString = page.locator('[id="user_password"]');
        this.passwordConfirmationString = page.locator('[id="user_password_confirmation"]');
        this.firstNameString = page.locator('[id="user_firstname"]');
        this.lastNameString = page.locator('[id="user_lastname"]');
        this.emailString = page.locator('[id="user_mail"]');
        this.submitButton = page.locator('[name="commit"]');
    }
    async emailGenerator() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let string = '';
        for (let i = 0; i < 10; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];            
        }
        console.log(string + '@gmail.com');
        return string + '@gmail.com';       
    }
    async emailLargeGenerator() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let string = '';
        for (let i = 0; i < 70; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];            
        }
        console.log(string + '@gmail.com');
        return string + '@gmail.com';       
    }
    async textGenerator() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let string = '';
        for (let i = 0; i < 20; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];            
        }
        console.log(string);
        return string; 
    }
    async largeTextGenerator() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let string = '';
        for (let i = 0; i < 70; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];            
        }
        console.log(string);
        return string; 
    }
    async enterData() {
        await this.userNameString.fill(await this.textGenerator());
        await this.passwordString.fill("examplePassword");
        await this.passwordConfirmationString.fill("examplePassword");
        await this.firstNameString.fill(await this.textGenerator());
        await this.lastNameString.fill(await this.textGenerator());
        await this.emailString.fill(await this.emailGenerator());
    }
    async enterLargeData() {
        await this.userNameString.fill(await this.largeTextGenerator());
        await this.passwordString.fill("examplePassword");
        await this.passwordConfirmationString.fill("examplePassword");
        await this.firstNameString.fill(await this.largeTextGenerator());
        await this.lastNameString.fill(await this.largeTextGenerator());
        await this.emailString.fill(await this.emailLargeGenerator());
    }
    async subButton() {
        await this.submitButton.click();
    }
}
