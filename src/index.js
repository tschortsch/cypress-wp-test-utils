import 'cypress-xpath'
import { register } from '@cypress/snapshot'

import './commands/login-user'
import './commands/visit-admin-page'
import './commands/close-welcome-guide'
import './commands/open-sidebar-panel'
import './commands/create-new-post'
import './commands/open-global-block-inserter'
import './commands/search-for-block'
import './commands/insert-block'
import './commands/post-content-matches-snapshot'

register();
