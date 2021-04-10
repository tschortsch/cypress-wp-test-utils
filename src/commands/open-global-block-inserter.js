/**
 * Opens the global block inserter.
 */
export const openGlobalBlockInserter = () => {
  cy.get('.edit-post-header [aria-label="Add block"]').click({
    force: true,
  });
};
