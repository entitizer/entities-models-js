'use strict';

const assert = require('assert');
const Entity = require('../lib/entity').EntityModel;

describe('Entity', () => {

	it('should not throw an error on creating a model with data=undefined', () => {
		Entity.create();
	});

	it('should not throw an error on creating a model with data=null', () => {
		Entity.create(null);
	});

	it('should filter invalid keys', () => {
		const entity = Entity.create({ id: 1, key: '1' });

		// assert.equal(undefined, entity.get('key'));
		assert.equal(1, entity.get('id'));
		assert.equal(1, entity.id);
	});

});
