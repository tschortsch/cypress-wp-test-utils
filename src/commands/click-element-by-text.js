/**
 * Clicks an element by its containing text.
 *
 * @param {string} label  The text string of the button label.
 */
Cypress.Commands.add(
  'clickElementByText',
  (elementExpression, text, strict = false, index = 0) => {
    if (strict) {
      cy.xpath(`//${elementExpression}[text()="${text}"]`)
        .eq(index)
        .click({ force: true });
    } else {
      cy.xpath(`//${elementExpression}[contains(text(),"${text}")]`)
        .eq(index)
        .click({ force: true });
    }
  }
);
