export const getEditedPostContent = () => {
    return cy.window().then((window) => {
        return window.wp.data.select('core/editor').getEditedPostContent();
    });
};
