/**
 * Localization utility implementing modapp's model interface.
 */

import L10n from './class/L10n.js';
import { eventBus } from 'modapp';

/**
 * L10n instance using the {@link module:modapp/eventBus} to emit locale changes.
 * @type {L10n}
 */
let l10n = new L10n(eventBus);

export { L10n };
export default l10n;
