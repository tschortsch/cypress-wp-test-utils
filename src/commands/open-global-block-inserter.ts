import config from '../shared/config';

/**
 * Opens the global block inserter.
 */
export const openGlobalBlockInserter = (): void => {
  const toggleBlockInserterButtonSelector =
    config.wpVersion === 5.8
      ? '.edit-post-header [aria-label="Toggle block inserter"]'
      : '.edit-post-header [aria-label="Add block"]';

  const inserterPanelSelector =
    config.wpVersion === 5.8
      ? '.edit-post-editor__inserter-panel'
      : '.edit-post-layout__inserter-panel';

  cy.window().then((window) => {
    const isGlobalBlockInserterOpen = window.document.querySelector(
      inserterPanelSelector
    );
    if (!isGlobalBlockInserterOpen) {
      cy.get(toggleBlockInserterButtonSelector).click({
        force: true,
      });
    }
  });
};
