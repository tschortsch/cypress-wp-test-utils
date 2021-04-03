/**
 * Clicks a block toolbar button.
 *
 * @param {string} label  The text string of the button label.
 */
Cypress.Commands.add( 'clickBlockToolbarButton', ( label ) => {
	cy.get(`.block-editor-block-toolbar button[aria-label="${ label }"]`).click( { force: true } )
} )
