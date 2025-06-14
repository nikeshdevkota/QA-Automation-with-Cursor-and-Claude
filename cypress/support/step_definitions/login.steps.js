const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../pages/LoginPage');

Given('I am on the login page', () => {
    LoginPage.visit();
});

When('I enter valid credentials', () => {
    cy.fixture('testData').then((data) => {
        LoginPage.login(data.validUser.username, data.validUser.password);
    });
});

When('I enter invalid credentials', () => {
    cy.fixture('testData').then((data) => {
        LoginPage.login(data.invalidUser.username, data.invalidUser.password);
    });
});

When('I enter locked out user credentials', () => {
    cy.fixture('testData').then((data) => {
        LoginPage.login(data.lockedUser.username, data.lockedUser.password);
    });
});

Then('I should be logged in successfully', () => {
    cy.url().should('include', '/inventory.html');
});

Then('I should see the inventory page', () => {
    cy.get('.inventory_list').should('be.visible');
});

Then('I should see an error message', () => {
    LoginPage.getErrorMessage().should('be.visible');
});

Then('I should see the locked out error message', () => {
    LoginPage.getErrorMessage().should('be.visible')
        .and('contain', 'Epic sadface: Sorry, this user has been locked out');
});

Then('I should remain on the login page', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/');
}); 