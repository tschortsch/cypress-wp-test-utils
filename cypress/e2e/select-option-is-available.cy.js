/// <reference types="Cypress" />

context('selectOptionIsAvailable Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should check if select option is available', () => {
    cy.insertBlock('Archives');
    cy.ensureSidebarOpened();
    cy.selectOptionIsAvailable('Group by', 'weekly');
  });
});
