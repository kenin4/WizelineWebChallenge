'use strict';

var mongoose = require('mongoose'),
	Url = mongoose.model('Url');

exports.listAllUrls = function (req, res) {
	Url.find({}, function(err, url){
		if(err)
			res.send(err);
		res.json(url);
	});
};

exports.createUrl = function (req, res) {
	var newUrl = new Url(req.body);

	newUrl.save(function (err, url) {
		if (err) 
			res.send(err);
		res.json(url);
	});
};

exports.getUrl = function (req, res) {
	Url.findById(req.params.urlId, function (err, url) {
		if (err) 
			res.send(err);
		res.writeHead(302, {
		  'Location': url.longUrl
		});
		res.end();
	})
} 

exports.updateUrl = function (req, res) {
	Url.findOneAndUpdate({_id : req.params.urlId}, req.body, {new : true}, function (err, url) {
	if(err)
		res.send(err);
	res.json(url);	
	});
}

exports.removeUrl = function (req, res) {
	Url.remove({_id : req.params.urlId}, function (err, url) {
		if (err) 
			res.send(err);
		res.json({message : 'Url has been correctly deleted'});
	})
}