export const clickButton = (label, buttonLabelType = 'content') => {
    if (buttonLabelType === 'ariaLabel') {
        return cy.get(`button[aria-label="${label}"]`).click({ force: true });
    }
    if (buttonLabelType === 'content') {
        return cy.xpath(`//button[contains(text(), '${label}')]`).click({
            force: true,
        });
    }
};
