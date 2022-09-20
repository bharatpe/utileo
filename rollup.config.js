import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];
const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
];

const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return;
  }

  console.error(warning);
};

const env = process.env.NODE_ENV;

const plugins = [
  typescript({
    clean: true,
    useTsconfigDeclarationDir: true,
    tsconfig: "tsconfig.json",
  }),
  external({
    includeDependencies: true,
  }),
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    extensions: EXTENSIONS,
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: /node_modules/,
  }),
  resolve({
    extensions: EXTENSIONS,
    module: true,
    jsnext: true,
    main: true,
    preferBuiltins: false,
    browser: true,
    modulesOnly: true,
  }),
  visualizer(),
  terser()
];

export default [
  {
    onwarn: discardWarning,
    input: 'src/index.ts',
    output: {
      esModule: false,
      file: packageJson.unpkg,
      format: 'umd',
      name: packageJson.name,
      exports: 'named',
      sourcemap: true,
    },
    plugins: [...plugins, env === 'production' && terser()],
  },
  {
    onwarn: discardWarning,
    input: 'src/index.ts',
    output: [
      { 
        file: packageJson.module, format: 'esm', name: packageJson.name, exports: 'named', sourcemap: true },
      {
        file: packageJson.main,
        format: 'cjs',
        name: packageJson.name,
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins,
  },
  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
