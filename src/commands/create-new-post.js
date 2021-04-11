import { addQueryArgs } from '@wordpress/url';

/**
 * Creates new post.
 *
 * @param {Object}  object                    Object to create new post, along with tips enabling option.
 * @param {string}  [object.postType]         Post type of the new post.
 * @param {string}  [object.title]            Title of the new post.
 * @param {string}  [object.content]          Content of the new post.
 * @param {string}  [object.excerpt]          Excerpt of the new post.
 * @param {boolean} [object.showWelcomeGuide] Whether to show the welcome guide or not.
 */
export const createNewPost = ({
  postType,
  title,
  content,
  excerpt,
  showWelcomeGuide = false,
} = {}) => {
  const query = addQueryArgs('', {
    post_type: postType,
    post_title: title,
    content,
    excerpt,
  }).slice(1);

  cy.visitAdminPage('post-new.php', query);

  if (!showWelcomeGuide) {
    cy.closeWelcomeGuide();
  }
};
