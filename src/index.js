require('cypress-xpath')
require('@cypress/snapshot').register()

import './commands/loginUser'
import './commands/visit-admin-page'
import './commands/close-welcome-guide'
import './commands/create-new-post'
import './commands/open-global-block-inserter'
import './commands/search-for-block'
import './commands/insert-block'
import './commands/post-content-matches-snapshot'
