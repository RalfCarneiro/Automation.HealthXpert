/// <reference types="cypress" />

describe('Teste de exploração', () => {
    context('Dado que acesso a landing page', () => {
        beforeEach(() => {
            cy.visit('http://deal-challenge-2022.s3-website-sa-east-1.amazonaws.com/')
        });
        context('Quando valido as obrigatoriedades dos campos na tela de Triagem', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br', {delay: 100})

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********', {delay: 100})

                cy.get('.btn').click({force:true})
                cy.get('[aria-label="Example icon-button with menu icon"] > .mat-icon').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(3) > div > span').click({force:true})
                cy.wait(1000)
                cy.get('.mat-focus-indicator').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(3) > [data-mat-col="5"] > .mat-calendar-body-cell').click({force:true})
                cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click({force:true})
                cy.wait(1000)
                cy.get('.cdk-overlay-backdrop').click({force:true})
                cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-arrow-wrapper').click({force:true})
                cy.wait(1000)
                cy.get('.cdk-overlay-backdrop').click({force:true})
                cy.get('#mat-input-4').click({force:true})
                
                cy.wait(1000) 
            });
            it('Então como Título deve conter "Encontre o seu paciente"', () => {
                cy.get('.text-user').should('contain', 'Olá, Aurélio!')
            });
        });
        context('Quando navego na tela de Triagem', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br', {delay: 100})

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********', {delay: 100})

                cy.get('.btn').click({force:true})
                cy.get('[aria-label="Example icon-button with menu icon"] > .mat-icon').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(3) > div > span').click({force:true})

                cy.get(':nth-child(1) > .btn-eye').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(3) > .btn-eye').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(4) > .btn-eye').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(5) > .btn-eye').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(6) > .btn-eye').click({force:true})
                cy.get(':nth-child(15) > .offcanvas-header > .btn-close').click({force:true})
            });
            it('Então como Título deve conter "Triagem"', () => {
                cy.get('.breadcrumb').should('contain', 'Triagem')
                cy.wait(1000)
                cy.get(':nth-child(13) > .offcanvas-header > .btn-close').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(11) > .offcanvas-header > .btn-close').click({force:true})
                cy.wait(1000)
                cy.get(':nth-child(9) > .offcanvas-header > .btn-close').click({force:true})
                
            });
        });
    });
});