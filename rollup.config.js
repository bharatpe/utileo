import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";
import multiInput from 'rollup-plugin-multi-input';

export default [{
 input: 'src/index.ts', // our source file
 output: {
   file: './lib/index.umd.js',
   format: 'umd',
   name: 'Utileo',
  },
 plugins: [
  typescript({ useTsconfigDeclarationDir: false }),
  terser() // minifies generated bundles
 ]
},

{
  input: ['./src/**/*.ts'], // our source file
  output: {
    dir: './lib',
    format: 'esm' // the preferred format
   },
  plugins: [
   typescript({ useTsconfigDeclarationDir: false }),
   terser(), // minifies generated bundles
   multiInput(),
  ]
 },
];
