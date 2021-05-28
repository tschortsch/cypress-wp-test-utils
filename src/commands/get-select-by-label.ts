/**
 * Gets a select element by label.
 *
 * @param {string} label Label of select element.
 */
import Chainable = Cypress.Chainable;

export const getSelectByLabel = (label: string): Chainable<JQuery> => {
  return cy.xpath(
    `//label[contains(@class,"components-input-control__label") and contains(text(),"${label}")]/parent::div/following-sibling::div/select[contains(@class, "components-select-control__input")]`
  );
};
