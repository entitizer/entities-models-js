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

	it('should filter invalid keys', () => {
		const entity = Entity.create({ id: 1, key: '1' });

		assert.equal(undefined, entity.get('key'));
		assert.equal(1, entity.get('id'));
	});

});
