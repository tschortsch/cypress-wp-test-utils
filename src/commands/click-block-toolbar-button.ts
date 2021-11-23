/**
 * Clicks a button in the toolbar of the currently selected block.
 *
 * @param {string} label The text string of the button label.
 * @param {number} [index] The index of the button if multiple buttons were found with the given label.
 */
import Chainable = Cypress.Chainable;

export const clickBlockToolbarButton = (
  label: string,
  index = 0
): Chainable<JQuery> => {
  return cy
    .get(`.block-editor-block-toolbar button[aria-label="${label}"]`)
    .eq(index)
    .click({ force: true });
};
