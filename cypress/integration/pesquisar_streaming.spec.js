/// <reference types="cypress" />


describe("Pesquisando diferentes plataformas de Streaming", () => {

    it('Pesquisa na plataforma netflix', () => {
    cy.visit('https://www.netflix.com/br/');
    cy.get('.default-ltr-cache-1asgq30 > .default-ltr-cache-inkrn > .default-ltr-cache-1u8qly9 > .default-ltr-cache-1jbflut > .e1ax5wel1').
    should('contain', 'Vamos lá');
    cy.contains('Vamos lá').parent().find('button[type=submit]').check();

    })
})