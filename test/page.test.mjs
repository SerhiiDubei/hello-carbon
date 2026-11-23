import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('сторінка має назву й заголовок', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<h1>[^<]+<\/h1>/);
});
