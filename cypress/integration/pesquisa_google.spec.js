/// <reference types="cypress" />

describe("Pesquisando diferentes carros esportivos no Google", () => {

    beforeEach(() => {
        /// Essa função serve para abrir esta url antes de cada Cenário
        cy.visit('https://www.google.com/');

    })

    it('Primeiro teste, ford esportivos', () => {

        cy.get('#APjFqb').type('carros esportivos ford');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.get('.GmE3X').should('contain', 'Imagens de carros esportivos ford');

    })

    it('Segundo teste, volkswagen esportivos', () => {

        cy.get('#APjFqb').type('carros esportivos volkswagen');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.get('.GmE3X').should('contain', 'Imagens de carros esportivos volkswagen');

    })
       //Neste cenário o it.only aponta que quero que rode somente este cenário. 
       //Quando precisar rodar a maioria dos cenários com excessão de um, fazer o it.skip
       //então este cenário não irá rodar, somente os demais.
    it.only('Terceiro teste, chevrolet esportivos', () => {

        cy.get('#APjFqb').type('carros esportivos chevrolet');
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
        cy.get('.GmE3X').should('contain', 'Imagens de carros esportivos chevrolet');

    })
})
