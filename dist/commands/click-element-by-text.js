export const clickElementByText = (elementType, text, strict = false, index = 0) => {
    if (strict) {
        return cy
            .xpath(`//${elementType}[text()="${text}"]`)
            .eq(index)
            .click({ force: true });
    }
    else {
        return cy
            .xpath(`//${elementType}[contains(text(),"${text}")]`)
            .eq(index)
            .click({ force: true });
    }
};
