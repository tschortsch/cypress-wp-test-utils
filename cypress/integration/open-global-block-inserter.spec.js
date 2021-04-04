/// <reference types="Cypress" />

context( 'openGlobalBlockInserter Command', () => {
	beforeEach( () => {
		cy.loginUser();
		cy.createNewPost();
	} );

	it( 'should open global block inserter', () => {
		cy.openGlobalBlockInserter();
		cy.get( '.block-editor-inserter__menu' ).should( 'exist' );
	} );
} );
