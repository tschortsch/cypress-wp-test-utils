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
		clickBlockToolbarButton(label: string): Chainable<void>
		clickElementByText(elementExpression: string, text: string, strict?: boolean): Chainable<void>
		clickButton(label: string, type?: BlockToolbarButtonType): Chainable<void>
		closeWelcomeGuide(): Chainable<void>
		createNewPost(createNewPostParams?: CreateNewPostParams): Chainable<void>
		insertBlock(searchTerm: string, blockLabel?: string, panelName?: string): Chainable<void>
		loginUser(username?: string, password?: string): Chainable<void>
		openGlobalBlockInserter(): Chainable<void>
		openSidebarPanel(title: string): Chainable<void>
		openSidebarPanelWithTitle(title: string): Chainable<void>
		postContentMatchesSnapshot(): Chainable<void>
		searchForBlock(searchTerm: string): Chainable<void>
		selectBlockByName(name: string, index?: number): Chainable<void>
		visitAdminPage(adminPath: string, query?: string): Chainable<void>
		ensureSidebarOpened(): Chainable<void>
		setPostContent(content: string): Chainable<void>
		toolbarOptionIsActive(toolbarLabel: string, buttonText: string): Chainable<void>
		getInputByLabel(label: string): Chainable<Element>
		getCheckboxByLabel(label: string): Chainable<Element>
		getSelectByLabel(label: string): Chainable<Element>
		getTextControlByLabel(label: string): Chainable<Element>
		getToggleByLabel(label: string): Chainable<Element>
		activatePlugin(slug: string): Chainable<void>
		deactivatePlugin(slug: string): Chainable<void>
		selectOptionIsAvailable(selectLabel: string, optionValue: string): Chainable<void>
		setTextControlValueByLabel(label: string, value: string): Chainable<void>

		// project commands
		insertRowBlock(): Chainable<void>
		selectRowBlock( index?: number ): Chainable<void>
		rowTemplateIsSelected( label: string ): Chainable<void>
		selectColumnBlock( rowIndex?: number, columnIndex?: number ): Chainable<void>
		insertButtonBlock(): Chainable<void>
		selectButtonBlock( index?: number ): Chainable<void>
		insertContainerBlock(): Chainable<void>
		selectContainerBlock( index?: number ): Chainable<void>

	}
}
