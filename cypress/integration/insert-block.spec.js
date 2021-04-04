/// <reference types="Cypress" />

context( 'insertBlock Command', () => {
	beforeEach( () => {
		cy.loginUser();
		cy.createNewPost();
	} );

	it( 'should insert block', () => {
		cy.insertBlock( 'Paragraph' );
		cy.get( '[data-type="core/paragraph"]' ).should( 'have.length', 1 );
	} );
} );
