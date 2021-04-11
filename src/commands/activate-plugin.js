/**
 * Activates a plugin.
 *
 * @param {string} slug Slug of the plugin which should be activated.
 */
export const activatePlugin = (slug) => {
  cy.visitAdminPage('plugins.php').then(() => {
    const log = Cypress.log({
      name: 'activatePlugin',
      displayName: 'act. Plugin',
      consoleProps: () => {
        return {
          Slug: slug,
        };
      },
    });

    cy.window({ log: false }).then((window) => {
      const disableLink = window.document.querySelector(
        `tr[data-slug="${slug}"] .deactivate a`
      );
      if (!disableLink) {
        log.snapshot('before');
        cy.get(`tr[data-slug="${slug}"] .activate a`, {
          log: false,
        })
          .click({ force: true, log: false })
          .then(() => {
            log.snapshot('after');
            cy.get(`tr[data-slug="${slug}"] .deactivate a`, {
              log: false,
            }).should('exist');
            log
              .set({
                message: `Plugin '${slug}' successfully activated`,
              })
              .end();
          });
      } else {
        log
          .set({
            message: `Plugin '${slug}' already activated`,
          })
          .end();
      }
    });
  });
};
