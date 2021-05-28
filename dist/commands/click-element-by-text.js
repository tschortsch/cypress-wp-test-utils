/**
 * Clicks an element by a given text.
 *
 * @param {string} elementType The element type (eg. button, input).
 * @param {string} text The text of the element.
 * @param {boolean} [strict] If set to true the given text has to match exactly the text of the element.
 * @param {number} [index] The index of the element if multiple elements were found with the given label.
 */
export const clickElementByText = (elementType, text, strict = false, index = 0) => {
    if (strict) {
        cy.xpath(`//${elementType}[text()="${text}"]`)
            .eq(index)
            .click({ force: true });
    }
    else {
        cy.xpath(`//${elementType}[contains(text(),"${text}")]`)
            .eq(index)
            .click({ force: true });
    }
};
