/**
 * Closes the welcome guide if displayed.
 */
export const closeWelcomeGuide = (): void => {
  cy.window().then((window) => {
    const isWelcomeGuideActive = window.wp.data
      .select('core/edit-post')
      .isFeatureActive('welcomeGuide');

    if (isWelcomeGuideActive) {
      window.wp.data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
      cy.reload();
    }
  });
};
