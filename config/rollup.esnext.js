import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'lib/index.js',
	plugins: [babel({
		presets: ['stage-3'],
		plugins: ['external-helpers-2'],
	    externalHelpers: true
	}), nodeResolve({jsnext: true})],
	format: 'es',
	dest: 'dist/mojs.js'
};
