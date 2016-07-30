import test from 'ava'
import { rollup } from 'rollup'
import fs from 'fs'

import regenerator from '../'

test('rollup-plugin-regenerator', async t => {
  console.log(rollup)
  const bundle = await rollup({
    entry: 'fixtures/basic.js',
    plugins: [regenerator()]
  })
  const generated = bundle.generate()
  const code = generated.code.trim().split("\n")
  const expect = fs.readFileSync('fixtures/basic_expect.js', 'utf8').trim().split("\n")
  t.is(code.length, expect.length)
  for (let i = 0; i < code.length; i++) {
    t.is(code[i], expect[i])
  }
});
