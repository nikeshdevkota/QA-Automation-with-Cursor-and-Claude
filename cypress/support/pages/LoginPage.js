class LoginPage {
    // Selectors
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    // Actions
    visit() {
        cy.visit('/', {
            timeout: 120000,
            failOnStatusCode: true,
            retryOnStatusCodeFailure: true,
            retryOnNetworkFailure: true
        });
    }

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }

    getErrorMessage() {
        return this.elements.errorMessage();
    }
}

module.exports = new LoginPage(); 