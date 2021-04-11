/**
 * Checks if a certain option in a select box is available.
 *
 * @param {string} selectLabel Label of the block to select box.
 * @param {string} optionValue The value of the option to search for.
 */
export const selectOptionIsAvailable = (selectLabel, optionValue) => {
  cy.xpath(
    `//label[contains(@class,"components-input-control__label") and contains(text(),"${selectLabel}")]/parent::div/following-sibling::div/select[contains(@class,"components-select-control__input")]/option[@value="${optionValue}"]`
  ).should('exist');
};
