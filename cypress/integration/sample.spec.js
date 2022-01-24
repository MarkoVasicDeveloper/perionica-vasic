/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable no-undef */
// import cy from 'cypress';

/// <reference types="cypress" />

describe('My first test', () => {
    it('Visit the CarpetWashing page from button in CarpetServiceInfo section', () => {
        cy.visit('/')

        cy.get('[data-testId = linkWashCarpet]').click({force: true})

        cy.url().should('include', 'pranje-tepiha')
    })

    it('Visit the DeepWashing page from button in DeepWash section', () => {
        cy.visit('/')
        cy.get('[data-testId = linkFirstDeepWashingButton]').click({force: true})
        cy.url().should('include', 'dubinsko-pranje')
        cy.visit('/')
    })

    it('Test a header links', () => {
        cy.visit('/')
        cy.visit('/pranje-tepiha')
        cy.url().should('include', '/pranje-tepiha')
        cy.visit('/dubinsko-pranje')
        cy.url().should('include', 'dubinsko-pranje')
        cy.visit('/galerija')
        cy.url().should('include', 'galerija')
        cy.visit('/kontakt')
        cy.url().should('include', '/kontakt')
    })
    
    it.only('Test contract page', () => {
        cy.visit('/kontakt')
        cy.get('form').should('exist')
        cy.get('[data-testid=name]').should('exist').type('marko')
        cy.get('[data-testid=surname]').should('exist').type('vasic')
        cy.get('[data-testid=email]').should('exist')
    })
})