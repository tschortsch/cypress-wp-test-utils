Cypress.Commands.add( 'closeWelcomeGuide', () => {
	cy.get( 'body' ).then( ( $body ) => {
		if ( $body.find( 'button.nux-dot-tip__disable' ).length ) {
			cy.get( 'button.nux-dot-tip__disable' ).click()
			cy.reload()
		}
		if ( $body.find( '.edit-post-welcome-guide' ).length ) {
			cy.get( '.edit-post-welcome-guide .components-modal__header button' ).click()
			cy.reload()
		}
	} )

	// This would be the "official" way to disable the welcome guide but somehow it doesn't work
	/*cy.window().then(win => {
		// TODO this returns false even if welcome guide is active
		const isWelcomeGuideActive = win.wp.data.select( 'core/edit-post' ).isFeatureActive( 'welcomeGuide' );

		if ( showWelcomeGuide !== isWelcomeGuideActive ) {
			cy.window().then(win => {
				win.wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'welcomeGuide' );
			})
			cy.reload();
		}
	})*/
} )
