# Privacy Policy

YouTube Loop — A-B Repeat. Last updated: October 18, 2026.

## What the extension processes

The extension reads the current YouTube video identifier and interacts with the existing video element to repeat a section selected by the user. It saves the selected start and end timestamps under that video identifier in `chrome.storage.local`. It also stores an optional interface language preference.

These settings remain in the local Chrome profile. They are not sent to the developer or third parties. The extension does not use Chrome Sync for these settings.

## Collection and sharing

The extension contains no analytics, advertising trackers, account system or developer-operated backend. It makes no external network requests and does not collect or transmit personal data, viewing history or saved loop points to the developer. It does not sell user data.

The YouTube website itself continues to operate under Google's own terms and privacy policy. This policy covers the extension, not the website or Chrome.

## Permissions

- `storage`: saves A/B points and the interface language preference locally.
- Site access to `https://www.youtube.com/*`: adds controls to the existing player and changes the playback position to repeat the selected section. The extension does not run on other websites.

## Your controls

Use Reset in the player panel to clear the loop points for the current video. Choose Automatic in Options to follow Chrome's language. Uninstalling the extension removes its local extension storage through Chrome's normal removal process.

## Contact and changes

Questions can be raised at [the public GitHub issue tracker](https://github.com/l4iniwakura/youtube-ab-loop/issues). Issues and information you choose to post there are public and handled by GitHub; do not include private information.

This policy will be updated if the extension's data handling changes. The current version of the source code is available in [the public repository](https://github.com/l4iniwakura/youtube-ab-loop).
