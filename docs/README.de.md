# YouTube Loop — A-B Repeat

[English](README.en.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

Wiederhole YouTube-Abschnitte mit A–B-Steuerung direkt im Player, auch im Vollbild. Kostenlos, unter MIT-Lizenz und ohne externe Abhängigkeiten.

## Installation
Lade das Repository herunter und entpacke es. Öffne `chrome://extensions`, aktiviere den Entwicklermodus und wähle unter „Entpackte Erweiterung laden“ den Ordner mit `manifest.json`. Lade YouTube-Tabs neu. Nach Dateiänderungen zuerst die Erweiterung und dann YouTube neu laden.

## Verwendung
Öffne ein normales Video und klicke rechts unten im Player auf **A–B**. Setze Anfang A und Ende B mit „Aktuelle Zeit setzen“ oder gib die Zeiten ein. Klicke auf „Schleife einschalten“. Das Schließen des Panels beendet die Schleife nicht. Escape schließt das Panel; „Zurücksetzen“ löscht die Punkte.

Zeitformate: `85.5`, `1:25.500`, `0:01:25.500`. Mindestdauer: 0,2 Sekunden. Bei aktiver Schleife führt ein Sprung außerhalb des Abschnitts zurück zu A. Punkte werden je Video gespeichert. Ein Videowechsel schaltet die Schleife aus; nach dem Neuladen muss sie ebenfalls manuell aktiviert werden.

## Sprache
Die Oberfläche folgt der Chrome-Sprache. Unterstützt werden Englisch, Russisch, vereinfachtes Chinesisch, Französisch, Japanisch, Koreanisch und Deutsch. Andere Sprachen verwenden Englisch. In den Erweiterungsoptionen kannst du eine Sprache wählen oder zur automatischen Auswahl zurückkehren. Änderungen gelten auch für offene YouTube-Tabs.

## Einschränkungen und Datenschutz
Unterstützt Desktop-Videos auf `www.youtube.com/watch`. Keine Shorts, Livestreams oder eingebetteten Player. Während Werbung pausiert die Schleife. Pufferung und Hintergrund-Timer können den Rücksprung verzögern; nahtlose Wiedergabe ist nicht garantiert. YouTube-Änderungen können Updates erfordern.

Punkte und Sprachwahl bleiben im lokalen Erweiterungsspeicher. Keine Konten, Analyse oder externen Anfragen. Die Berechtigung `storage` speichert Einstellungen; der Websitezugriff ist auf YouTube beschränkt.

## Entwicklung und Lizenz
Node.js 18+: `npm test`. Nach Übersetzungsänderungen: `node scripts/build-locales.cjs`. Keine Abhängigkeiten zu installieren. Wiedergabe, Vollbild, Werbung, Navigation, Speicherung und Sprachen manuell in Chrome prüfen. [MIT](../LICENSE). Unabhängiges Projekt, nicht mit YouTube oder Google verbunden oder von ihnen unterstützt.
