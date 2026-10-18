(() => {
  const select = document.getElementById('language');
  function render(saved = false) {
    const t = key => ABLoopLanguage.get(key, select.value);
    document.documentElement.lang = ABLoopLanguage.resolve(select.value === 'auto' ? chrome.i18n.getUILanguage() : select.value).replace('_', '-');
    document.getElementById('heading').textContent = t('settings');
    document.getElementById('language-label').textContent = t('language');
    select.options[0].textContent = t('automatic');
    document.getElementById('status').textContent = saved ? t('settingsSaved') : '';
  }
  // Serialize writes so a rapid sequence of changes cannot persist an older selection last.
  let writes = Promise.resolve();
  select.addEventListener('change', () => {
    const language = select.value;
    render();
    writes = writes.then(() => chrome.storage.local.set({language})).then(() => {
      if (select.value === language) render(true);
    }).catch(() => { document.getElementById('status').textContent = ABLoopLanguage.get('saveError', select.value); });
  });
  chrome.storage.local.get('language').then(({language}) => {
    select.value = language === 'auto' || ABLoopLanguage.supported.includes(language) ? language : 'auto';
    render();
  }).catch(() => render());
})();
