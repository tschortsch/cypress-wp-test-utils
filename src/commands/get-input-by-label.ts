/**
 * Gets a input element by label.
 *
 * @param {string} label Label of input element.
 */
import Chainable = Cypress.Chainable;

export const getInputByLabel = (
  label: string
): Chainable<JQuery<HTMLElement>> => {
  return cy.get(`input[aria-label="${label}"]`);
};
