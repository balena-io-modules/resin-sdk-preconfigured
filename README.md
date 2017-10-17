Preconfigured Resin SDK
=========

[![Build Status](https://travis-ci.org/resin-io-modules/resin-sdk-preconfigured.svg?branch=master)](https://travis-ci.org/resin-io-modules/resin-sdk-preconfigured)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/resin-io/chat)

## DEPRECATED

This module is deprecated. To share a SDK throughout an application, or build a module that uses the SDK, you should depend on the SDK directly, and use [`resinSdk.setSharedOptions`](https://github.com/resin-io/resin-sdk/blob/master/DOCUMENTATION.md#resin.setSharedOptions) and [`resinSdk.fromSharedOptions`](https://github.com/resin-io/resin-sdk/blob/master/DOCUMENTATION.md#resin.fromSharedOptions):

```js
// In your top-level app code, before modules are loaded:
require('resin-sdk').setSharedOptions({
  // Whatever options you'd like, see https://github.com/resin-io/resin-sdk#documentation
});

// In your modules, to get an SDK instance using app-wide settings:
const resin = require('resin-sdk').fromSharedOptions();
```

---

Role
----

The intention of this module is to provide a preconfigured Resin-SDK singleton instance. The configuration used in this module is not changeable, and is set to appropriate defaults for use in the [Resin-CLI](https://github.com/resin-io/resin-sdk), although these values may be relevant elsewhere too.

**THIS MODULE IS LOW LEVEL AND IS NOT MEANT TO BE USED BY END USERS DIRECTLY**.

Unless you know what you're doing, use the [Resin SDK](https://github.com/resin-io/resin-sdk) instead.

Installation
------------

Install `resin-sdk-preconfigured` by running:

```sh
$ npm install --save resin-sdk-preconfigured
```

Documentation
-------------

The exported value of this module is a ready to use Resin-SDK instance. See the Resin-SDK documentation for more information: https://github.com/resin-io/resin-sdk/blob/master/DOCUMENTATION.

Support
-------

If you're having any problem, please [raise an issue](https://github.com/resin-io-modules/resin-sdk-preconfigured/issues/new) on GitHub and the Resin.io team will be happy to help.

Tests
-----

Run the test suite by doing:

```sh
$ npm test
```

Contribute
----------

- Issue Tracker: [github.com/resin-io-modules/resin-sdk-preconfigured/issues](https://github.com/resin-io-modules/resin-sdk-preconfigured/issues)
- Source Code: [github.com/resin-io-modules/resin-sdk-preconfigured](https://github.com/resin-io-modules/resin-sdk-preconfigured)

Before submitting a PR, please make sure that you include tests, and that `npm test` builds and runs the tests without any warnings.

License
-------

The project is licensed under the Apache 2.0 license.
