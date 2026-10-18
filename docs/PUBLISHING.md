# Chrome Web Store publication notes

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
