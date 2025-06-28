/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ("que eu acesse a página de solicitação de crédito", () => {
     cy.visit('/');
})

When ("eu preencher os campos obrigatórios com dados válidos", () => {
    cy.get('#nome').type('Yasmin M S Menezes');
    cy.get('#email').type('teste@email.com');
    cy.get('#renda').type(1500); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
    cy.get('#cpf').type('398.227.940-00');
    cy.get('#credito').type(1000);
})

And ("eu clico em {string}", (buttonText) => {
    cy.contains(buttonText).click();
})

Then ("o sistema irá informar que houve uma solicitação", () => {
    cy.get('#result').should('exist').should('be.visible');
})

When("eu preencho os dados do cliente com nome {string}, email {string}, renda mensal {string}, CPF {string} e valor de crédito {string}", (nome, email, renda, cpf, credito)=>{
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#renda').type(renda); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
    cy.get('#cpf').type(cpf);
    cy.get('#credito').type(credito);
})

Then("o sistema irá informar que a solicitação foi {string}", (resultado) => {
    cy.get('#result').contains(resultado, {matchCase:false}) //ignora o case sensitive
})

When("um cliente solicitar um crédito de {string} com uma renda mensal de {string}", (valorCredito, renda) => {
    cy.get('#nome').type("Yasmin Menezes");
    cy.get('#email').type("yasmin@teste.com");
    cy.get('#renda').type(renda); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
    cy.get('#cpf').type("123.456.789-10");
    cy.get('#credito').type(valorCredito);
})

// ESTE É O NOVO STEP DEFINITION QUE USA FAKERMore actions
When("um cliente aleatório solicitar um crédito de {string} com uma renda mensal de {string}",
    (credito, renda) => {
      // 1. Chamamos a task 'generateUser' que definimos no cypress.config.js
      cy.task('geradorDeUser').then((user) => {
        // 2. O .then() nos dá acesso ao objeto 'user' retornado pela task
        cy.log(`Usuário Gerado: ${user.nome} | ${user.email} | ${user.cpf}`);
  
        // 3. Usamos os dados do objeto 'user' e os parâmetros do step para preencher o formulário
        cy.get('#nome').type(user.nome);
        cy.get('#email').type(user.email);
        cy.get('#cpf').type(user.cpf);
        cy.get('#renda').type(renda);
        cy.get('#credito').type(credito);
      });
    }
);