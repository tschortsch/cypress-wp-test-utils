/**
 * Clicks a button.
 *
 * @param {string} label The text string of the button label.
 * @param {string} [type] The type of button label: 'ariaLabel' or 'content'.
 */
Cypress.Commands.add('clickButton', (label, type = 'content') => {
  if (type === 'ariaLabel') {
    cy.get(`button[aria-label="${label}"]`).click({ force: true });
  }

  if (type === 'content') {
    cy.xpath(`//button[contains(text(), '${label}')]`).click({
      force: true,
    });
  }
});
