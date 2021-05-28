/**
 * Gets a TextControl element by label.
 *
 * @param {string} label Label of TextControl element.
 */
import Chainable = Cypress.Chainable;

export const getTextControlByLabel = (label: string): Chainable<JQuery> => {
  return cy.xpath(
    `//label[contains(@class,"components-base-control__label")][contains(text(),"${label}")]/following-sibling::input[contains(@class,"components-text-control__input")]`
  );
};
