(() => {
  const catalogs = globalThis.ABLoopMessages;
  const supported = Object.keys(catalogs);
  function resolve(locale) {
    const normalized = String(locale || '').replaceAll('-', '_').toLowerCase();
    const exact = supported.find(code => code.toLowerCase() === normalized);
    if (exact) return exact;
    // Only Simplified Chinese is translated; do not silently present it as Traditional Chinese.
    if (normalized === 'zh' || normalized === 'zh_hans' || normalized === 'zh_sg' || normalized.startsWith('zh_hans_')) return 'zh_CN';
    return supported.find(code => code.toLowerCase() === normalized.split('_')[0]) || 'en';
  }
  globalThis.ABLoopLanguage = Object.freeze({
    supported,
    resolve,
    get(key, preference = 'auto', uiLocale = chrome.i18n.getUILanguage()) {
      const locale = resolve(preference === 'auto' ? uiLocale : preference);
      return catalogs[locale]?.[key]?.message || catalogs.en[key]?.message || key;
    }
  });
})();
