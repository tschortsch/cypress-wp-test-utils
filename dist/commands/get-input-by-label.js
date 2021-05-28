export const getInputByLabel = (label) => {
    return cy.get(`input[aria-label="${label}"]`);
};
