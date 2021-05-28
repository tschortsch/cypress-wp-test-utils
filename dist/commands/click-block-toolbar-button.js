/**
 * Clicks a button in the toolbar of the currently selected block.
 *
 * @param {string} label The text string of the button label.
 * @param {number} [index] The index of the button if multiple buttons were found with the given label.
 */
export const clickBlockToolbarButton = (label, index = 0) => {
    cy.get(`.block-editor-block-toolbar button[aria-label="${label}"]`)
        .eq(index)
        .click({ force: true });
};
