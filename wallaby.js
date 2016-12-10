module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts'
    ],
    tests: [
      'test/*test.ts'
    ],
    setup: function() {
      global.expect = require('chai').expect;
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha'
  }
}
