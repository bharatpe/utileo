import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import multiInput from 'rollup-plugin-multi-input';
import copy from 'rollup-plugin-copy';

export default [{
 input: 'src/index.ts', // our source file
 output: {
   file: './dist/utileo.min.js',
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
    dir: './dist',
    format: 'esm' // the preferred format
   },
  plugins: [
   typescript({ useTsconfigDeclarationDir: false }),
   terser(), // minifies generated bundles
   multiInput(),
   copy({
    targets: [{ src: ['package.json', 'README.md'], dest: 'dist/' }],
  }),
  ]
 },
];
