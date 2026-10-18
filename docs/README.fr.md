<p align="center">
  <img src="../assets/logo-256.png" width="160" height="160" alt="YouTube Loop — A-B Repeat logo">
</p>

# YouTube Loop — A-B Repeat

[English](README.en.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

Répétez un passage YouTube avec les commandes A–B intégrées au lecteur, même en plein écran. Gratuit, sous licence MIT, sans dépendances externes.

## Installation
Téléchargez et décompressez le dépôt. Ouvrez `chrome://extensions`, activez le mode développeur, cliquez sur « Charger l’extension non empaquetée » et choisissez le dossier contenant `manifest.json`. Actualisez YouTube. Après une mise à jour des fichiers, rechargez l’extension puis YouTube.

## Utilisation
Ouvrez une vidéo classique et cliquez sur **A–B**, en bas à droite du lecteur. Définissez A au début et B à la fin avec « Temps actuel », ou saisissez les temps. Cliquez sur « Activer la boucle ». Fermer le panneau ne désactive pas la boucle. Échap ferme le panneau ; « Réinitialiser » efface les points.

Formats : `85.5`, `1:25.500`, `0:01:25.500`. Durée minimale : 0,2 seconde. Une recherche hors du passage revient à A lorsque la boucle est active. Les points sont sauvegardés par vidéo. Changer de vidéo désactive la boucle ; après actualisation, réactivez-la manuellement.

## Langue
La langue suit celle de l’interface Chrome : anglais, russe, chinois simplifié, français, japonais, coréen ou allemand. Les autres langues utilisent l’anglais. Les options de l’extension permettent un choix manuel ou automatique. Le changement s’applique aux onglets YouTube ouverts.

## Limites et confidentialité
Vidéos de bureau `www.youtube.com/watch` uniquement. Shorts, directs et lecteurs intégrés non pris en charge. La boucle est suspendue pendant les publicités. Le chargement et les restrictions des onglets en arrière-plan peuvent retarder le retour à A. Une lecture sans coupure n’est pas garantie. Les changements de YouTube peuvent nécessiter une mise à jour.

Les points et la langue restent dans le stockage local. Aucun compte, suivi ou appel réseau externe. La permission `storage` sauvegarde les préférences ; l’accès aux sites est limité à YouTube.

## Développement et licence
Node.js 18+ : `npm test`. Après modification des traductions : `node scripts/build-locales.cjs`. Aucune dépendance à installer. Vérifiez manuellement la lecture, le plein écran, les publicités, la navigation, la sauvegarde et les langues. Licence [MIT](../LICENSE). Projet indépendant, sans affiliation ni approbation de YouTube ou Google.
