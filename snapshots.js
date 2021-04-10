module.exports = {
  "__version": "6.8.0",
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
      "1": "<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link\" rel=\"my rel\"></a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->"
    }
  },
  "getCurrentPostContent Command": {
    "should return current post content": {
      "1": {
        "id": 242,
        "date": "2021-04-10T17:58:15",
        "date_gmt": "2021-04-10T17:58:15",
        "guid": "http://localhost:8889/?p=242",
        "modified": "2021-04-10T17:58:15",
        "modified_gmt": "2021-04-10T17:58:15",
        "password": "",
        "slug": "",
        "status": "auto-draft",
        "type": "post",
        "link": "http://localhost:8889/?p=242",
        "title": "",
        "content": "",
        "excerpt": "",
        "author": 1,
        "featured_media": 0,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [],
        "tags": [],
        "permalink_template": "http://localhost:8889/?p=242",
        "generated_slug": "auto-draft",
        "_links": {
          "self": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "collection": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts"
            }
          ],
          "about": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/types/post"
            }
          ],
          "author": [
            {
              "embeddable": true,
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/users/1"
            }
          ],
          "replies": [
            {
              "embeddable": true,
              "href": "http://localhost:8889/index.php?rest_route=%2Fwp%2Fv2%2Fcomments&post=242"
            }
          ],
          "version-history": [
            {
              "count": 0,
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242/revisions"
            }
          ],
          "wp:attachment": [
            {
              "href": "http://localhost:8889/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=242"
            }
          ],
          "wp:term": [
            {
              "taxonomy": "category",
              "embeddable": true,
              "href": "http://localhost:8889/index.php?rest_route=%2Fwp%2Fv2%2Fcategories&post=242"
            },
            {
              "taxonomy": "post_tag",
              "embeddable": true,
              "href": "http://localhost:8889/index.php?rest_route=%2Fwp%2Fv2%2Ftags&post=242"
            }
          ],
          "wp:action-publish": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-unfiltered-html": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-sticky": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-assign-author": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-create-categories": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-assign-categories": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-create-tags": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "wp:action-assign-tags": [
            {
              "href": "http://localhost:8889/index.php?rest_route=/wp/v2/posts/242"
            }
          ],
          "curies": [
            {
              "name": "wp",
              "href": "https://api.w.org/{rel}",
              "templated": true
            }
          ]
        }
      }
    }
  },
  "getEditedPostContent Command": {
    "should return edited post content": {
      "1": "<!-- wp:heading -->\n<h2></h2>\n<!-- /wp:heading -->"
    }
  }
}
