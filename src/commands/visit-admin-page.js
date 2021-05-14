import { join } from 'path';

/**
 * Visits a given admin page.
 *
 * @param {string} adminPath Path to admin page.
 * @param {string} [query] Query string which should be added to URL.
 */
export const visitAdminPage = (adminPath, query) => {
  cy.visit(`${join('/wp-admin', adminPath)}${query ? `?${query}` : ''}`);
};
