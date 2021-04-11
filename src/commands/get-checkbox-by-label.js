/**
 * Gets a checkbox element by label.
 *
 * @param {string} label Label of checkbox element.
 */
export const getCheckboxByLabel = (label) => {
  cy.xpath(
    `//label[contains(@class,"components-checkbox-control__label")][contains(text(),"${label}")]/preceding-sibling::span[contains(@class,"components-checkbox-control__input-container")]/input`
  );
};
