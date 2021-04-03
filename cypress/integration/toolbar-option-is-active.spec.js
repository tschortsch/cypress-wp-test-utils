/// <reference types="Cypress" />

context('toolbarOptionIsActive Command', () => {
	beforeEach(() => {
		cy.loginUser()
		cy.createNewPost()
	})

	it('should check if toolbar option is active', () => {
		cy.insertBlock('Heading')
		cy.clickBlockToolbarButton('Align', 1 )
		cy.clickElementByText('button', 'Align text center')
		cy.toolbarOptionIsActive('Align', 'Align text center', 1, 0)
	})
})
