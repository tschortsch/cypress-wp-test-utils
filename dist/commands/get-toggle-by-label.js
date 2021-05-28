export const getToggleByLabel = (label) => {
    return cy.xpath(`//label[contains(@class,"components-toggle-control__label")][contains(text(),"${label}")]/preceding-sibling::span[contains(@class,"components-form-toggle")]/input`);
};
