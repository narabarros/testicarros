/// <reference types="cypress" />

describe ('make queries to a vehicle website', () => {


    beforeEach(() => {
        
        
        cy.visit ('https://www.icarros.com.br/principal/index.jsp');
        
        cy.get ('[data-id="sltMake"]').click();
        
        cy.get ('[btn-group bootstrap-select open]').click();
        
        cy.get ('[data-normalized-text="Chevrolet"]').select("Chevrolet");
        
        cy.get ('[sltModel]').select("Astra Hatch");
        
        cy.get ('[class="showBoxLocation link link--white p-top-md pull-left"]').click();
        
        cy.get('#id="cidade"').type('Bauru')

    })


})
