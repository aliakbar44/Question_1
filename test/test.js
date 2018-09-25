var assert = require('assert');

var api = require('../question1.js');

describe('api', function() {


	it('Should return true for correct XML file parameter', function() {
		api.fileName = 'test.xml';
		api.modifyXMLData(function(err, result) {
				assert.equal(api.result,'true');
		});
	});

	it('Should return false the for incorrect file parameter', function() {
		api.fileName = 'no_file.nofile';
		api.result ='';
		api.modifyXMLData(function(err, result) {
				assert.equal(api.result,'false');
		});
	}); 
});
