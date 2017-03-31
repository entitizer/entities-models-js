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
		const m = new Model({ id: 1, name: 'My name', list: [{ id: 1 }, { id: 2 }], mlist: [new Model({ id: 1 })] });
		assert.equal(1, m.get('id'));
		assert.equal('My name', m.get('name'));

		const jm = m.toJSON(['id', 'list', 'mlist']);

		assert.ok(jm.list);
		assert.ok(jm.mlist);
		assert.equal(1, jm.id);
		assert.equal(undefined, jm.name);
		assert.equal(undefined, jm.mlist[0].toJSON);
		assert.equal('function', typeof m.get('mlist')[0].toJSON);
	});

});
