export const clickBlockToolbarButton = (label, index = 0) => {
    return cy
        .get(`.block-editor-block-toolbar button[aria-label="${label}"]`)
        .eq(index)
        .click({ force: true });
};
