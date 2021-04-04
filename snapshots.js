module.exports = {
  __version: '6.8.0',
  Actions: {
    'example test': {
      1: '<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->',
    },
  },
  'clickBlockToolbarButton Command': {
    'should click on block toolbar button by aria-label': {
      1: '<!-- wp:heading {"level":3} -->\n<h3></h3>\n<!-- /wp:heading -->',
    },
  },
  'clickButton Command': {
    'should click on button by aria-label': {
      1: '',
    },
    'should click on button by content': {
      1: '<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->',
    },
  },
  'selectOptionIsAvailable Command': {
    'should set given post content': {
      1: '<!-- wp:paragraph -->\n<p>content</p>\n<!-- /wp:paragraph -->',
    },
  },
  'postContentMatchesSnapshot Command': {
    'should match against snapshot': {
      1: '',
    },
  },
  'setTextControlValueByLabel Command': {
    'should set text control value by label': {
      1: '<!-- wp:buttons -->\n<div class="wp-block-buttons"><!-- wp:button -->\n<div class="wp-block-button"><a class="wp-block-button__link" rel="my rel"></a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->',
    },
  },
};
