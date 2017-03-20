'use strict';

const Utils = module.exports;

Utils.isString = (data) => {
	return typeof data === 'string';
};

Utils.isNull = (data) => {
	return data === null;
};

Utils.isUndefined = (data) => {
	return data === undefined;
};

Utils.isNullOrUndefined = (data) => {
	return data === null || data === undefined;
};

Utils.keys = (data) => {
	return Object.keys(data);
};

Utils.pick = (obj, keys) => {
	const nobj = {};

	for (let i = keys.length - 1; i >= 0; i--) {
		nobj[keys[i]] = obj[keys[i]];
	}

	return nobj;
};
