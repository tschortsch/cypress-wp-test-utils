/**
 * Sets the value of a TextControl element by its label.
 *
 * @param {string} label Label of the TextControl element.
 * @param {string} value Value to set.
 */
export const setTextControlValueByLabel = (
  label: string,
  value: string
): void => {
  cy.xpath(
    `//label[contains(@class,"components-base-control__label")][contains(text(),"${label}")]/following-sibling::input[contains(@class,"components-text-control__input")]`
  ).type(value);
};
