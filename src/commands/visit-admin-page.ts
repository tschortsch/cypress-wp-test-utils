import { join } from 'path';
import Chainable = Cypress.Chainable;
import AUTWindow = Cypress.AUTWindow;

/**
 * Visits a given admin page.
 *
 * @param {string} adminPath Path to admin page.
 * @param {string} [query] Query string which should be added to URL.
 */
export const visitAdminPage = (
  adminPath: string,
  query: string
): Chainable<AUTWindow> => {
  return cy.visit(`${join('/wp-admin', adminPath)}${query ? `?${query}` : ''}`);
};
