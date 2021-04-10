export const ensureSidebarOpened = () => {
  cy.window({ log: false }).then((window) => {
    const log = Cypress.log({
      name: 'ensureSidebarOpened',
      displayName: 'Open sidebar',
    });

    cy.get('.edit-post-header__settings [aria-label="Settings"]', {
      log: false,
    })
      .click({ force: true, log: false })
      .then(() => {
        if (!window.document.querySelector('.edit-post-sidebar')) {
          cy.get('.edit-post-header__settings [aria-label="Settings"]', {
            log: false,
          }).click({ force: true, log: false });
          log.set({ message: 'Sidebar already opened' }).end();
        } else {
          log.set({ message: 'Sidebar successfully opened' }).end();
        }
      });
  });
};
