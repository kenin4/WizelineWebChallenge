'use strict';
module.exports = function (app) {
	
	var shortUrl = require('../controllers/urlController');

	//Rutas

	app.route('/')
		.get(shortUrl.listAllUrls)
		.post(shortUrl.createUrl);

	app.route('/:urlId')
		.get(shortUrl.getUrl)
		.put(shortUrl.updateUrl)
		.delete(shortUrl.removeUrl);	
};