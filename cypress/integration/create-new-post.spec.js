/// <reference types="Cypress" />

context('createNewPost Command', () => {
  beforeEach(() => {
    cy.loginUser();
  });

  it('should create new post', () => {
    const titleSelector58 =
      '//textarea[contains(@class,"editor-post-title__input")]';
    const titleSelector =
      '//h1[contains(@class,"editor-post-title__input")]//span[@data-rich-text-placeholder="Add title"]';

    cy.createNewPost();
    cy.xpath(`${titleSelector58} | ${titleSelector}`).should('be.empty');
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
