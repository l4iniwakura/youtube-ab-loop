<p align="center">
  <img src="assets/logo-256.png" width="160" height="160" alt="YouTube Loop — A-B Repeat logo">
</p>

# YouTube Loop — A-B Repeat

Loop any part of a YouTube video with A–B controls built into the player, including fullscreen. Free and open source under MIT.

[English](docs/README.en.md) · [Русский](docs/README.ru.md) · [简体中文](docs/README.zh-CN.md) · [Français](docs/README.fr.md) · [日本語](docs/README.ja.md) · [한국어](docs/README.ko.md) · [Deutsch](docs/README.de.md)

## Install

Download or clone this repository. Open `chrome://extensions`, enable **Developer mode**, click **Load unpacked** and select this folder. Reload YouTube. Click **A–B** in the player, set the start and end, and enable looping.

## Languages

Automatically follows Chrome’s UI locale; unsupported languages fall back to English. You can override the language in the extension’s Options. Chinese support currently uses Simplified Chinese.

## Documentation

The `docs/` folder contains complete guides in all seven languages. GitHub renders these Markdown files directly; a separate documentation site or Wiki is not required. The English guide includes development and privacy information.

## Development

Node.js 18+, no dependencies. Run `npm test`. After editing `_locales/*/messages.json`, run `node scripts/build-locales.cjs` and commit the generated `locales.js`.

## Publication

The extension is not yet published in Chrome Web Store. A store link will be added after approval. See the [publishing guide](docs/PUBLISHING.md), [пошаговый гайд на русском](docs/PUBLISHING.ru.md), and [privacy policy](docs/PRIVACY.md).

## License

[MIT](LICENSE). Independent project, not affiliated with or endorsed by YouTube or Google.
