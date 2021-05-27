import Chainable = Cypress.Chainable;

export const wpDataSelect = (
  store: string,
  selector: string,
  ...parameters
): Chainable<unknown> => {
  return cy.window().then((window) => {
    return window.wp.data.select(store)[selector](...parameters);
  });
};

export const getAllBlocks = (): Chainable<unknown> => {
  return wpDataSelect('core/block-editor', 'getBlocks');
};

export const getBlockByName = (name: string, index = 0): Chainable<unknown> => {
  return getAllBlocks().then((blocks: any[]) => {
    const blocksByName = blocks.filter((block) => block.name === name);
    return blocksByName[index];
  });
};

export const selectBlockByClientId = (clientId: string): void => {
  cy.window().then((window) => {
    window.wp.data.dispatch('core/block-editor').selectBlock(clientId);
  });
};
