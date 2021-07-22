import config from '../shared/config';

const GLOBAL_BLOCK_INSERTER_SELECTOR_57 =
  '.edit-post-header [aria-label="Add block"]';
const GLOBAL_BLOCK_INSERTER_SELECTOR_58 =
  '.edit-post-header [aria-label="Toggle block inserter"]';

/**
 * Opens the global block inserter.
 */
export const openGlobalBlockInserter = (): void => {
  const selector =
    config.wpVersion === 5.8
      ? GLOBAL_BLOCK_INSERTER_SELECTOR_58
      : GLOBAL_BLOCK_INSERTER_SELECTOR_57;

  cy.window().then((window) => {
    const isGlobalBlockInserterOpen = window.document.querySelector(selector);
    if (!isGlobalBlockInserterOpen) {
      cy.get(selector).click({
        force: true,
      });
    }
  });
};
