export const getInputByLabel = (label, labelType = 'ariaLabel') => {
    if (labelType === 'ariaLabel') {
        return cy.get(`input[aria-label="${label}"]`);
    }
    return cy.xpath(`//input/preceding-sibling::label[contains(text(),"${label}")]`);
};
