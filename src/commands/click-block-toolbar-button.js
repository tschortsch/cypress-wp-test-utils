/**
 * Clicks a block toolbar button.
 *
 * @param {string} label  The text string of the button label.
 */
Cypress.Commands.add( 'clickBlockToolbarButton', ( label, index = 0 ) => {
	cy.get(`.block-editor-block-toolbar button[aria-label="${ label }"]`).eq(index).click( { force: true } )
} )
