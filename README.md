# Cypress test utilities for WordPress

Collection of [cypress](https://www.cypress.io/) commands to test WordPress. 
Inspired by the [`@wordpress/e2e-test-utils` package](https://www.npmjs.com/package/@wordpress/e2e-test-utils).

## Installation

1. Install NPM dependency

   ```shell
   # NPM
   npm install cypress-wp-test-utils --save-dev
    
   # Yarn
   yarn add cypress-wp-test-utils --dev
   ```

1. Register commands in your cypress project (`cypress/support/index.js`)

   ```javascript
   import { registerWpTestCommands } from 'cypress-wp-test-utils';

   registerWpTestCommands();
   ```

1. Use commands in your tests!

## cypress-xpath included

This package uses and includes the [cypress-xpath](https://www.npmjs.com/package/cypress-xpath) command.
If you're using it as well in your tests you don't need to include it again.

## List of available commands

* activatePlugin(slug: string)
* clickBlockToolbarButton(label: string, index?: number)
* clickButton(label: string, type?: BlockToolbarButtonType)
* clickElementByText(elementType: string, text: string, strict?: boolean, index?: number)
* closeWelcomeGuide()
* createNewPost(createNewPostParams?: CreateNewPostParams)
* deactivatePlugin(slug: string)
* ensureSidebarOpened()
* getCheckboxByLabel(label: string)
* getCurrentPostContent()
* getEditedPostContent()
* getInputByLabel(label: string)
* getSelectByLabel(label: string)
* getTextControlByLabel(label: string)
* getToggleByLabel(label: string)
* insertBlock(searchTerm: string, blockLabel?: string)
* loginUser(username?: string, password?: string)
* openGlobalBlockInserter()
* openSidebarPanelWithTitle(title: string)
* searchForBlock(searchTerm: string)
* selectBlockByName(name: string, index?: number)
* selectOptionIsAvailable(selectLabel: string, optionValue: string)
* setPostContent(content: string)
* setTextControlValueByLabel(label: string, value: string)
* toolbarOptionIsActive(toolbarLabel: string, buttonText: string, toolbarIndex?: number, buttonIndex?: number)
* visitAdminPage(adminPath: string, query?: string)

## Compatibility

* Compatible with WordPress 5.7
