/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ("que eu acesse a página de solicitação de crédito", () => {
     cy.visit('/');
})

When("eu preencho o formulário com o perfil {string} do arquivo {string}",
  (nomeDoPerfil, solicitacaoCredito) => {
    // 1. Carrega o arquivo de fixture completo (solicitacaoCredito.json)
    cy.fixture(solicitacaoCredito).then((dadosDoArquivo) => {
      // 2. Seleciona o perfil específico (ex: dadosDoArquivo['usuarioAprovado'])
      const perfilDoUsuario = dadosDoArquivo[nomeDoPerfil];

      // 3. Preenche o formulário com os dados do perfil selecionado
      cy.get('#nome').type(perfilDoUsuario.nome);
      cy.get('#email').type(perfilDoUsuario.email);
      cy.get('#cpf').type(perfilDoUsuario.cpf);
      cy.get('#renda').type(perfilDoUsuario.renda);
      cy.get('#credito').type(perfilDoUsuario.credito);

      // 4. SALVA O PERFIL ATUAL EM UM ALIAS!
      // Isso torna o objeto 'perfilDoUsuario' acessível para os próximos steps.
      cy.wrap(perfilDoUsuario).as('perfilAtual');
    });
  }
);