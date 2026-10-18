const {test} = require('node:test');
const assert = require('node:assert/strict');
require('../loop-core.js');
const c = globalThis.ABLoop;
test('parses timestamps and rejects malformed input', () => {
  assert.equal(c.parse('1:25.500'), 85.5);
  assert.equal(c.parse('1:02:03,250'), 3723.25);
  for (const value of ['', '-1', '1:99', '1:60:00', 'abc', '1::2']) assert.ok(Number.isNaN(c.parse(value)));
});
test('format round trips and carries milliseconds', () => {
  for (const n of [0, 85.5, 3601.125]) assert.equal(c.parse(c.format(n)), n);
  assert.equal(c.format(59.9999), '1:00.000');
  assert.equal(c.format(null), '');
});
test('validates boundaries including duration and live streams', () => {
  assert.ok(c.valid(0, 1, 10));
  for (const args of [[null, 2, 10], [5, 4, 10], [0, .1, 10], [-1, 2, 10], [0, 11, 10], [0, 1, Infinity]]) assert.equal(c.valid(...args), false);
});
test('returns to A at B or when seeking outside the fragment', () => {
  assert.equal(c.shouldSeek(4.99, 2, 5), false);
  assert.equal(c.shouldSeek(5, 2, 5), true);
  assert.equal(c.shouldSeek(1, 2, 5), true);
});
