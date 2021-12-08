/**
 * Checks if a toolbar option is active.
 *
 * @param {string} toolbarLabel Label of the toolbar option to check.
 * @param {string} buttonText Text of the button to check if it's active.
 * @param {number} [toolbarIndex] The index of the toolbar option if multiple options were found with the given label.
 * @param {number} [buttonIndex] The index of the button if multiple buttons were found with the given text.
 */
export const toolbarOptionIsActive = (
  toolbarLabel: string,
  buttonText: string,
  toolbarIndex = 0,
  buttonIndex = 0
): void => {
  const activeButtonSelector58 = `//button[contains(text(),"${buttonText}") and contains(@class,"is-active")]`;
  const activeButtonSelector = `//button/span[contains(text(),"${buttonText}") and contains(@class,"is-active")]`;
  cy.clickBlockToolbarButton(toolbarLabel, toolbarIndex);
  cy.xpath(`${activeButtonSelector58} | ${activeButtonSelector}`)
    .eq(buttonIndex)
    .should('exist');
  cy.clickBlockToolbarButton(toolbarLabel, toolbarIndex);
};
