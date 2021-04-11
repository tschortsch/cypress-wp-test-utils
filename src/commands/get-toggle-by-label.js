/**
 * Gets a toggle element by label.
 *
 * @param {string} label Label of toggle element.
 */
export const getToggleByLabel = (label) => {
  cy.xpath(
    `//label[contains(@class,"components-toggle-control__label")][contains(text(),"${label}")]/preceding-sibling::span[contains(@class,"components-form-toggle")]/input`
  );
};
