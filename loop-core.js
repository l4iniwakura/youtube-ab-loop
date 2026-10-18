/* Shared pure helpers; also exercised by the Node test suite. */
globalThis.ABLoop = Object.freeze({
  parse(value) {
    const text = String(value).trim().replace(',', '.');
    if (!/^\d+(?::\d{1,2}){0,2}(?:\.\d{1,3})?$/.test(text)) return NaN;
    const parts = text.split(':').map(Number);
    if (parts.slice(1).some(n => n >= 60)) return NaN;
    return parts.reduce((sum, n) => sum * 60 + n, 0);
  },
  format(value) {
    if (!Number.isFinite(value) || value < 0) return '';
    const ticks = Math.round(value * 1000);
    const seconds = Math.floor(ticks / 1000);
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}.${String(ticks % 1000).padStart(3, '0')}`;
  },
  valid(a, b, duration) {
    return Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(duration) && a >= 0 && b - a >= 0.2 && b <= duration;
  },
  shouldSeek(time, a, b) { return time >= b || time < a - 0.1; }
});
