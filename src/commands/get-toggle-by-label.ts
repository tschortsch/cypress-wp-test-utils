/**
 * Gets a toggle element by label.
 *
 * @param {string} label Label of toggle element.
 */
import Chainable = Cypress.Chainable;

export const getToggleByLabel = (label: string): Chainable<JQuery> => {
  return cy.xpath(
    `//label[contains(@class,"components-toggle-control__label")][contains(text(),"${label}")]/preceding-sibling::span[contains(@class,"components-form-toggle")]/input`
  );
};
