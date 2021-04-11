import { join } from 'path';
import { createURL } from '../shared/create-url';

/**
 * Visits a given admin page.
 *
 * @param {string} adminPath String to be serialized as pathname.
 * @param {string} query String to be serialized as query portion of URL.
 */
export const visitAdminPage = (adminPath, query) => {
  cy.visit(createURL(join('wp-admin', adminPath), query));
};
