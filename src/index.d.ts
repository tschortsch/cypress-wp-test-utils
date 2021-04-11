/// <reference types="cypress" />

interface CreateNewPostParams {
  postType?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  showWelcomeGuide?: boolean;
}

type BlockToolbarButtonType = 'ariaLabel' | 'content';

declare namespace Cypress {
  interface Chainable<Subject> {
    activatePlugin(slug: string): Chainable<void>
    clickBlockToolbarButton(label: string, index?: number): Chainable<void>
    clickButton(label: string, type?: BlockToolbarButtonType): Chainable<void>
    clickElementByText(elementType: string, text: string, strict?: boolean, index?: number): Chainable<void>
    closeWelcomeGuide(): Chainable<void>
    createNewPost(createNewPostParams?: CreateNewPostParams): Chainable<void>
    deactivatePlugin(slug: string): Chainable<void>
    ensureSidebarOpened(): Chainable<void>
    getCheckboxByLabel(label: string): Chainable<Element>
    getCurrentPostContent(): Chainable<void>
    getEditedPostContent(): Chainable<void>
    getInputByLabel(label: string): Chainable<Element>
    getSelectByLabel(label: string): Chainable<Element>
    getTextControlByLabel(label: string): Chainable<Element>
    getToggleByLabel(label: string): Chainable<Element>
    insertBlock(searchTerm: string, blockLabel?: string): Chainable<void>
    loginUser(username?: string, password?: string): Chainable<void>
    openGlobalBlockInserter(): Chainable<void>
    openSidebarPanelWithTitle(title: string): Chainable<void>
    searchForBlock(searchTerm: string): Chainable<void>
    selectBlockByName(name: string, index?: number): Chainable<void>
    selectOptionIsAvailable(selectLabel: string, optionValue: string): Chainable<void>
    setPostContent(content: string): Chainable<void>
    setTextControlValueByLabel(label: string, value: string): Chainable<void>
    toolbarOptionIsActive(toolbarLabel: string, buttonText: string, toolbarIndex?: number, buttonIndex?: number): Chainable<void>
    visitAdminPage(adminPath: string, query?: string): Chainable<void>
  }
}
