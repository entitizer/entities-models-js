'use strict';

const assert = require('assert');
const Model = require('../lib/model').Model;

describe('Model', () => {

	it('should not throw an error on creating a model with data=undefined', () => {
		new Model();
	});

	it('should throw an error on creating a model with data=true', () => {
		assert.throws(() => {
			new Model(true);
		});
	});

	it('should create a Model with fields and filter toJSON result', () => {
		const m = new Model({ id: 1, name: 'My name' });
		assert.equal(1, m.get('id'));
		assert.equal('My name', m.get('name'));

		const jm = m.toJSON(['id']);

		assert.equal(1, jm.id);
		assert.equal(undefined, jm.name);
	});

});
