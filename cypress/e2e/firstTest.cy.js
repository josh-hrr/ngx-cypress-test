/// <reference types="cypress" />

describe('Support page', () => {
    it('first test', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //by Tag Name
        cy.get('input').wait(500);

        //by ID
        cy.get('#inputEmail1');

        //by Class name
        cy.get('.input-full-width');

        //by Attribute name
        cy.get('[placeholder]');

        //by Attribute + value
        cy.get("[placeholder='Email']");

        //by Class + value 
        cy.get("[class='input-full-width size-medium shape-rectangle']");

        //by Tag + Attribute + value
        cy.get('input[placeholder="Email"]');

        //by TWO attributes 
        cy.get('[placeholder="Email"]')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click() 
    })
})