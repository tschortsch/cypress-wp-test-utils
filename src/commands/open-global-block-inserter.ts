/**
 * Opens the global block inserter.
 */
export const openGlobalBlockInserter = (): void => {
  const toggleBlockInserterButtonSelector57 =
    '//div[contains(@class,"edit-post-header")]//button[contains(@aria-label,"Add block")]';
  const toggleBlockInserterButtonSelector =
    '//div[contains(@class,"edit-post-header")]//button[contains(@aria-label,"Toggle block inserter")]';

  const inserterPanelSelector57 = '.edit-post-layout__inserter-panel';
  const inserterPanelSelector = '.edit-post-editor__inserter-panel';

  cy.window().then((window) => {
    const isGlobalBlockInserterOpen57 = window.document.querySelector(
      inserterPanelSelector57
    );
    const isGlobalBlockInserterOpen = window.document.querySelector(
      inserterPanelSelector
    );
    if (!isGlobalBlockInserterOpen && !isGlobalBlockInserterOpen57) {
      cy.xpath(
        `${toggleBlockInserterButtonSelector57} | ${toggleBlockInserterButtonSelector}`
      ).click({
        force: true,
      });
    }
  });
};
