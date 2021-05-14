# Cypress test utilities for WordPress

Collection of [cypress](https://www.cypress.io/) commands to test your WordPress page. 
Inspired by the [`@wordpress/e2e-test-utils` package](https://www.npmjs.com/package/@wordpress/e2e-test-utils) which does the same for Puppeteer.

## Installation

1. Install npm dependency

   ```shell
   # NPM
   npm install cypress-wp-test-utils --save-dev
    
   # Yarn
   yarn add cypress-wp-test-utils --dev
   ```

1. Register commands in your cypress project (normally in `cypress/support/index.js`)

   ```javascript
   import { registerWpTestCommands } from 'cypress-wp-test-utils';

   registerWpTestCommands();
   ```

1. Use the commands in your tests!

## List of available commands

### activatePlugin

Activates a plugin.

#### Parameters

* `slug` (`string`) Slug of the plugin which should be activated.

### clickBlockToolbarButton

Clicks a button in the toolbar of the currently selected block.

#### Parameters

* `label` (`string`) The text string of the button label.
* `index?` (`number`) The index of the button if multiple buttons were found with the given label. (Default: `0`)

### clickButton

Clicks a button.

#### Parameters

* `label` (`string`) The text string of the button label.
* `buttonLabelType?` (`'ariaLabel' | 'content'`) The type of button label: 'ariaLabel' or 'content'. (Default: `'content'`)

### clickElementByText

Clicks an element by a given text.

#### Parameters

* `elementType` (`string`) The element type (eg. `'button'`, `'input'`).
* `text` (`string`) The text of the element.
* `strict?` (`boolean`) If set to true the given text has to match exactly the text of the element (Default: `false`).
* `index?` (`number`) The index of the element if multiple elements were found with the given label. (Default: `0`)

### closeWelcomeGuide

Closes the welcome guide if displayed.

### createNewPost

Creates new post.

#### Parameters

* `object` (`object`) Object to create new post, along with tips enabling option.
* `object.postType?` (`string`) Post type of the new post.
* `object.title?` (`string`) Title of the new post.
* `object.content?` (`string`) Content of the new post.
* `object.excerpt?` (`string`) Excerpt of the new post.
* `object.showWelcomeGuide?` (`boolean`) Whether to show the welcome guide or not. (Default: `false`)

### deactivatePlugin

Deactivates a plugin.

#### Parameters

* `slug` (`string`) Slug of the plugin which should be deactivated.

### Further commands

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

* WordPress 5.7.x
* Node >=12
* Cypress >=4.x

Right now those commands are only compatible with WordPress 5.7.
The goal is to support further WordPress versions but since there are always a lot of changes in the editor between WordPress versions it's difficult to support all of them.

## cypress-xpath included

This package uses and includes the [cypress-xpath](https://www.npmjs.com/package/cypress-xpath) command.
If you're using it as well in your tests you don't need to include it again.
