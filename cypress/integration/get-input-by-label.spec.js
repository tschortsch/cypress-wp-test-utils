/// <reference types="Cypress" />

import { config } from '../../dist';

context('getInputByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return input field by label element', () => {
    cy.insertBlock('Paragraph');
    cy.ensureSidebarOpened();
    cy.openSidebarPanelWithTitle('Advanced');
    cy.getInputByLabel('Additional CSS class(es)', 'element').should('exist');
  });

  // TODO test doesn't work in WP <5.9
  it.skip('should return input field by ariaLabel', () => {
    cy.insertBlock('Buttons');
    cy.selectBlockByName('core/buttons');
    cy.ensureSidebarOpened();
    cy.getInputByLabel('Block spacing').should('exist');
  });
});
