/**
 * Search for block in the global inserter.
 *
 * @param {string} searchTerm The text to search the inserter for.
 */
export const searchForBlock = (searchTerm: string): void => {
  const searchInputSelector58 =
    '//input[contains(@class,"block-editor-inserter__search-input")]';
  const searchInputSelector =
    '//div[contains(@class,"block-editor-inserter__search")]//input';

  cy.openGlobalBlockInserter();
  cy.xpath(`${searchInputSelector} | ${searchInputSelector58}`)
    .clear()
    .type(searchTerm);
};
