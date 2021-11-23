/**
 * Visits a given admin page.
 *
 * @param {string} adminPath Path to admin page.
 * @param {string} [query] Query string which should be added to URL.
 */
import { join } from 'path';
export const visitAdminPage = (adminPath, query) => {
    return cy.visit(`${join('/wp-admin', adminPath)}${query ? `?${query}` : ''}`);
};
