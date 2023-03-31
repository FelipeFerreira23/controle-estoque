/// <reference types="cypress" />

context('Products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/default/products')
  })

  it('Seja possível encontrar o último produto e removê-lo', () => {
    cy.get('li').last().should('be.visible').contains('Deletar').click()

  })

})
