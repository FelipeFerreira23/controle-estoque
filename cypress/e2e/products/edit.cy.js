/// <reference types="cypress" />

context('Products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/default/products')
  })

  it('Seja possível encontrar o primeiro produto e editar o campo preço', () => {
    cy.get('li').first().should('be.visible').contains('Editar').click()

    cy.get('input[name="price"]').should('be.visible').clear().type(199.99).blur()

    cy.get('button[type="submit"]').should('be.visible').contains('Atualizar').click()

  })

})
