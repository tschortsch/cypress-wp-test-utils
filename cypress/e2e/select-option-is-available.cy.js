/// <reference types="Cypress" />

context('selectOptionIsAvailable Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should check if select option is available', () => {
    cy.insertBlock('Buttons');
    cy.ensureSidebarOpened();
    cy.selectOptionIsAvailable('Default Style', 'fill');
  });
});
