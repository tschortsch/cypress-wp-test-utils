/**
 * Gets a input element by label.
 *
 * @param {string} label Label of input element.
 */
export const getInputByLabel = (label) => {
  cy.get(`input[aria-label="${label}"]`);
};
