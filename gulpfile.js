const del = require('del');
const gulp = require('gulp');
const rollup = require('rollup');
const { spawn } = require('child_process');

/**
 * Remove all build output in dist folder
 */
const clean = () => {
  console.log('Removing dist folder recursively and type defs');
  return del(['dist', '*.d.ts', '*.d.ts.map']);
};

/**
 *  Compile TypeScript
 */
const typeScriptEs = () => {
  console.log('Compiling typescript');
  return spawn('yarn', ['run', 'ts:es']);
};

/**
 *  Build type definitions
 */
const typeDefs = () => {
  console.log('Compiling typescript definitions');
  return spawn('yarn', ['run', 'ts:typedefs']);
};

/**
 * Make the output prettier
 */
const lintDist = () => {
  console.log('Lint and format dist files...');
  return spawn('yarn', ['prettier-eslint', './dist/**/*.js', '--write']);
};

/**
 * Output a CommonJs module for node
 */
const commonJs = () => {
  console.log('Build commonJs module');
  return rollup
    .rollup({
      input: 'dist/es/index.js',
    })
    .then(bundle => {
      return bundle.write({
        file: 'dist/cjs/index.js',
        format: 'cjs',
        name: 'main',
      });
    });
};

// define complex tasks
const build = gulp.series(clean, typeScriptEs, typeDefs, commonJs, lintDist);

// export tasks
// exports.clean = clean
exports.build = build;
exports.clean = clean;
exports.default = build;
