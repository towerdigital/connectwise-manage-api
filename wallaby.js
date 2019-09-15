module.exports = function(wallaby) {
  return {
    files: ['src/**/*.ts?(x)', '!__test__/**/*.test.ts?(x)'],
    tests: ['__test__/**/*.test.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs' }),
    },
    testFramework: 'jest',

    debug: true,
  };
};
