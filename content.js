(() => {
  'use strict';
  const core = globalThis.ABLoop;
  let id = '', a = null, b = null, enabled = false, generation = 0;
  let player, video, host, root, trigger;
  let lastSeek = 0;
  const key = () => `video:${id}`;
  const ad = () => player?.classList.contains('ad-showing') || player?.classList.contains('ad-interrupting');
  const ready = () => video && !ad() && core.valid(a, b, video.duration);
  function message(text) { if (root) root.querySelector('[role=status]').textContent = text; }
  function render() {
    if (!root) return;
    for (const [name, value] of [['a', a], ['b', b]]) {
      const input = root.getElementById(name);
      if (root.activeElement !== input) input.value = core.format(value);
    }
    const button = root.getElementById('toggle');
    button.textContent = enabled ? 'Выключить повтор' : 'Включить повтор';
    button.setAttribute('aria-pressed', String(enabled));
    trigger.textContent = enabled ? 'A–B •' : 'A–B';
    trigger.style.color = enabled ? '#74dfc4' : '';
    trigger.setAttribute('aria-label', enabled ? 'A–B: повтор включён. Открыть настройки' : 'Настроить повтор фрагмента A–B');
  }
  async function save() {
    if (!id) return;
    try { await chrome.storage.local.set({[key()]: {a, b}}); }
    catch { message('Не удалось сохранить границы. Повтор продолжает работать.'); }
  }
  function setPoint(name, value) {
    if (!video || ad() || !Number.isFinite(video.duration)) {
      message('Дождитесь загрузки обычного видео. Прямые эфиры не поддерживаются.'); return;
    }
    if (!Number.isFinite(value) || value < 0 || value > video.duration) {
      message('Введите время в пределах видео, например 1:25.500.'); return;
    }
    if (name === 'a') a = value; else b = value;
    enabled = enabled && ready();
    message(a !== null && b !== null && !ready() ? 'B должна быть позже A минимум на 0,2 секунды.' : 'Границы сохранены.');
    render(); void save();
  }
  function toggle() {
    if (enabled) { enabled = false; message('Повтор выключен.'); render(); return; }
    if (!ready()) { message('Задайте A и B: B должна быть позже A минимум на 0,2 секунды.'); return; }
    enabled = true; video.currentTime = a;
    video.play().catch(() => message('Нажмите воспроизведение в плеере.'));
    message('Фрагмент повторяется по кругу.'); render();
  }
  function mount(nextPlayer) {
    host?.remove(); trigger?.remove();
    player = nextPlayer;
    trigger = document.createElement('button');
    trigger.className = 'ytp-button';
    trigger.style.cssText = 'font:700 13px Arial,sans-serif;width:48px;vertical-align:top;';
    trigger.title = 'Повтор фрагмента A–B';
    trigger.setAttribute('aria-expanded', 'false');
    host = document.createElement('div');
    host.id = 'youtube-ab-loop-panel';
    host.style.cssText = 'position:absolute;bottom:64px;right:12px;z-index:60;max-width:calc(100% - 24px);display:none;';
    root = host.attachShadow({mode: 'open'});
    root.innerHTML = `
      <style>
      :host{color-scheme:dark;font:14px/1.4 Arial,sans-serif;color:#f5f5f5}
      *{box-sizing:border-box} section{width:340px;max-width:100%;padding:16px;background:#202020;border:1px solid #555;border-radius:12px}
      header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px} strong{font-size:16px}
      button,input{font:inherit;color:inherit;border:1px solid #666;border-radius:6px;background:#303030;min-height:36px}
      button{cursor:pointer;padding:6px 10px}button:hover{background:#464646}button:focus-visible,input:focus-visible{outline:2px solid #74dfc4;outline-offset:2px}
      .point{display:flex;align-items:center;gap:8px;margin-bottom:10px}label{font-weight:bold;width:14px}input{width:112px;min-width:0;padding:6px;font-variant-numeric:tabular-nums;flex:1}
      #toggle{width:100%;background:#74dfc4;color:#102b24;border-color:#74dfc4;font-weight:bold;margin-top:4px}#toggle:hover{background:#9ae9d5}
      footer{display:flex;gap:8px;margin-top:10px;align-items:center}footer span{font-size:12px;color:#ccc}p{font-size:12px;color:#ddd;margin:12px 0 0;min-height:34px}::selection{background:#74dfc4;color:#102b24}
      </style>
      <section aria-label="Повтор фрагмента A–B">
        <header><strong>Повтор фрагмента</strong><button id="close" aria-label="Закрыть панель">Закрыть</button></header>
        <div class="point"><label for="a">A</label><input id="a" aria-label="Начало фрагмента" placeholder="0:00.000" inputmode="decimal"><button id="set-a">Текущий момент</button></div>
        <div class="point"><label for="b">B</label><input id="b" aria-label="Конец фрагмента" placeholder="0:00.000" inputmode="decimal"><button id="set-b">Текущий момент</button></div>
        <button id="toggle" aria-pressed="false">Включить повтор</button>
        <footer><button id="reset">Сбросить</button><span>Время: м:сс или ч:мм:сс</span></footer>
        <p role="status" aria-live="polite">Поставьте A в начале, B — в конце фрагмента.</p>
      </section>`;
    player.append(host);
    player.querySelector('.ytp-right-controls').prepend(trigger);
    function close() { host.style.display = 'none'; trigger.setAttribute('aria-expanded', 'false'); trigger.focus(); }
    trigger.addEventListener('click', event => {
      event.stopPropagation(); const open = host.style.display === 'none';
      host.style.display = open ? 'block' : 'none'; trigger.setAttribute('aria-expanded', String(open));
      if (open) root.getElementById('close').focus();
    });
    for (const type of ['click', 'dblclick', 'pointerdown', 'keyup']) host.addEventListener(type, e => e.stopPropagation());
    host.addEventListener('keydown', e => { e.stopPropagation(); if (e.key === 'Escape') close(); });
    root.getElementById('close').onclick = close;
    for (const name of ['a', 'b']) {
      root.getElementById(`set-${name}`).onclick = () => setPoint(name, video?.currentTime);
      root.getElementById(name).addEventListener('change', e => setPoint(name, core.parse(e.target.value)));
    }
    root.getElementById('toggle').onclick = toggle;
    root.getElementById('reset').onclick = () => { a = b = null; enabled = false; render(); void save(); message('Границы сброшены.'); };
    render();
  }
  async function sync() {
    const url = new URL(location.href);
    const nextId = url.pathname === '/watch' ? url.searchParams.get('v') || '' : '';
    if (nextId !== id) {
      id = nextId; const current = ++generation; a = b = null; enabled = false; render();
      if (root) message('Поставьте A в начале, B — в конце фрагмента.');
      if (id) {
        try {
          const saved = (await chrome.storage.local.get(key()))[key()];
          if (current === generation && saved) {
            a = Number.isFinite(saved.a) ? saved.a : null; b = Number.isFinite(saved.b) ? saved.b : null; render();
          }
        } catch { message('Хранилище недоступно. Можно выбрать границы вручную.'); }
      }
    }
    if (!id) { host?.remove(); trigger?.remove(); player = null; video = null; return; }
    const nextPlayer = document.querySelector('#movie_player');
    if (!nextPlayer?.querySelector('.ytp-right-controls')) return;
    if (player !== nextPlayer || !host?.isConnected || !trigger?.isConnected) mount(nextPlayer);
    video = player.querySelector('video.html5-main-video');
  }
  setInterval(() => { void sync(); }, 700);
  setInterval(() => {
    if (new URL(location.href).searchParams.get('v') !== id) return;
    if (!enabled || !ready() || video.paused || video.seeking || ad()) return;
    if (core.shouldSeek(video.currentTime, a, b) && performance.now() - lastSeek > 120) {
      lastSeek = performance.now(); video.currentTime = a;
    }
  }, 30);
  // At B == duration, ended can pause the video before the polling callback.
  document.addEventListener('ended', e => {
    if (e.target === video && enabled && ready()) { video.currentTime = a; video.play().catch(() => {}); }
  }, true);
  document.addEventListener('yt-navigate-finish', () => { void sync(); });
  void sync();
})();
