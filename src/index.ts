import '@cypress/xpath';

import { activatePlugin } from './commands/activate-plugin';
import { clickBlockToolbarButton } from './commands/click-block-toolbar-button';
import { clickButton } from './commands/click-button';
import { clickElementByText } from './commands/click-element-by-text';
import { closeWelcomeGuide } from './commands/close-welcome-guide';
import { createNewPost } from './commands/create-new-post';
import { deactivatePlugin } from './commands/deactivate-plugin';
import { ensureSidebarOpened } from './commands/ensure-sidebar-opened';
import { getCheckboxByLabel } from './commands/get-checkbox-by-label';
import { getCurrentPostContent } from './commands/get-current-post-content';
import { getEditedPostContent } from './commands/get-edited-post-content';
import { getInputByLabel } from './commands/get-input-by-label';
import { getSelectByLabel } from './commands/get-select-by-label';
import { getTextControlByLabel } from './commands/get-text-control-by-label';
import { getToggleByLabel } from './commands/get-toggle-by-label';
import { insertBlock } from './commands/insert-block';
import { loginUser } from './commands/login-user';
import { openGlobalBlockInserter } from './commands/open-global-block-inserter';
import { openSidebarPanelWithTitle } from './commands/open-sidebar-panel-with-title';
import { searchForBlock } from './commands/search-for-block';
import { selectBlockByName } from './commands/select-block-by-name';
import { selectOptionIsAvailable } from './commands/select-option-is-available';
import { setPostContent } from './commands/set-post-content';
import { setTextControlValueByLabel } from './commands/set-text-control-value-by-label';
import { toolbarOptionIsActive } from './commands/toolbar-option-is-active';
import { visitAdminPage } from './commands/visit-admin-page';

export * from './shared/config';
export * from './shared/helper';

export const registerWpTestCommands = (): void => {
  Cypress.Commands.add('activatePlugin', activatePlugin);
  Cypress.Commands.add('clickBlockToolbarButton', clickBlockToolbarButton);
  Cypress.Commands.add('clickButton', clickButton);
  Cypress.Commands.add('clickElementByText', clickElementByText);
  Cypress.Commands.add('closeWelcomeGuide', closeWelcomeGuide);
  Cypress.Commands.add('createNewPost', createNewPost);
  Cypress.Commands.add('deactivatePlugin', deactivatePlugin);
  Cypress.Commands.add('ensureSidebarOpened', ensureSidebarOpened);
  Cypress.Commands.add('getCheckboxByLabel', getCheckboxByLabel);
  Cypress.Commands.add('getCurrentPostContent', getCurrentPostContent);
  Cypress.Commands.add('getEditedPostContent', getEditedPostContent);
  Cypress.Commands.add('getInputByLabel', getInputByLabel);
  Cypress.Commands.add('getSelectByLabel', getSelectByLabel);
  Cypress.Commands.add('getTextControlByLabel', getTextControlByLabel);
  Cypress.Commands.add('getToggleByLabel', getToggleByLabel);
  Cypress.Commands.add('insertBlock', insertBlock);
  Cypress.Commands.add('loginUser', loginUser);
  Cypress.Commands.add('openGlobalBlockInserter', openGlobalBlockInserter);
  Cypress.Commands.add('openSidebarPanelWithTitle', openSidebarPanelWithTitle);
  Cypress.Commands.add('searchForBlock', searchForBlock);
  Cypress.Commands.add('selectBlockByName', selectBlockByName);
  Cypress.Commands.add('selectOptionIsAvailable', selectOptionIsAvailable);
  Cypress.Commands.add('setPostContent', setPostContent);
  Cypress.Commands.add(
    'setTextControlValueByLabel',
    setTextControlValueByLabel
  );
  Cypress.Commands.add('toolbarOptionIsActive', toolbarOptionIsActive);
  Cypress.Commands.add('visitAdminPage', visitAdminPage);
};
