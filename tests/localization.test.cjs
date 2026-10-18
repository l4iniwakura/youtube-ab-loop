const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
require('../locales.js');
require('../language.js');
const language = globalThis.ABLoopLanguage;
const catalogs = globalThis.ABLoopMessages;
test('regional locales and unsupported languages resolve correctly', () => {
  for (const [locale, expected] of Object.entries({'en-US':'en','ru-RU':'ru','fr-CA':'fr','de-AT':'de','ja-JP':'ja','ko-KR':'ko','zh-CN':'zh_CN','zh-SG':'zh_CN','zh-Hans-CN':'zh_CN','zh-TW':'en','es':'en','':'en'})) assert.equal(language.resolve(locale),expected);
});
test('automatic locale, manual override and English fallback', () => {
  assert.equal(language.get('close','auto','ru-RU'),'Закрыть');
  assert.equal(language.get('close','fr','ru-RU'),'Fermer');
  assert.equal(language.get('close','auto','es-ES'),'Close');
});
test('all seven catalogs are complete and generated catalog matches source', () => {
  assert.equal(Object.keys(catalogs).length,7);
  const keys = Object.keys(catalogs.en).sort();
  for (const [locale, data] of Object.entries(catalogs)) {
    assert.deepEqual(Object.keys(data).sort(),keys);
    for (const entry of Object.values(data)) assert.ok(entry.message.trim());
    assert.deepEqual(data, JSON.parse(fs.readFileSync(path.join(__dirname,'..','_locales',locale,'messages.json'),'utf8')));
  }
  const source = fs.readFileSync(path.join(__dirname,'..','content.js'),'utf8');
  for (const match of source.matchAll(/\b(?:t|html)\('([^']+)'\)/g)) assert.ok(catalogs.en[match[1]],match[1]);
});
