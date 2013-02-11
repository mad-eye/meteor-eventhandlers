This is a test project to test changes to multiple event handlers in meteor.

In the current version of meteor, if you assign two identical handlers to
`Template.myTemplate.events`, they will overwrite each other.  For example,

```
Template.myTemplate.events ->
    'click #myButton': (event) ->
        console.log "Event 1"

Template.myTemplate.events ->
    'click #myButton': (event) ->
        console.log "Event 2"
```

will result in only "Event 2" being logged on the click event.

This project sets up those tests via meteor-mocha-web to test that
the changes to meteor both solve the issue, and don't break event handling.

To run, use this command:
```
METEOR_MOCHA_TEST_DIR=client/tests mrt
```




