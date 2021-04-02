/// <reference types="Cypress" />

context('loginUser Command', () => {
	it('should login user', () => {
		cy.loginUser()
		cy.url().should('include', '/wp-admin')
		cy.url().should('not.include', '/wp-login.php')
	})

	it('should login user with different username and password', () => {
		cy.loginUser('otheruser', 'otherpass')
		cy.get('#login_error').contains('Unknown username. Check again or try your email address.')
	})
})
