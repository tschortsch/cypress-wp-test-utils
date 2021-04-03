/// <reference types="Cypress" />

context('deactivatePlugin Command', () => {
	beforeEach(() => {
		cy.loginUser()
		cy.activatePlugin('hello-dolly')
	})

	it('should deactivate plugin', () => {
		cy.deactivatePlugin('hello-dolly')
		cy.get('[data-slug="hello-dolly"].inactive').should('exist')
	})

	it('should be possible to run command multiple times', () => {
		cy.deactivatePlugin('hello-dolly')
		cy.deactivatePlugin('hello-dolly')
		cy.get('[data-slug="hello-dolly"].inactive').should('exist')
	})
})
