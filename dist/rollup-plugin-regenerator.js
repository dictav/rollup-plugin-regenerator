'use strict';

var rollupPluginutils = require('rollup-pluginutils');

var compile = require('regenerator').compile;

function regenerator(opts) {
  if ( opts === void 0 ) opts = {};

  var filter = rollupPluginutils.createFilter(opts.include, opts.exclude);

  return {
    name: 'regenerator',

    transform: function transform(code, id) {
      if (filter(id)) {
        return {
          code: compile(code).code
        };
      }
    }
  };
}

module.exports = regenerator;