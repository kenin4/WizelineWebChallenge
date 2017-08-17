'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');

var UrlSchema = new Schema({
	_id: {
    type: String,
    'default': shortid.generate
	},
	longUrl : {
		type : String,
		required: [true,'This field cannot be empty']
	},
	createdDate:{
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Url', UrlSchema);