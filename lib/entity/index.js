'use strict';

const Model = require('../model');
const VALID_KEYS = require('./keys');

module.exports = class Entity extends Model {
	getValidKeys() {
		return VALID_KEYS;
	}

	static create(data) {
		return new Entity(data);
	}
};
