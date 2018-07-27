/**
 * Locale string storing the string key and the default string.<br>
 * Use {@link L10n#l} to create new instances.
 * @implements {LocaleString}
 */
class LocaleStr {

	/**
	 * Creates a LocaleStr instance
	 * @param {L10n} l10n L10n instance.
	 * @param {string} key Translation key of the string.
	 * @param {string} defaultStr Default string tranlation.
	 * @param {object} [defaultParams] Default string translation parameters.
	 */
	constructor(l10n, key, defaultStr, defaultParams) {
		this._l10n = l10n;
		this._key = key;
		this._defaultStr = defaultStr;
		this._defaultParams = typeof defaultParams === 'object'
			? defaultParams
			: null;
	}

	/**
	 * Attaches an event handler function for one or more l10n events.
	 * @param {?string} events One or more space-separated events. Null means any event. Supported event is 'localeUpdate'.
	 * @param {EventBus~eventCallback} handler A function to execute when the event is emitted.
	 */
	on(events, handler) {
		this._l10n.on(events, handler);
	}

	/**
	 * Removes an l10n event handler.
	 * @param {?string} events One or more space-separated events. Null means any event.
	 * @param {function} [handler] An optional handler function. The handler will only be remove if it is the same handler.
	 */
	off(events, handler) {
		this._l10n.off(events, handler);
	}

	/**
	 * Returns a translated string
	 * @param {*=} params Optional parameters for placeholder replacement.
	 * @returns {string} Translated string
	 */
	translate(params) {
		return this._l10n.t(this, params);
	}

	/**
	 * Gets the current locale language tag. Eg. 'en', 'pt-BR', etc.
	 * @returns {string} Locale language tag.
	 */
	getLocale() {
		return this._l10n.locale;
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
