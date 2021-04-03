/// <reference types="Cypress" />

context('getSelectByLabel Command', () => {
	beforeEach(() => {
		cy.loginUser()
		cy.createNewPost()
	})

	it('should return select element by label', () => {
		cy.insertBlock( 'Buttons' )
		cy.ensureSidebarOpened()
		cy.getSelectByLabel( 'Default Style' ).should( 'have.value', '' )
	})
})
