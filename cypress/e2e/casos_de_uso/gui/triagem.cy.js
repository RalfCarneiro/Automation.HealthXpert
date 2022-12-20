/// <reference types="cypress" />

describe('Teste de exploração', () => {
    context('Dado que acesso a landing page', () => {
        beforeEach(() => {
            cy.visit('http://deal-challenge-2022.s3-website-sa-east-1.amazonaws.com/')
        });
        context('Quando navego na tela de Triagem', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br')

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********')

                cy.get('.btn').click({force:true})
                cy.get('[aria-label="Example icon-button with menu icon"] > .mat-icon').click({force:true})
                // cy.wait(1000)
                cy.get(':nth-child(3) > div > span').click({force:true})

                cy.get(':nth-child(1) > .btn-eye').click({force:true})
                // cy.wait(1000)
                cy.get(':nth-child(3) > .btn-eye').click({force:true})
                // cy.wait(1000)
                cy.get(':nth-child(4) > .btn-eye').click({force:true})
                // cy.wait(1000)
                cy.get(':nth-child(5) > .btn-eye').click({force:true})
                // cy.wait(1000)
                cy.get(':nth-child(6) > .btn-eye').click({force:true})
                cy.get(':nth-child(15) > .offcanvas-header > .btn-close').click({force:true})
            });
            it('Então como Título deve conter "Encontre o seu paciente"', () => {
                cy.get('.breadcrumb').should('contain', 'Triagem')
                // cy.wait(1000)
            });
        });
    });
});