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

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordSecondText)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })

            //testing new branch
        })    
    })    
})