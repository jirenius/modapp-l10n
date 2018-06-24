import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: 'src/index.js',
	output: {
		format: 'umd',
		name: 'modapp-l10n',
		exports: 'named',
		globals: {
			modapp: 'modapp'
		}
	},
	external: [ 'modapp' ],
	plugins: [
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		babel({
			exclude: 'node_modules/**',
			plugins: [ 'external-helpers' ]
		}),
		commonjs(),
		(process.env.NODE_ENV === 'production' && uglify()),
	],
};
