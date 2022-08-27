///<reference types="cypress"/>

describe('Suite Home Page', () => {
    before(() => {
        cy.visit('/')
      })
    it('Verificar titulo de la pagina', () => {
        cy.title().should('eq','Platzi Store')
    })
    it('Verificar Header de de la pagina', () => {
        cy.get('.Header-title > a').should('be.visible').contains('Platzi Store')
    })
    it('Agergar un articulo al carrito', () => {
        cy.get(':nth-child(1) > button').should('be.visible').contains('Comprar').click()
        cy.get('.Header-alert').should('be.visible').contains('1')
    })

    //
})
