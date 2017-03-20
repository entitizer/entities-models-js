

export function isString(data) {
	return typeof data === 'string';
}

export function isNull (data) {
	return data === null;
}

export function isUndefined(data) {
	return data === undefined;
}

export function isNullOrUndefined(data) {
	return data === null || data === undefined;
}

export function keys(data) {
	return Object.keys(data);
}

export function pick(obj, keys) {
	const nobj = {};

	for (let i = keys.length - 1; i >= 0; i--) {
		nobj[keys[i]] = obj[keys[i]];
	}

	return nobj;
}
