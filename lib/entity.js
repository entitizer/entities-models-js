'use strict';

const Model = require('./model');

const VALID_KEYS = [
	'id',
	'name',
	'slug',
	'atonicName',
	'abbr',
	'type',
	'category',
	'region',
	'lang',
	'country',
	'description',

	'wikiId',
	'wikiName',
	// for lang!==en
	'englishWikiId',
	'englishWikiName',

	'types',
	'props',

	'createdAt'
];

module.exports = class Entity extends Model {
	getValidKeys() {
		return VALID_KEYS;
	}

	static create(data) {
		return new Entity(data);
	}
};
