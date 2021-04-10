export const getInputByLabel = (label) => {
  cy.get(`input[aria-label="${label}"]`);
};
