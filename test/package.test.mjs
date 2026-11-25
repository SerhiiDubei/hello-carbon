import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

test('команда test запускає node --test без шляху до теки', () => {
  assert.match(pkg.scripts.test, /^node --test\s*$/);
});

test('тести лежать там, де node --test їх знаходить', () => {
  const files = fs.readdirSync('test').filter((f) => /\.test\.[cm]?js$/.test(f));
  assert.ok(files.length > 0);
});
