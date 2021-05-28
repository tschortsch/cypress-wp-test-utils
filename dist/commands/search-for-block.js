/**
 * Search for block in the global inserter.
 *
 * @param {string} searchTerm The text to search the inserter for.
 */
export const searchForBlock = (searchTerm) => {
    cy.openGlobalBlockInserter();
    cy.get('input.block-editor-inserter__search-input').type(searchTerm);
};
