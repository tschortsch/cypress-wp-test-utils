/**
 * Clicks a button.
 *
 * @param {string} label The text string of the button label.
 * @param {'ariaLabel' | 'content'} [buttonLabelType] The type of button label: 'ariaLabel' or 'content'.
 */
export const clickButton = (
  label: string,
  buttonLabelType: 'ariaLabel' | 'content' = 'content'
): void => {
  if (buttonLabelType === 'ariaLabel') {
    cy.get(`button[aria-label="${label}"]`).click({ force: true });
  }

  if (buttonLabelType === 'content') {
    cy.xpath(`//button[contains(text(), '${label}')]`).click({
      force: true,
    });
  }
};
