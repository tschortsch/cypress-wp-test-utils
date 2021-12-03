/**
 * Gets a input element by label.
 *
 * @param {string} label Label of input element.
 * @param {'ariaLabel' | 'element'} [labelType] The type of button label: 'ariaLabel' or 'element'.
 */
import Chainable = Cypress.Chainable;

export const getInputByLabel = (
  label: string,
  labelType: 'ariaLabel' | 'element' = 'ariaLabel'
): Chainable<JQuery<HTMLElement>> => {
  if (labelType === 'ariaLabel') {
    return cy.get(`input[aria-label="${label}"]`);
  }

  return cy.xpath(
    `//input/preceding-sibling::label[contains(text(),"${label}")]`
  );
};
