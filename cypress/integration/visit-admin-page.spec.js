/// <reference types="Cypress" />

context('visitAdminPage Command', () => {
  beforeEach(() => {
    cy.loginUser();
  });

  it('should visit admin page', () => {
    cy.visitAdminPage('edit.php');
    cy.url().should('include', 'wp-admin/edit.php');
    cy.visitAdminPage('plugins.php');
    cy.url().should('include', 'wp-admin/plugins.php');
    cy.visitAdminPage('options-general.php');
    cy.url().should('include', 'wp-admin/options-general.php');
  });

  it('should visit admin page with query', () => {
    cy.visitAdminPage('edit-tags.php');
    cy.url().should('include', 'wp-admin/edit-tags.php');
    cy.visitAdminPage('edit-tags.php', 'taxonomy=category');
    cy.url().should('include', 'wp-admin/edit-tags.php?taxonomy=category');
    cy.visitAdminPage('post-new.php', 'post_type=page&post_title=newPage');
    cy.url().should(
      'include',
      'wp-admin/post-new.php?post_type=page&post_title=newPage'
    );
    cy.get('.editor-post-title__input').contains('newPage');
  });
});
