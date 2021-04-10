export const toolbarOptionIsActive = (
  toolbarLabel,
  buttonText,
  toolbarIndex = 0,
  buttonIndex = 0
) => {
  cy.clickBlockToolbarButton(toolbarLabel, toolbarIndex);
  cy.xpath(
    `//button[contains(text(),"${buttonText}") and contains(@class,"is-active")]`
  )
    .eq(buttonIndex)
    .should('exist');
  cy.clickBlockToolbarButton(toolbarLabel, toolbarIndex);
};
