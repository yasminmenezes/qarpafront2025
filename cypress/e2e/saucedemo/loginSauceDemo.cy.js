/// <reference types="cypress" />

context('Login Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });

    it('Login efetuado com sucesso', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.app_logo').should('exist');
        cy.get('.product_label').should('exist');
    });

    it('Login inválido', () => {
        cy.get('[data-test="username"]').type('user_test');
        cy.get('[data-test="password"]').type('123Test');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });

    it('Usuário inválido', () => {
        cy.get('[data-test="username"]').type('user_test');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });

    it('Senha inválida', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('123Test');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });

    it('Usuário em branco', () => {
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username is required');
    });

    it('Senha em branco', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Password is required');
    });

    it('Usuário user problem', () => {
        cy.get('[data-test="username"]').type('problem_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_label').should('exist');
    });

    it('Usuário user block', () => {
        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.');

    });
});