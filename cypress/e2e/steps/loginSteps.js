import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/page/loginPage";
import productsPage from "../../support/page/productsPage";

let usersData; //armazena os dados dos fixtures
let currentUser; //armazena o objeto

// Hook para carregar os dados da fixture antes de todos os testes
before( () => {
  cy.fixture('users').then((dadosDoJson) => {
    usersData = dadosDoJson;
  });
})

//Executa a limpeza de dados do navegador após cada teste
after(() => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
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
  LoginPage.preencherUsuario(user.username);
  LoginPage.preencherSenha(user.password);

  //usando AppActions
  //LoginPage.loginAppAction(user.username, user.password);
});

And('eu clico no botão {string}', () => {
  LoginPage.clicarBotaoLogin();
});

Then('eu devo ser redirecionado para a tela de {string}', (text) => {
  //productsPage.titleText(text);
  cy.url().should('include', '/inventory.html');
});

// When('eu preencho os campos de usuário e senha com as credenciais do usuário {string}', (user) => {
//   const usuario = usersData[user];
  
//   //Chama o método da Page Object, passando os dados da fixture
//   LoginPage.preencherUsuario(usuario.username);
//   LoginPage.preencherSenha(usuario.password);   
// });

Then('o sistema deve exibir a mensagem de erro {string}', (message) => {
  LoginPage.verificarMensagemErro(message);
});

Then('o sistema deve exibir a mensagem de erro {string}', (perfil_usuario) => {
    if (!usersData[perfil_usuario] || !usersData[perfil_usuario].message) {
      throw new Error(`Mensagem de erro para o usuário '${perfil_usuario}' não encontrada no fixture!`);
    }
    const expectedErrorMessage = usersData[perfil_usuario].message;
    LoginPage.verificarMensagemDeErro(expectedErrorMessage);
  });