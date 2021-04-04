/// <reference types="Cypress" />

context( 'getCheckboxByLabel Command', () => {
	beforeEach( () => {
		cy.loginUser();
		cy.createNewPost();
	} );

	it( 'should return checkbox by label', () => {
		cy.getCheckboxByLabel( 'Stick to the top of the blog' )
			.should( 'exist' )
			.and( 'not.be.checked' );
	} );
} );
