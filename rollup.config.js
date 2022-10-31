import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
	input: 'src/index.js',
	external: [ 'modapp-eventbus' ],
	output: {
		name: 'modapp-l10n',
		format: 'umd',
		exports: 'named',
		globals: {
			'modapp-eventbus': 'modapp-eventbus'
		}
	},
	plugins: [
		babel({ babelHelpers: 'bundled' }),
		(process.env.NODE_ENV === 'production' && terser()),
	]
};
