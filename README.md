Example showing inconsistent behaviour using indexedDB when running Cypress with `open` and `run`:

* `npm run cypress:run` will run Electron headed, but doesn't fail
* `npm run cypress:open` will also run with Electron, but fails with `indexedDB.database()` never resolving.
