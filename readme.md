## MArked Govspeak Extension

** Super Alpha - probably not for production use! **

A set of extensions for marked.js that add support for govspeak markdown syntax.

Also contains a marked renderer that can add GDS classes on to headings and links.

### Usage

```
import {marked} from 'marked';
import govspeakExtension, {govukRenderer} from 'marked-govspeak-extension'
    
marked.use(govukRenderer)
marked.use(govspeakExtension)
```

Currently only supports 'call to action' and 'warning' syntax for govspeak.

N.B.  You will need to be using govuk-frontend and the Govspeak gem, or
otherwise be including those styles in your project in order for things to look
right.
