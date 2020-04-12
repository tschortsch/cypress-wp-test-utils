Cypress.Commands.add( 'postContentMatchesSnapshot', () => {
	cy.window().then( win => {
		cy.wrap( win.wp.data.select( 'core/editor' ).getEditedPostContent() ).snapshot();
	} )
} )
