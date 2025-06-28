//Isso é o que é chamado de Page Object

const ELEMENTS = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    btnLogin: '[data-test="login-button"]'
}

class LoginPage {
    preencherUsuario(usuario){
        cy.get(ELEMENTS.username).type(usuario);
    }

    preencherSenha(senha){
        cy.get(ELEMENTS.password).type(senha);
    }

    clicarBotaoLogin(){
        cy.get(ELEMENTS.btnLogin).click();
    }

    loginAppAction(usuario,senha){
        cy.get(ELEMENTS.username).type(usuario);
        cy.get(ELEMENTS.password).type(senha);
    }
}

export default new LoginPage();
  