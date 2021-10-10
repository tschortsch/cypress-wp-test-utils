/**
 * Opens the inserter, searches for the given term, then selects the first
 * result that appears.
 *
 * @param {string} searchTerm The text to search the inserter for.
 * @param {string} [blockLabel] The label of the block to insert.
 */
export const insertBlock = (searchTerm, blockLabel = searchTerm) => {
    cy.searchForBlock(searchTerm);
    cy.xpath(`//button//span[contains(text(), '${blockLabel}')]`).first().click({
        force: true,
    });
};
