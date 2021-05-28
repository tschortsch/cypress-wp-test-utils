/**
 * Returns the content of the post being edited as string.
 * see: https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getEditedPostContent
 */
import Chainable = Cypress.Chainable;

export const getEditedPostContent = (): Chainable<unknown> => {
  return cy.window().then((window) => {
    return window.wp.data.select('core/editor').getEditedPostContent();
  });
};
