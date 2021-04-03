/// <reference types="Cypress" />

context('clickBlockToolbarButton Command', () => {
	beforeEach(() => {
		cy.loginUser()
		cy.createNewPost()
	})

	it('should click on block toolbar button by aria-label', () => {
		cy.insertBlock( 'Heading' )
		cy.selectBlockByName( 'core/heading' )
		cy.clickBlockToolbarButton( 'Change heading level' )
		cy.get( 'button[aria-label="Heading 3"]' ).click();
		cy.postContentMatchesSnapshot();
	})
})
