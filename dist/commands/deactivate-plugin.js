/**
 * Deactivates a plugin.
 *
 * @param {string} slug Slug of the plugin which should be deactivated.
 */
export const deactivatePlugin = (slug) => {
    cy.visitAdminPage('plugins.php').then(() => {
        const log = Cypress.log({
            name: 'deactivatePlugin',
            displayName: 'deact. Plug.',
            consoleProps: () => {
                return {
                    Slug: slug,
                };
            },
        });
        cy.window({ log: false }).then((window) => {
            const deleteLink = window.document.querySelector(`tr[data-slug="${slug}"] .delete a`);
            if (!deleteLink) {
                log.snapshot('before');
                cy.get(`tr[data-slug="${slug}"] .deactivate a`, {
                    log: false,
                })
                    .click({ force: true, log: false })
                    .then(() => {
                    log.snapshot('after');
                    cy.get(`tr[data-slug="${slug}"] .delete a`, {
                        log: false,
                    }).should('exist');
                    log
                        .set({
                        message: `Plugin '${slug}' successfully deactivated`,
                    })
                        .end();
                });
            }
            else {
                log
                    .set({
                    message: `Plugin '${slug}' already deactivated`,
                })
                    .end();
            }
        });
    });
};
