/// <reference types="cypress" />

context('Products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Seja possível encontrar o botão e listar os produtos', () => {
    cy.get('a').should('be.visible').contains('Listar os produtos').click()

  })

})
