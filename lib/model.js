'use strict';

const utils = require('./utils');

module.exports = class Model {

	constructor(data) {
		if (utils.isNullOrUndefined(data)) {
			throw new Error('Invalid model data');
		}
		if (data instanceof Model) {
			data = data.toJSON();
		}

		this.data = data;
		this.data = this.toJSON();
	}

	toJSON(keys) {
		keys = keys || this.getValidKeys();

		return utils.pick(this.data, keys);
	}

	getValidKeys() {
		throw new Error('Method getValidKeys is not implemented');
	}

	isValidKey(key) {
		return utils.isString(key) && this.getValidKeys().indexOf(key) > -1;
	}

	set(key, value) {
		if (!this.isValidKey(key)) {
			throw new Error('Invalid model key: ' + key);
		}
		if (utils.isUndefined(value)) {
			delete this.data[key];
		} else {
			this.data[key] = value;
		}
	}

	get(key) {
		if (key === undefined) {
			return this.toJSON();
		}
		return this.data[key];
	}

	has(key) {
		return this.data[key] !== undefined;
	}

};
