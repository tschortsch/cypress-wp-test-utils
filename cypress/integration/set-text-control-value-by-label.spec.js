/// <reference types="Cypress" />

context( 'setTextControlValueByLabel Command', () => {
	beforeEach( () => {
		cy.loginUser();
		cy.createNewPost();
	} );

	it( 'should set text control value by label', () => {
		cy.insertBlock( 'Buttons' );
		cy.ensureSidebarOpened();
		cy.setTextControlValueByLabel( 'Link rel', 'my rel' );
    cy.getEditedPostContent().snapshot();
	} );
} );
