### Just execute:

```
$ npm i
$ node index.js
```

This will create MongoDB database with name Boleron (can be changed in cfg.json), it will populate it with 10k randomly generated documents and 50 documents that contain the string 'Ivan' (for testing purposes) and once done, it will display those documents that contain Ivan ordered by timestamp desc.