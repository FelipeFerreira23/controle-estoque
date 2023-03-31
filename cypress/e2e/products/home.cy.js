/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Seja possível encontrar o botão e clicar', () => {
    cy.get('a').should('be.visible').contains('Cadastrar novos produtos').click()

  })

})
