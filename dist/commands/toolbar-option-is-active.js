/**
 * Checks if a toolbar option is active.
 *
 * @param {string} toolbarLabel Label of the toolbar option to check.
 * @param {string} buttonText Text of the button to check if it's active.
 * @param {number} [toolbarIndex] The index of the toolbar option if multiple options were found with the given label.
 * @param {number} [buttonIndex] The index of the button if multiple buttons were found with the given text.
 */
export const toolbarOptionIsActive = (toolbarLabel, buttonText, toolbarIndex = 0, buttonIndex = 0) => {
    const activeButtonSelector = `//button[contains(text(),"${buttonText}") and contains(@class,"is-active")]`;
    const activeButtonWithSpanSelector = `//button[contains(@class,"is-active")]/span[contains(text(),"${buttonText}")]`;
    cy.clickBlockToolbarButton(toolbarLabel, toolbarIndex);
    cy.xpath(`${activeButtonSelector} | ${activeButtonWithSpanSelector}`)
        .eq(buttonIndex)
        .should('exist');
    cy.clickBlockToolbarButton(toolbarLabel, toolbarIndex);
};
