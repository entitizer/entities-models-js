'use strict';

const assert = require('assert');
const Entity = require('../lib/entity');

describe('Entity', () => {

	it('should throw an error on creating a model with data=undefined', () => {
		assert.throws(() => {
			Entity.create();
		});
	});

	it('should throw an error on creating a model with data=null', () => {
		assert.throws(() => {
			Entity.create(null);
		});
	});

});
