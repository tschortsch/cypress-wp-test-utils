/// <reference types="cypress" />

export interface CypressWpTestUtilsEnv {
  username?: string;
  password?: string;
  wpVersion?: number;
}

export interface NewPostOptions {
  postType?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  showWelcomeGuide?: boolean;
}

declare global {
  interface Window {
    wp: any;
  }
}

declare global {
  namespace Cypress {
    interface Cypress {
      env(key: 'cypress-wp-test-utils'): CypressWpTestUtilsEnv | undefined;
    }

    interface Chainable<Subject> {
      /**
       * Activates a plugin.
       * @example cy.activatePlugin('my-plugin');
       */
      activatePlugin(slug: string): void;

      /**
       * Clicks a button in the toolbar of the currently selected block.
       * @example cy.clickBlockToolbarButton('Align');
       *
       * If there are multiple buttons with the same label you can define the index of the button which should be clicked.
       * @example cy.clickBlockToolbarButton('Align', 1);
       */
      clickBlockToolbarButton(label: string, index?: number): Chainable<JQuery>;

      /**
       * Clicks a button.
       * @example cy.clickButton('Click me');
       * @example cy.clickButton('Click me', 'ariaLabel');
       */
      clickButton(
        label: string,
        buttonLabelType?: 'ariaLabel' | 'content'
      ): Chainable<JQuery>;

      /**
       * Clicks an element by a given text.
       * @example cy.clickElementByText('label', 'My Label');
       */
      clickElementByText(
        elementType: string,
        text: string,
        strict?: boolean,
        index?: number
      ): Chainable<JQuery>;

      /**
       * Closes the welcome guide if displayed.
       * @example cy.closeWelcomeGuide();
       */
      closeWelcomeGuide(): void;

      /**
       * Creates new post.
       * @example cy.createNewPost();
       */
      createNewPost(createNewPostParams?: NewPostOptions): void;

      /**
       * Deactivates a plugin.
       * @example cy.deactivatePlugin('my-plugin');
       */
      deactivatePlugin(slug: string): void;

      /**
       * Ensures that the sidebar is opened (opens sidebar if closed).
       * @example cy.ensureSidebarOpened();
       */
      ensureSidebarOpened(): void;

      /**
       * Gets a checkbox element by label.
       * @example cy.getCheckboxByLabel('My Checkbox');
       */
      getCheckboxByLabel(label: string): Chainable<JQuery>;

      /**
       * Returns current post content as object.
       * @example cy.getCurrentPostContent();
       */
      getCurrentPostContent(): Chainable<unknown>;

      /**
       * Returns the content of the post being edited as string.
       * @example cy.getEditedPostContent();
       */
      getEditedPostContent(): Chainable<unknown>;

      /**
       * Gets an input element by label.
       * @example cy.getInputByLabel('My Input');
       */
      getInputByLabel(label: string): Chainable<JQuery>;

      /**
       * Gets a select element by label.
       * @example cy.getSelectByLabel('My Select');
       */
      getSelectByLabel(label: string): Chainable<JQuery>;

      /**
       * Gets a TextControl element by label.
       * @example cy.getTextControlByLabel('My TextControl');
       */
      getTextControlByLabel(label: string): Chainable<JQuery>;

      /**
       * Gets a toggle element by label.
       * @example cy.getToggleByLabel('My Toggle');
       */
      getToggleByLabel(label: string): Chainable<JQuery>;

      /**
       * Opens the inserter, searches for the given term, then selects the first
       * result that appears.
       * @example cy.insertBlock('Button');
       */
      insertBlock(searchTerm: string, blockLabel?: string): void;

      /**
       * Performs a login with specified username and password.
       * @example cy.loginUser('myuser', 'mypassword');
       */
      loginUser(username?: string, password?: string): void;

      /**
       * Opens the global block inserter.
       * @example cy.openGlobalBlockInserter();
       */
      openGlobalBlockInserter(): void;

      /**
       * Opens sidebar panel with given title (if closed).
       * @example cy.openSidebarPanelWithTitle('Settings');
       */
      openSidebarPanelWithTitle(title: string): void;

      /**
       * Search for block in the global inserter.
       * @example cy.searchForBlock('Button');
       */
      searchForBlock(searchTerm: string): void;

      /**
       * Selects a block by its name.
       * @example cy.selectBlockByName('core/paragraph');
       */
      selectBlockByName(name: string, index?: number): void;

      /**
       * Checks if a certain option in a select box is available.
       * @example cy.selectOptionIsAvailable('My Select', 'my-option');
       */
      selectOptionIsAvailable(selectLabel: string, optionValue: string): void;

      /**
       * Sets the editor content.
       * @example cy.setPostContent('New content');
       */
      setPostContent(content: string): void;

      /**
       * Sets the value of a TextControl element by its label.
       * @example cy.setTextControlValueByLabel('My TextControl', 'New Value');
       */
      setTextControlValueByLabel(label: string, value: string): void;

      /**
       * Checks if a toolbar option is active.
       * @example cy.toolbarOptionIsActive('Align', 'Align right');
       */
      toolbarOptionIsActive(
        toolbarLabel: string,
        buttonText: string,
        toolbarIndex?: number,
        buttonIndex?: number
      ): void;

      /**
       * Visits a given admin page.
       * @example cy.visitAdminPage('plugins.php');
       */
      visitAdminPage(adminPath: string, query?: string): Chainable<AUTWindow>;
    }
  }
}

/**
 * Registers WordPress test commands for cypress.
 */
export declare function registerWpTestCommands(): void;

/**
 * Runs a selector function on the given store and returns the result.
 */
export declare function wpDataSelect(
  store: string,
  selector: string,
  ...parameters
): Cypress.Chainable<unknown>;

/**
 * Returns all blocks which are currently in the editor.
 */
export declare function getAllBlocks(): Cypress.Chainable<unknown>;

/**
 * Returns a block in the editor by its name.
 */
export declare function getBlockByName(): Cypress.Chainable<unknown>;

/**
 * Selects a block in the editor by its client id.
 */
export declare function selectBlockByClientId(): Cypress.Chainable<void>;
