const supportsStorage = () => {
	let storage;

	try {
		storage = window.localStorage;
		var x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return e instanceof DOMException && (
			e.code === 22 ||
			e.code === 1014 ||
			e.name === 'QuotaExceededError' ||
			e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
		) && (storage && storage.length !== 0);
	}
};

export const get = (key: string, defaultValue: string): string =>
	supportsStorage()
		? window.localStorage.getItem(key) ?? defaultValue
		: defaultValue;

export const set = (key: string, value: string) => {
	if (supportsStorage()) {
		window.localStorage.setItem(key, value);
	}
};
