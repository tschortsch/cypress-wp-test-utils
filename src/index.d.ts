/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Activates a plugin.
     * @example cy.activatePlugin('my-plugin');
     */
    activatePlugin(slug: string): Chainable<void>

    /**
     * Clicks a button in the toolbar of the currently selected block.
     * @example cy.clickBlockToolbarButton('Align');
     *
     * If there are multiple buttons with the same label you can define the index of the button which should be clicked.
     * @example cy.clickBlockToolbarButton('Align', 1);
     */
    clickBlockToolbarButton(label: string, index?: number): Chainable<void>

    /**
     * Clicks a button.
     * @example cy.clickButton('Click me');
     * @example cy.clickButton('Click me', 'ariaLabel');
     */
    clickButton(label: string, buttonLabelType?: 'ariaLabel' | 'content'): Chainable<void>

    /**
     * Clicks an element by a given text.
     * @example cy.clickElementByText('label', 'My Label');
     */
    clickElementByText(elementType: string, text: string, strict?: boolean, index?: number): Chainable<void>

    /**
     * Closes the welcome guide if displayed.
     * @example cy.closeWelcomeGuide();
     */
    closeWelcomeGuide(): Chainable<void>

    /**
     * Creates new post.
     * @example cy.createNewPost();
     */
    createNewPost(createNewPostParams?: object): Chainable<void>

    /**
     * Deactivates a plugin.
     * @example cy.deactivatePlugin('my-plugin');
     */
    deactivatePlugin(slug: string): Chainable<void>

    /**
     * Ensures that the sidebar is opened (opens sidebar if closed).
     * @example cy.ensureSidebarOpened();
     */
    ensureSidebarOpened(): Chainable<void>

    /**
     * Gets a checkbox element by label.
     * @example cy.getCheckboxByLabel('My Checkbox');
     */
    getCheckboxByLabel(label: string): Chainable<Element>

    /**
     * Returns current post content as object.
     * @example cy.getCurrentPostContent();
     */
    getCurrentPostContent(): Chainable<void>

    /**
     * Returns the content of the post being edited as string.
     * @example cy.getEditedPostContent();
     */
    getEditedPostContent(): Chainable<void>

    /**
     * Gets an input element by label.
     * @example cy.getInputByLabel('My Input');
     */
    getInputByLabel(label: string): Chainable<Element>

    /**
     * Gets a select element by label.
     * @example cy.getSelectByLabel('My Select');
     */
    getSelectByLabel(label: string): Chainable<Element>

    /**
     * Gets a TextControl element by label.
     * @example cy.getTextControlByLabel('My TextControl');
     */
    getTextControlByLabel(label: string): Chainable<Element>

    /**
     * Gets a toggle element by label.
     * @example cy.getToggleByLabel('My Toggle');
     */
    getToggleByLabel(label: string): Chainable<Element>

    /**
     * Opens the inserter, searches for the given term, then selects the first
     * result that appears.
     * @example cy.insertBlock('Button');
     */
    insertBlock(searchTerm: string, blockLabel?: string): Chainable<void>

    /**
     * Performs a login with specified username and password.
     * @example cy.loginUser('myuser', 'mypassword');
     */
    loginUser(username?: string, password?: string): Chainable<void>

    /**
     * Opens the global block inserter.
     * @example cy.openGlobalBlockInserter();
     */
    openGlobalBlockInserter(): Chainable<void>

    /**
     * Opens sidebar panel with given title (if closed).
     * @example cy.openSidebarPanelWithTitle('Settings');
     */
    openSidebarPanelWithTitle(title: string): Chainable<void>

    /**
     * Search for block in the global inserter.
     * @example cy.searchForBlock('Button');
     */
    searchForBlock(searchTerm: string): Chainable<void>

    /**
     * Selects a block by its name.
     * @example cy.selectBlockByName('core/paragraph');
     */
    selectBlockByName(name: string, index?: number): Chainable<void>

    /**
     * Checks if a certain option in a select box is available.
     * @example cy.selectOptionIsAvailable('My Select', 'my-option');
     */
    selectOptionIsAvailable(selectLabel: string, optionValue: string): Chainable<void>

    /**
     * Sets the editor content.
     * @example cy.setPostContent('New content');
     */
    setPostContent(content: string): Chainable<void>

    /**
     * Sets the value of a TextControl element by its label.
     * @example cy.setTextControlValueByLabel('My TextControl', 'New Value');
     */
    setTextControlValueByLabel(label: string, value: string): Chainable<void>

    /**
     * Checks if a toolbar option is active.
     * @example cy.toolbarOptionIsActive('Align', 'Align right');
     */
    toolbarOptionIsActive(toolbarLabel: string, buttonText: string, toolbarIndex?: number, buttonIndex?: number): Chainable<void>

    /**
     * Visits a given admin page.
     * @example cy.visitAdminPage('plugins.php');
     */
    visitAdminPage(adminPath: string, query?: string): Chainable<void>
  }
}

export declare function registerWpTestCommands(): void;
