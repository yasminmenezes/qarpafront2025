//Isso é o que é chamado de Page Object
const ELEMENTS = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    btnLogin: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
}

class LoginPage {
    preencherUsuario(usuario){
        // Adicionamos uma verificação para não tentar digitar em campos vazios
        if (usuario) {
            cy.get(ELEMENTS.username).type(usuario);
        }
    }

    preencherSenha(senha){
        if (senha) {
            cy.get(ELEMENTS.password).type(senha);
        }
    }

    clicarBotaoLogin(){
        cy.get(ELEMENTS.btnLogin).click();
    }

    loginAppAction(usuario,senha){
        cy.get(ELEMENTS.username).type(usuario);
        cy.get(ELEMENTS.password).type(senha);
    }

    verificarMensagemErro(mensagem) {
        cy.get(ELEMENTS.errorMessage).should('be.visible').and('contain', mensagem);
    }
}

export default new LoginPage();
  