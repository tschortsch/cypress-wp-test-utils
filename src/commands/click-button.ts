/**
 * Clicks a button.
 *
 * @param {string} label The text string of the button label.
 * @param {'ariaLabel' | 'content'} [buttonLabelType] The type of button label: 'ariaLabel' or 'content'.
 */
import Chainable = Cypress.Chainable;

export const clickButton = (
  label: string,
  buttonLabelType: 'ariaLabel' | 'content' = 'content'
): Chainable<JQuery> => {
  if (buttonLabelType === 'ariaLabel') {
    return cy.get(`button[aria-label="${label}"]`).click({ force: true });
  }

  if (buttonLabelType === 'content') {
    return cy.xpath(`//button[contains(text(), '${label}')]`).click({
      force: true,
    });
  }
};
