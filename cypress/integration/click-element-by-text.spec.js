/// <reference types="Cypress" />

context( 'clickElementByText Command', () => {
	beforeEach( () => {
		cy.loginUser();
		cy.createNewPost();
	} );

	it( 'should click on element based on text', () => {
		cy.insertBlock( 'Heading' );
		cy.selectBlockByName( 'core/heading' );
		cy.ensureSidebarOpened();
		cy.clickElementByText( 'label', 'Font' );
	} );

	it( 'should click on element based on strict text', () => {
		cy.insertBlock( 'Heading' );
		cy.selectBlockByName( 'core/heading' );
		cy.ensureSidebarOpened();
		cy.clickElementByText( 'label', 'Font size', true );
	} );
} );
