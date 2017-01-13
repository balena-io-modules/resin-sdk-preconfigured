import getSdk = require('resin-sdk');
import settings = require('resin-settings-client');

export = getSdk({
	apiUrl: settings.get('apiUrl'),
	imageMakerUrl: settings.get('imageMakerUrl'),
	dataDirectory: settings.get('dataDirectory'),
	retries: 2
});
