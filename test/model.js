'use strict';

const assert = require('assert');
const Model = require('../lib/model');

describe('Model', () => {

	it('should throw an error on creating a model with data=undefined', () => {
		assert.throws(() => {
			new Model();
		});
	});

	it('should throw an error on creating a model with data=null', () => {
		assert.throws(() => {
			new Model(null);
		});
	});

});
