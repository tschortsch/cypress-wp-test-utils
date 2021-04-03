/// <reference types="Cypress" />

context('postContentMatchesSnapshot Command', () => {
	beforeEach(() => {
		cy.loginUser()
		cy.createNewPost()
	})

	it('should match against snapshot', () => {
		cy.insertBlock('Paragraph')
		cy.postContentMatchesSnapshot()
	})
})
