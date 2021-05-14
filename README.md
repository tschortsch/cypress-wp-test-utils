# Cypress test utilities for WordPress

[![Build Status](https://github.com/tschortsch/cypress-wp-test-utils/workflows/lint-test-deploy/badge.svg?branch=master)](https://github.com/tschortsch/cypress-wp-test-utils/actions?query=workflow%3A%22lint-test-deploy%22+branch%3Amaster)

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

## Configuration

There are several options to configure the commands. These options can be defined in your cypress configuration file (normally `cypress.json`):

```json
{
  "env": {
    "cypress-wp-test-utils": {
      "username": "myuser",
      "password": "supersecurepassword"
    }
  }
}
```

* `username`: Username which is used as the default username in the `loginUser` command.
* `password`: Password which is used as the default password in the `loginUser` command.

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

### ensureSidebarOpened

Ensures that the sidebar is opened (opens sidebar if closed).

### getCheckboxByLabel

Gets a checkbox element by label.

#### Parameters

* `label` (`string`) Label of checkbox element.

### getCurrentPostContent

Returns current post content as object.
see: [https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPost](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getCurrentPost)

### getEditedPostContent

Returns the content of the post being edited as string.
* see: [https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getEditedPostContent](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#getEditedPostContent)

### getInputByLabel

Gets a input element by label.

#### Parameters

* `label` (`string`) Label of input element.

### getSelectByLabel

Gets a select element by label.

#### Parameters

* `label` (`string`) Label of select element.

### getTextControlByLabel

Gets a TextControl element by label.

#### Parameters

* `label` (`string`) Label of TextControl element.

### getToggleByLabel

Gets a toggle element by label.

#### Parameters

* `label` (`string`) Label of toggle element.

### insertBlock

Opens the inserter, searches for the given term, then selects the first result that appears.

#### Parameters

* `searchTerm` (`string`) The text to search the inserter for.
* `blockLabel?` (`string`) The label of the block to insert.

### loginUser

Performs a login with specified username and password.

#### Parameters

* `username?` (`string`) Username which should be used. (Default: `admin`)
* `password?` (`string`) Password which should be used. (Default: `password`)

### openGlobalBlockInserter

Opens the global block inserter.

### openSidebarPanelWithTitle

Opens sidebar panel with given title (if closed).

#### Parameters

* `title` (`string`) Title of sidebar panel to open.

### searchForBlock

Search for block in the global inserter.

#### Parameters

* `searchTerm` (`string`) The text to search the inserter for.

### selectBlockByName

Selects a block by its name.

#### Parameters

* `name` (`string`) Name of the block to select. (eg. `'core/paragraph'`)
* `index?` (`number`) The index of the block if multiple blocks were found with the given name.

### selectOptionIsAvailable

Checks if a certain option in a select box is available.

#### Parameters

* `selectLabel` (`string`) Label of the select box.
* `optionValue` (`string`) The value of the option to search for.

### setPostContent

Sets the editor content.

#### Parameters

* `content` (`string`) New editor content.

### setTextControlValueByLabel

Sets the value of a TextControl element by its label.

#### Parameters

* `label` (`string`) Label of the TextControl element.
* `value` (`string`) Value to set.

### toolbarOptionIsActive

Checks if a toolbar option is active.

#### Parameters

* `toolbarLabel` (`string`) Label of the toolbar option to check.
* `buttonText` (`string`) Text of the button to check if it's active.
* `toolbarIndex?` (`number`) The index of the toolbar option if multiple options were found with the given label.
* `buttonIndex?` (`number`) The index of the button if multiple buttons were found with the given text.

### visitAdminPage

Visits a given admin page.

#### Parameters

* `adminPath` (`string`) Path to admin page.
* `query?` (`string`) Query string which should be added to URL.

## Compatibility

* WordPress 5.7.x
* Node >=12
* Cypress >=5.x

Right now those commands are only compatible with WordPress 5.7.
The goal is to support further WordPress versions but since there are always a lot of changes in the editor between WordPress versions it's difficult to support all of them.

## cypress-xpath included

This package uses and includes the [cypress-xpath](https://www.npmjs.com/package/cypress-xpath) command.
If you're using it as well in your tests you don't need to include it again.
