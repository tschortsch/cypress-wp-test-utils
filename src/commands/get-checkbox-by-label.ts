/**
 * Gets a checkbox element by label.
 *
 * @param {string} label Label of checkbox element.
 */
import Chainable = Cypress.Chainable;

export const getCheckboxByLabel = (label: string): Chainable<JQuery> => {
  return cy.xpath(
    `//label[contains(@class,"components-checkbox-control__label")][contains(text(),"${label}")]/preceding-sibling::span[contains(@class,"components-checkbox-control__input-container")]/input`
  );
};
