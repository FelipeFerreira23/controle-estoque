/// <reference types="cypress" />

context('Add', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/default/add')
  })

  it('Seja possível encontrar os campos e fazer o cadastro', () => {
    cy.get('input[name="title"]').should('be.visible').type('Produto do Cypress')
    cy.get('input[name="description"]').should('be.visible').type('Teste de descrição')
    cy.get('input[name="sizes"]').should('be.visible').type('10 x 10 x10')
    cy.get('input[name="weight"]').should('be.visible').type(5)
    cy.get('input[name="cod"]').should('be.visible').type(12345)
    cy.get('input[name="category"]').should('be.visible').type("Categoria 1, Categoria 2")
    cy.get('input[name="price"]').should('be.visible').type(99.99)
    cy.get('input[name="acquisition"]').should('be.visible').type('2023-03-30')
    cy.get('input[name="src"]').should('be.visible').type('https://img.lojasrenner.com.br/item/727245341/large/3.jpg')

    cy.get('button[type="submit"]').should('be.visible').contains('Cadastrar').click()

  })
})
