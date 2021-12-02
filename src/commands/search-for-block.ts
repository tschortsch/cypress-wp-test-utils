import config from '../shared/config';

/**
 * Search for block in the global inserter.
 *
 * @param {string} searchTerm The text to search the inserter for.
 */
export const searchForBlock = (searchTerm: string): void => {
  const searchInputSelector =
    config.wpVersion >= 5.9
      ? '.block-editor-inserter__search input'
      : 'input.block-editor-inserter__search-input';

  cy.openGlobalBlockInserter();
  cy.get(searchInputSelector).clear().type(searchTerm);
};
