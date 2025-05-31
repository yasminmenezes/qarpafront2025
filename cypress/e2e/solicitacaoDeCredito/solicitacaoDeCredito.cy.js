/// <reference types="cypress" />

context('Validação da funcionalidade de aprovação ou reprovação', () => {
    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/');
    });

    it('Validar os campos obrigatórios', () => {
        //Passos
        cy.get('#nome').type('Yasmin M S Menezes');
        cy.get('#email').type('teste@email.com');
        cy.get('#renda').type(1500); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
        cy.get('#cpf').type('398.227.940-00');
        cy.get('#credito').type(1000);
        cy.get('[type="submit"]').click();
        cy.get('#result').should('exist').should('be.visible');
    });

    it.only('Validar aprovação de crédito', () => {
        cy.get('#nome').type('Yasmin M S Menezes');
        cy.get('#email').type('teste@email.com');
        cy.get('#renda').type(2000); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
        cy.get('#cpf').type('398.227.940-00');
        cy.get('#credito').type(1000);
        cy.get('[type="submit"]').click();
        //cy.get('#result').should('exist').should('be.visible').should('contain.text', 'APROVADA');
        //cy.get('#result').contains(/aprovada/i) //ignora o case sensitivo
        cy.get('#result').contains('Aprovada', {matchCase:false}) //ignora o case sensitive
    });

    it('Validar reprovação de crédito', () => {
        cy.get('#nome').type('Yasmin M S Menezes');
        cy.get('#email').type('teste@email.com');
        cy.get('#renda').type(2000); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
        cy.get('#cpf').type('398.227.940-00');
        cy.get('#credito').type(1000);
        cy.get('[type="submit"]').click();
        cy.get('#result').should('exist').should('be.visible').should('contain.text', 'REPROVADA');
    });

    it('Validar valor de crédito menor que o mínimo', () => {
        cy.get('#nome').type('Yasmin M S Menezes');
        cy.get('#email').type('teste@email.com');
        cy.get('#renda').type(2000); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
        cy.get('#cpf').type('398.227.940-00');
        cy.get('#credito').type(999);
        cy.get('[type="submit"]').click();
        cy.get('#result').should('exist').should('be.visible').should('contain.text', 'REPROVADA');
    });

    it('Validar valor de crédito maior que o máximo', () => {
        cy.get('#nome').type('Yasmin M S Menezes');
        cy.get('#email').type('teste@email.com');
        cy.get('#renda').type(2000); //campos numéricos podem ser usados tanto com aspas simples quanto sem aspas
        cy.get('#cpf').type('398.227.940-00');
        cy.get('#credito').type(50001);
        cy.get('[type="submit"]').click();
        cy.get('#result').should('exist').should('be.visible').should('contain.text', 'REPROVADA');
    });
});