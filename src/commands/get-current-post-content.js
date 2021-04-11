/**
 * Returns current post content as object.
 * see: https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPost
 */
export const getCurrentPostContent = () => {
  cy.window().then((window) => {
    return window.wp.data.select('core/editor').getCurrentPost();
  });
};
