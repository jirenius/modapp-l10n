## Classes

<dl>
<dt><a href="#L10n">L10n</a></dt>
<dd><p>L10n handles localization and translation</p>
</dd>
</dl>

## Interfaces

<dl>
<dt><a href="#LocaleString">LocaleString</a></dt>
<dd><p>A locale string object</p>
</dd>
</dl>

<a name="LocaleString"></a>

## LocaleString
A locale string object

**Kind**: global interface  

* [LocaleString](#LocaleString)
    * [.translationKey()](#LocaleString+translationKey) ⇒ <code>string</code>
    * [.defaultStr()](#LocaleString+defaultStr) ⇒ <code>string</code>
    * [.defaultParams()](#LocaleString+defaultParams) ⇒ <code>object</code>

<a name="LocaleString+translationKey"></a>

### localeString.translationKey() ⇒ <code>string</code>
Returns the translation key of the locale string

**Kind**: instance method of [<code>LocaleString</code>](#LocaleString)  
**Returns**: <code>string</code> - Translation key  
<a name="LocaleString+defaultStr"></a>

### localeString.defaultStr() ⇒ <code>string</code>
Returns the default translation of the locale string

**Kind**: instance method of [<code>LocaleString</code>](#LocaleString)  
**Returns**: <code>string</code> - Default translation  
<a name="LocaleString+defaultParams"></a>

### localeString.defaultParams() ⇒ <code>object</code>
Returns the default parameters of the locale string

**Kind**: instance method of [<code>LocaleString</code>](#LocaleString)  
**Returns**: <code>object</code> - Default parameters or false value if not set  
<a name="L10n"></a>

## L10n
L10n handles localization and translation

**Kind**: global class  

* [L10n](#L10n)
    * _instance_
        * [.locale](#L10n+locale) : <code>string</code>
        * [.t(key, [defaultStr], [params])](#L10n+t) ⇒ <code>string</code>
        * [.l(key, defaultStr, [defaultParams])](#L10n+l) ⇒ [<code>LocaleString</code>](#LocaleString)
        * [.namespace(namespace)](#L10n+namespace) ⇒ [<code>L10n</code>](#L10n)
        * [.on(events, handler)](#L10n+on)
        * [.off(events, [handler])](#L10n+off)
        * [.setLocale(locale)](#L10n+setLocale)
        * [.isLocaleString(str)](#L10n+isLocaleString) ⇒ <code>boolean</code>
    * _static_
        * ["l10n.localeUpdate"](#L10n.event_l10n.localeUpdate)

<a name="L10n+locale"></a>

### l10n.locale : <code>string</code>
Currently set locale language tag

**Kind**: instance property of [<code>L10n</code>](#L10n)  
<a name="L10n+t"></a>

### l10n.t(key, [defaultStr], [params]) ⇒ <code>string</code>
Translates a string and replaces tags with provided object.

**Kind**: instance method of [<code>L10n</code>](#L10n)  
**Returns**: <code>string</code> - Translated string.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> \| [<code>LocaleString</code>](#LocaleString) | Key id of string to translate. It might also be a LocaleString object previously returned from the l method. |
| [defaultStr] | <code>string</code> | Default string tranlation. Should not be provided if key is a LocaleString. |
| [params] | <code>object</code> | Params to use on tag replacement |

<a name="L10n+l"></a>

### l10n.l(key, defaultStr, [defaultParams]) ⇒ [<code>LocaleString</code>](#LocaleString)
Returns a LocaleString that can be passed to the t method for translation.

**Kind**: instance method of [<code>L10n</code>](#L10n)  
**Returns**: [<code>LocaleString</code>](#LocaleString) - LocaleString  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Key id of string to translate. |
| defaultStr | <code>string</code> | Default string translation. |
| [defaultParams] | <code>object</code> | Default parameters. |

<a name="L10n+namespace"></a>

### l10n.namespace(namespace) ⇒ [<code>L10n</code>](#L10n)
Creates a new L10n instance for the given namespace

**Kind**: instance method of [<code>L10n</code>](#L10n)  
**Returns**: [<code>L10n</code>](#L10n) - An L10n instance.  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>string</code> | Dot separated namespace to be added to the current namespace |

<a name="L10n+on"></a>

### l10n.on(events, handler)
Attaches an event handler function for one or more l10n events.

**Kind**: instance method of [<code>L10n</code>](#L10n)  

| Param | Type | Description |
| --- | --- | --- |
| events | <code>string</code> | One or more space-separated events. Null means any event. |
| handler | <code>EventBus~eventCallback</code> | A function to execute when the event is emitted. |

<a name="L10n+off"></a>

### l10n.off(events, [handler])
Removes an l10n event handler.

**Kind**: instance method of [<code>L10n</code>](#L10n)  

| Param | Type | Description |
| --- | --- | --- |
| events | <code>string</code> | One or more space-separated events. Null means any event. |
| [handler] | <code>function</code> | An optional handler function. The handler will only be remove if it is the same handler. |

<a name="L10n+setLocale"></a>

### l10n.setLocale(locale)
Sets locale

**Kind**: instance method of [<code>L10n</code>](#L10n)  
**Emits**: <code>event:&quot;l10n.localeUpdate&quot;</code>  

| Param | Type | Description |
| --- | --- | --- |
| locale | <code>string</code> | Locale language tag |

<a name="L10n+isLocaleString"></a>

### l10n.isLocaleString(str) ⇒ <code>boolean</code>
Checks if a value implements [LocaleString](#LocaleString).

**Kind**: instance method of [<code>L10n</code>](#L10n)  
**Returns**: <code>boolean</code> - True if the string implements LocaleString interface, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>\*</code> | Value to check |

<a name="L10n.event_l10n.localeUpdate"></a>

### "l10n.localeUpdate"
L10N locale update event with the new locale.

**Kind**: event emitted by [<code>L10n</code>](#L10n)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| locale | <code>string</code> | Locale language tag of new locale |

