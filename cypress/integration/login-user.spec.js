/// <reference types="Cypress" />

context('cy.loginUser()', () => {
	it('should login user', () => {
		cy.loginUser()
		cy.url().should('include', '/wp-admin')
		cy.url().should('not.include', '/wp-login.php')
	})
})
