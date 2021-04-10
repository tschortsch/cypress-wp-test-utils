/**
 * Opens the inserter, searches for the given term, then selects the first
 * result that appears.
 *
 * @param {string} searchTerm The text to search the inserter for.
 * @param {string} blockLabel The label of the block to insert.
 * @param {string|null} panelName  The inserter panel to open (if it's closed by default).
 */
export const insertBlock = (
  searchTerm,
  blockLabel = searchTerm,
  panelName = null
) => {
  cy.searchForBlock(searchTerm);
  if (panelName) {
    cy.xpath(`//button[contains(text(), '${panelName}')]`).click({
      force: true,
    });
  }
  cy.xpath(`//button//span[contains(text(), '${blockLabel}')]`).click({
    force: true,
  });
};
