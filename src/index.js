/**
 * Localization utility implementing modapp's model interface.
 */

import L10nImport from './class/L10n.js';
import eventBus from 'modapp/eventBus.js';

/**
 * L10n class.
 * @type {L10n}
 */
let L10n = L10nImport;

/**
 * L10n instance using the {@link module:modapp/eventBus} to emit locale changes.
 * @type {L10n}
 */
let l10n = new L10n(eventBus);

export { L10n };
export default l10n;