<p align="center">
  <img src="../assets/logo-256.png" width="160" height="160" alt="YouTube Loop — A-B Repeat logo">
</p>

# YouTube Loop — A-B Repeat

[English](README.en.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

Loop a YouTube video section using A–B controls built into the player, including fullscreen. Free, MIT-licensed, no external dependencies.

## Installation
Download and unpack the repository. Open `chrome://extensions`, enable **Developer mode**, select **Load unpacked**, then select the directory containing `manifest.json`. Reload YouTube tabs. After updating the files, reload the extension on that page and reload YouTube.

## Usage
Open a normal YouTube video and click **A–B** in the bottom-right player controls. Set A at the start and B at the end using **Set current time**, or enter timestamps manually. Click **Enable loop**. Closing the panel does not disable looping. Escape closes the panel. Reset clears the points.

Time formats: `85.5`, `1:25.500`, `0:01:25.500`. Minimum section length: 0.2 seconds. Seeking outside the section returns to A while looping is enabled. Points are saved per video; looping turns off when you change videos and is not automatically enabled after reload.

## Language
The interface follows Chrome’s UI locale. Supported languages: English, Russian, Simplified Chinese, French, Japanese, Korean and German. Unsupported locales fall back to English. Open the extension’s **Options** to override the language or return to automatic selection. Language changes apply to open YouTube tabs.

## Limitations and privacy
Supports desktop `www.youtube.com/watch` videos. Shorts, livestreams and embedded players are unsupported. Looping pauses during ads. Buffering and background timer throttling can delay the loop boundary; playback is not guaranteed to be seamless. YouTube layout changes may require updates.

Loop points and your language preference stay in local extension storage. No analytics, accounts or external requests. The `storage` permission saves preferences; site access is restricted to YouTube.

## Development
Node.js 18+: `npm test`. No dependencies to install. Run `node scripts/build-locales.cjs` after editing translations. Test playback, fullscreen, ads, navigation, saved points and languages manually in Chrome.

## License and affiliation
MIT, see [LICENSE](../LICENSE). This is an independent project, not affiliated with or endorsed by YouTube or Google.
