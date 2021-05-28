export const getCurrentPostContent = () => {
    return cy.window().then((window) => {
        return window.wp.data.select('core/editor').getCurrentPost();
    });
};
