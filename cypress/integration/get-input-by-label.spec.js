/// <reference types="Cypress" />

import { config } from '../../dist';

context('getInputByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return input field by label', () => {
    cy.insertBlock('Paragraph');
    cy.ensureSidebarOpened();
    if (config.wpVersion >= 5.9) {
      cy.clickButton('Set custom size', 'ariaLabel');
    }
    cy.getInputByLabel('Custom').should('exist');
  });
});
