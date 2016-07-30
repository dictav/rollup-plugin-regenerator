import { createFilter } from 'rollup-pluginutils';

var compile = require('regenerator').compile;

export default function regenerator(opts = {}) {
  const filter = createFilter(opts.include, opts.exclude);

  return {
    name: 'regenerator',

    transform(code, id) {
      if (filter(id)) {
        return {
          code: compile(code).code
        };
      }
    }
  };
}
