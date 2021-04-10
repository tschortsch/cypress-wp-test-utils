/// <reference types="Cypress" />

context('createNewPost Command', () => {
  beforeEach(() => {
    cy.loginUser();
  });

  it('should create new post', () => {
    cy.createNewPost();
    cy.get('.editor-post-title__input').should('be.empty');
  });

  it('should create new post with options', () => {
    const title = 'new post';
    const content = 'this is the content';
    const excerpt = 'this is the excerpt';

    cy.createNewPost({
      title,
      content,
      excerpt,
    });
    cy.get('.editor-post-title__input').contains(title);
    cy.get('[data-type="core/freeform"]')
      .should('exist')
      .within(() => {
        cy.get('.wp-block-freeform').contains(content);
      });
    cy.openSidebarPanelWithTitle('Excerpt');
    cy.get('.editor-post-excerpt .components-textarea-control__input').contains(
      excerpt
    );
  });

  it('should create new page with postType option', () => {
    cy.createNewPost({
      postType: 'page',
    });
    cy.get('#post_type').should('have.value', 'page');
  });

  it('should leave welcome guide option with option', () => {
    cy.createNewPost({
      showWelcomeGuide: true,
    });
    cy.get('.edit-post-welcome-guide').should('exist');
  });
});
