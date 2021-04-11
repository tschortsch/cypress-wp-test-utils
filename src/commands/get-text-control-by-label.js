/**
 * Gets a TextControl element by label.
 *
 * @param {string} label Label of TextControl element.
 */
export const getTextControlByLabel = (label) => {
  cy.xpath(
    `//label[contains(@class,"components-base-control__label")][contains(text(),"${label}")]/following-sibling::input[contains(@class,"components-text-control__input")]`
  );
};
