const ELEMENTS = {
    pageTitle: '[data-test="title"]'
}

class ProductsPage {
    titleText(text){
        cy.get(ELEMENTS.pageTitle).contains('Products').should('be.visible');
    }
}

export default new ProductsPage();