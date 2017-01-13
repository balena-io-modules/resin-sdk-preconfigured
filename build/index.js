(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "resin-sdk", "resin-settings-client"], factory);
    }
})(function (require, exports) {
    "use strict";
    var getSdk = require("resin-sdk");
    var settings = require("resin-settings-client");
    return getSdk({
        apiUrl: settings.get('apiUrl'),
        imageMakerUrl: settings.get('imageMakerUrl'),
        dataDirectory: settings.get('dataDirectory'),
        retries: 2
    });
});
//# sourceMappingURL=index.js.map