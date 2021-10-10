module.exports = {
  "__version": "8.5.0",
  "Actions": {
    "example test": {
      "1": "<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->"
    }
  },
  "clickBlockToolbarButton Command": {
    "should click on block toolbar button by aria-label": {
      "1": "<!-- wp:heading {\"level\":3} -->\n<h3></h3>\n<!-- /wp:heading -->"
    }
  },
  "clickButton Command": {
    "should click on button by aria-label": {
      "1": ""
    },
    "should click on button by content": {
      "1": "<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->"
    }
  },
  "selectOptionIsAvailable Command": {
    "should set given post content": {
      "1": "<!-- wp:paragraph -->\n<p>content</p>\n<!-- /wp:paragraph -->"
    }
  },
  "setTextControlValueByLabel Command": {
    "should set text control value by label": {
      "1": "<!-- wp:paragraph {\"className\":\"my rel\"} -->\n<p class=\"my rel\"></p>\n<!-- /wp:paragraph -->"
    }
  },
  "getEditedPostContent Command": {
    "should return edited post content": {
      "1": "<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->"
    }
  }
}
