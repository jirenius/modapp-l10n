[![view on npm](http://img.shields.io/npm/v/modapp-l10n.svg)](https://www.npmjs.org/package/modapp-l10n)

# ModApp Localization
Localization utility implementing modapp's model interface, using modapp's eventBus.

## Installation

With npm:
```sh
npm install modapp-l10n --save
```

With yarn:
```sh
yarn add modapp-l10n
```

## Usage

```javascript
import l10n from 'modapp-l10n';

// Translate a string calling l10n.t method.
alert(l10n.t('example.translateString', "Translating a string"));

// Create a localized string object by calling the l10n.l method,
// delaying the translation.
let str1 = l10n.l('example.delayedTranslation', "Using delayed translation");
// Translate the localized string object when it is time
// to render it on screen.
alert(l10n.t(str1));

// Translate a string with placeholders
alert(l10n.t('example.usingPlaceholder', "Using {count} placeholder(s)", {count: 1}));

// Create localized string object with placeholders
let str2 = l10n.l('example.morePlaceholders', "Using {count} more placeholder(s)");
// Translate the localized string object with params
alert(l10n.t(str2, {count: 2}));

// Create localized string with placeholders and default parameters
let str3 = l10n.l('example.defaultParams', "This {name} contains {count} placeholders", {name: "locale string", count: 2});
// Overriding default parameters
alert(l10n.t(str3, {name: "translation"}));

// Using variadic parameters instead of named.
alert(l10n.t('example.variadicParameters', "{0} of {1} parameters.", "An example", "variadic"));
```

## Documentation

[Markdown documentation](https://github.com/jirenius/modapp-l10n/blob/master/docs/docs.md)

## Disclaimer

**This package is not complete**, but works as a placeholder until the real implementation is finalized. Source code using this package will be prepared for localization.

Once the implementation is finished, this package will of course support loading of locales, and using the [ICU Message Format](http://userguide.icu-project.org/formatparse/messages) for placeholders.