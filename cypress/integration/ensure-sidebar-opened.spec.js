/// <reference types="Cypress" />

context('ensureSidebarOpened Command', () => {
	beforeEach(() => {
		cy.loginUser()
		cy.createNewPost()
	})

	it('should open sidebar if closed', () => {
		cy.get( '.edit-post-header__settings [aria-label="Settings"]' ).click( { force: true } )
		cy.get('.edit-post-sidebar').should('not.exist')
		cy.ensureSidebarOpened()
		cy.get('.edit-post-sidebar').should('exist')
	})

	it('should keep sidebar open if already opened', () => {
		cy.get( '.edit-post-header__settings [aria-label="Settings"]' ).click( { force: true } )
		cy.get('.edit-post-sidebar').should('not.exist')
		cy.ensureSidebarOpened()
		cy.get('.edit-post-sidebar').should('exist')
		cy.ensureSidebarOpened()
		cy.get('.edit-post-sidebar').should('exist')
	})
})
