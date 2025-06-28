import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/page/loginPage";

let usersData; //armazena os dados dos fixtures
let currentUser; //armazena o objeto

//Carrega a fixture uma vez antes de
before( () => {
  cy.fixture('users').then((dadosDoJson) => {
    usersData = dadosDoJson;
  });
})

// Dado que eu acesse a página de login do Saucedemo
Given('que eu acesse a página de login do Saucedemo', () => {
  cy.visit('https://www.saucedemo.com/'); // URL do Saucedemo
});

//Quando eu preencho os campos de usuário e senha com as credenciais do usuário
When ('eu preencho os campos de usuário e senha com o usuário {string}', (perfil_usuario)=> {
  if (!usersData[perfil_usuario]) {
    cy.log(`Usuário '${perfil_usuario}' não encontrado no fixture`);
    throw new Error(`Usuário '${perfil_usuario}' não encontrado no fixture`);
  }

  const user = usersData[perfil_usuario];

  //usando PageObject
  LoginPage.loginAppAction(user.username, user.password);
  // loginPage.preencherUsuario(user.username);
  // loginPage.preencherSenha(user.password);
  //LoginPage.clicarBotaoLogin();
});
