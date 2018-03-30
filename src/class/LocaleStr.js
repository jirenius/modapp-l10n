/**
 * Locale string storing the string key and the default string.<br>
 * Use {@link L10n#l} to create new instances instead as it will ensure
 * the LocaleStr key is prefixed with the correct namespace.
 * @implements {LocaleString}
 */
class LocaleStr {

	/**
	 * Creates a LocaleStr instance
	 * @param {string} key Translation key of the string.
	 * @param {string} defaultStr Default string tranlation.
	 * @param {object} [defaultParams] Default string translation parameters.
	 */
	constructor(key, defaultStr, defaultParams) {
		this._key = key;
		this._defaultStr = defaultStr;
		this._defaultParams = typeof defaultParams === 'object'
			? defaultParams
			: null;
	}

	/**
	 * Returns the translation key
	 * @returns {string} Translation key
	 */
	translationKey() {
		return this._key;
	}

	/**
	 * Returns the default translation
	 * @returns {string} Default translation
	 */
	defaultStr() {
		return this._defaultStr;
	}

	/**
	 * Returns the default translation parameters
	 * @returns {string} Default translation parameters
	 */
	defaultParams() {
		return this._defaultParams;
	}
}

export default LocaleStr;
