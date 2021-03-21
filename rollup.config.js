import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import multiInput from 'rollup-plugin-multi-input';

export default [{
 input: 'src/index.ts', // our source file
 output: {
   file: './lib/utileo.min.js',
   format: 'iife',
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
