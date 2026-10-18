# Chrome Web Store publication notes

English · [Full step-by-step guide in Russian](PUBLISHING.ru.md)

Requested display name: **YouTube Loop — A-B Repeat**.

## Name and branding

The name is configured in all seven locale catalogs. It is not guaranteed to pass Chrome Web Store review. Another listing using a similar name is not proof that this name is permitted.

The [Chrome Web Store branding guidelines](https://developer.chrome.com/docs/webstore/branding) say not to use Google trademarks as an extension name without written permission. For compatibility descriptions they recommend “for”, “for use with”, or “compatible with”, together with the trademark symbol.

A lower-risk candidate is **A-B Repeat for YouTube™**, with an independent identity and icon. This is a recommendation, not a guarantee of acceptance or trademark clearance. The [impersonation guidance](https://developer.chrome.com/docs/webstore/troubleshooting#deceptive_behavior) also forbids suggesting endorsement or official status. Include the independent-project disclosure from the README in the listing.

The [YouTube API branding rules](https://developers.google.com/youtube/terms/branding-guidelines) contain additional naming restrictions for API clients. This extension currently controls the existing HTML video element and does not call YouTube APIs; the general store branding rules remain relevant.

## Release checklist

- Add an original extension icon and real screenshots of the interface.
- Fill in the single-purpose and privacy disclosures accurately: local A/B points and language preference, no collection or transmission by the extension.
- Link the public GitHub repository in the store description and support fields.
- Upload a ZIP with `manifest.json` at its root. The runtime needs `_locales/`, `loop-core.js`, `locales.js`, `language.js`, `content.js`, and the three options files.
- After store approval, add the actual store URL to the main README and the language guides. Do not use a fabricated or placeholder store badge.
- Changing the store-facing name later requires updating every locale catalog and rebuilding `locales.js`.

No Chrome Web Store submission has been made. Registration and payment are completed by the account owner.

## Publication workflow

1. Register in the [Developer Dashboard](https://chrome.google.com/webstore/devconsole/), enable two-step verification and complete the one-time registration payment and requested publisher details.
2. Add an original 128 × 128 extension icon to the package and declare it in the manifest. Prepare at least one real 1280 × 800 or 640 × 400 screenshot and a 440 × 280 small promotional tile. These assets have not been supplied yet.
3. Build translations, run `npm test`, reload the unpacked extension and manually verify playback and languages.
4. Create a runtime ZIP with `manifest.json` at the root. Include the scripts, options files, `_locales/` and icons; omit Git metadata and development files.
5. Create a new store item, upload the ZIP and complete its listing. Use the repository as the source link and GitHub Issues as the support link. Translate the detailed store listing separately from the extension UI.
6. Complete the single-purpose and permission justifications. State that `storage` saves local A/B points and language preferences; YouTube access adds player controls and changes the current playback position. Declare no remote code and no collection or transmission to the developer. Read each certification before accepting it.
7. Set the privacy policy URL to `https://github.com/l4iniwakura/youtube-ab-loop/blob/master/docs/PRIVACY.md` and check that it matches the extension's behavior.
8. Select Public distribution, choose automatic or manual publication after approval, and submit for review. Monitor the dashboard and developer email for the outcome.
9. After publication, copy the actual store URL into the main README and all seven language guides. Keep the reciprocal GitHub link in the store description. Test the store installation in a separate Chrome profile.
10. Upload later releases to the same store item with a higher manifest version.

The [Russian guide](PUBLISHING.ru.md) includes copy-ready English listing text, privacy justifications, reviewer instructions and a PowerShell packaging example.

Official references: [registration](https://developer.chrome.com/docs/webstore/register/), [images](https://developer.chrome.com/docs/webstore/images), [privacy fields](https://developer.chrome.com/docs/webstore/cws-dashboard-privacy), [publishing](https://developer.chrome.com/docs/webstore/publish).
