/// <reference types="cypress" />

describe('Teste de exploração', () => {
    context('Dado que acesso a landing page', () => {
        beforeEach(() => {
            cy.visit('http://deal-challenge-2022.s3-website-sa-east-1.amazonaws.com/')
        });
        it('Então deve conter como Logo "HealthXpert"', () => {
            cy.get('.logo').should('be.visible')
        });
        it('Então deve conter o campo "Email"', () => {
            cy.get('.mat-form-field.ng-tns-c29-0 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible')
        });
        it('Então deve conter o campo "Senha"', () => {
            cy.get('.mat-form-field.ng-tns-c29-1 > .mat-form-field-wrapper > .mat-form-field-flex').should('be.visible')
        });
        context('Quando clico no campo email e valido a sua obrigatoriedade', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('.container-login').click({force:true})
            });
            it('Então deve conter uma mensagem de "Email é obrigatório"', () => {
                cy.get('#mat-error-0').should('contain','Email é obrigatório.')
                // cy.wait(1000)
            });
        });
        context('Quando clico no campo senha e valido a sua obrigatoriedade', () => {
            beforeEach(() => {
                cy.get('#mat-input-1').click({force:true})
                cy.get('.container-login').click({force:true})
            });
            it('Então deve conter uma mensagem de "Senha é obrigatória"', () => {
                cy.get('#mat-error-1').should('contain','Senha é obrigatória.')
                // cy.wait(1000)
            });
        });
        context('Quando realizo o login com sucesso', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br')

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********')

                cy.get('.btn').click({force:true})
            });
            it('Então como Título deve conter "Encontre o seu paciente"', () => {
                cy.get('.title-top').should('contain', 'Encontre o seu paciente')
                // cy.wait(1000)
            });
        });
        context('Quando valido a obrigatoriedade do campo CPF do paciente', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br')

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********')
                
                cy.get('.btn').click({force:true})
                // cy.wait(500)
                cy.get('#mat-input-2').click({force:true})
                cy.get('.section-main').click({force:true}) 
            });
            it('Então como Título deve conter "Encontre o seu paciente"', () => {
                cy.get('#mat-error-2').should('contain', 'Campo obrigatório')
                // cy.wait(1000)
            });
        });
        context('Validar "Buscar paciente"', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br')

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********')
                
                cy.get('.btn').click({force:true})
                // cy.wait(500)
                cy.get('#mat-input-2').click({force:true})
                cy.get('#mat-input-2').type('000.000.000-00')
                cy.get('.btn').click({force:true})
            });
            it('Então como Título deve conter "Encontre o seu paciente"', () => {
                cy.get('.btn').should('be.visible')
            });
        });
        context('Validar obrigatoriedade dos campos no cadastro do paciente', () => {
            beforeEach(() => {
                cy.get('#mat-input-0').click({force:true})
                cy.get('#mat-input-0').type('aurelio@health.com.br')

                cy.get('#mat-input-1').click({force:true})
                cy.get('#mat-input-1').type('**********')
                
                cy.get('.btn').click({force:true})
                // cy.wait(500)
                cy.get('.btn').click({force:true})
                cy.get('a').click({force:true})
            });
            it('Então como Título deve conter "Dados Gerais"', () => {
                cy.get('.header-tab').should('contain', 'Dados Gerais')
            });
            it('Então como mensagem de ser exibido "Nome é obrigatório"', () => {
                cy.get('#mat-input-0').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-0').should('contain', 'Nome é obrigatório.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "CPF é obrigatório"', () => {
                cy.get('#mat-input-1').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-1').should('contain', 'CPF é obrigatório.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Carteira SUS é obrigatória"', () => {
                cy.get('#mat-input-2').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-2').should('contain', 'Carteira SUS é obrigatória')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Campo sexo é obrigatório."', () => {
                cy.get('#mat-input-3').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-3').should('contain', 'Campo sexo é obrigatório.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Data de Nascimento é obrigatória."', () => {
                cy.get('#mat-input-4').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-4').should('contain', 'Data de Nascimento é obrigatória.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Estado Civil é obrigatória."', () => {
                cy.get('#mat-input-5').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-5').should('contain', 'Estado Civil é obrigatório.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Profissão é obrigatória."', () => {
                cy.get('#mat-input-6').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-6').should('contain', 'Profissão é obrigatória.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Email é obrigatório."', () => {
                cy.get('#mat-input-7').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-7').should('contain', 'Email é obrigatório.')
                // cy.wait(1000)
            });
            it('Então como mensagem de ser exibido "Telefone é obrigatório."', () => {
                cy.get('#mat-input-8').click({force: true})
                cy.get('#mat-tab-label-0-0').click({force: true})
                cy.get('#mat-error-8').should('contain', 'Telefone é obrigatório.')
                // cy.wait(1000)
            });
            it('Então na aba Endereço o campo CEP deve exibir "Cep é obrigatório."', () => {
                cy.get('#mat-tab-label-0-1').click({force: true})
                // cy.wait(500)
                cy.get('#mat-input-9').click({force: true})
                cy.get('#mat-tab-label-0-1').click({force: true})
                cy.get('#mat-error-9').should('contain', 'Cep é obrigatório.')
                // cy.wait(1000)
            });
            it('Então na aba Endereço o campo Rua deve exibir "Rua é obrigatória."', () => {
                cy.get('#mat-tab-label-0-1').click({force: true})
                // cy.wait(500)
                cy.get('#mat-input-10').click({force: true})
                cy.get('#mat-tab-label-0-1').click({force: true})
                cy.get('#mat-error-10').should('contain', 'Rua é obrigatória.')
                // cy.wait(1000)
            });
            it('Então na aba Endereço o campo Número deve exibir "Número é obrigatório."', () => {
                cy.get('#mat-tab-label-0-1').click({force: true})
                // cy.wait(500)
                cy.get('#mat-input-11').click({force: true})
                cy.get('#mat-tab-label-0-1').click({force: true})
                cy.get('#mat-error-11').should('contain', 'Número é obrigatório.')
                // cy.wait(1000)
            });
            it('Então na aba Endereço o campo Bairro deve exibir "Bairro é obrigatório."', () => {
                cy.get('#mat-tab-label-0-1').click({force: true})
                // cy.wait(500)
                cy.get('#mat-input-12').click({force: true})
                cy.get('#mat-tab-label-0-1').click({force: true})
                cy.get('#mat-error-12').should('contain', 'Bairro é obrigatório.')
                // cy.wait(1000)
            });
            it('Então na aba Endereço o campo Completmento deve exibir "Completmento é obrigatório."', () => {
                cy.get('#mat-tab-label-0-1').click({force: true})
                // cy.wait(500)
                cy.get('#mat-input-13').click({force: true})
                cy.get('#mat-tab-label-0-1').click({force: true})
                cy.get('#mat-error-13').should('contain', 'Complemento é obrigatório.')
                // cy.wait(1000)
            });
            it('Então na aba Endereço o campo Cidade deve exibir "Cidade é obrigatória."', () => {
                cy.get('#mat-tab-label-0-1').click({force: true})
                // cy.wait(500)
                cy.get('#mat-input-14').click({force: true})
                cy.get('#mat-tab-label-0-1').click({force: true})
                cy.get('#mat-error-14').should('contain', 'Cidade é obrigatório.')
                // cy.wait(1000)
            });
        });
    });
});