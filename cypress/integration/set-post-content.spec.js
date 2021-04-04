/// <reference types="Cypress" />

context( 'selectOptionIsAvailable Command', () => {
	beforeEach( () => {
		cy.loginUser();
		cy.createNewPost();
	} );

	it( 'should set given post content', () => {
		cy.setPostContent(
			'<!-- wp:paragraph --><p>content</p><!-- /wp:paragraph -->'
		);
		cy.postContentMatchesSnapshot();
	} );
} );
