# Публикация YouTube Loop — A-B Repeat в Chrome Web Store

[English](PUBLISHING.md) · Русский

Пошаговый гайд для владельца проекта. Проверено по документации Google 18 октября 2026 года. Названия разделов кабинета могут немного отличаться.

Репозиторий: https://github.com/l4iniwakura/youtube-ab-loop

## 1. Что уже готово и что осталось

Готовы исходники, лицензия MIT, интерфейс и пользовательские инструкции на семи языках. Логотип находится в `assets/`, иконки 16, 32, 48 и 128 пикселей — в `icons/` и уже подключены в манифесте. Текущая версия — `1.1.1`.

До отправки нужно подготовить:

- Иконка уже готова: используйте `icons/icon-128.png` в карточке магазина. Все размеры подключены в `manifest.json`.
- Хотя бы один настоящий скриншот расширения на YouTube: 1280 × 800 или 640 × 400. Рекомендуемый размер — 1280 × 800, максимум пять скриншотов.
- Маленькое промоизображение 440 × 280 для карточки магазина. Большое промоизображение 1400 × 560 можно подготовить дополнительно.
- Аккаунт разработчика, контактный email и сведения, которые запросит кабинет.

**Иконка уже добавлена. Скриншоты и промоизображение ещё нужно подготовить перед отправкой в магазин.**

Не используйте логотип YouTube как собственную иконку. Название проекта остаётся **YouTube Loop — A-B Repeat**, как выбрал владелец. В описании укажите, что это независимый проект. Если проверка отклонит название, работайте с конкретным замечанием Google; одобрение названия заранее не гарантировано.

Официальные требования: [изображения](https://developer.chrome.com/docs/webstore/images), [карточка магазина](https://developer.chrome.com/docs/webstore/cws-dashboard-listing), [брендинг](https://developer.chrome.com/docs/webstore/branding).

## 2. Зарегистрируйте аккаунт разработчика

1. Откройте [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/).
2. Войдите в Google-аккаунт, которому должно принадлежать расширение. Проверьте аккаунт перед оплатой.
3. Включите двухэтапную аутентификацию Google: она нужна для публикации и обновлений.
4. Прочитайте и примите соглашение разработчика.
5. Оплатите разовый регистрационный взнос — обычно 5 USD. Окончательную сумму, доступные способы оплаты и возможные налоги покажет Google перед оплатой. Это плата за аккаунт, не за каждое расширение.
6. Заполните и подтвердите контактные данные и остальные обязательные сведения кабинета. Данные о статусе продавца и регионе указывайте в соответствии с вашей реальной ситуацией.

Если оплата недоступна для вашей карты или платёжного профиля, проверьте сообщение Google и доступные способы оплаты. Не указывайте вымышленные сведения об аккаунте или стране.

Источники: [регистрация](https://developer.chrome.com/docs/webstore/register/), [взнос 5 USD](https://blog.chromium.org/2020/03/new-developer-dashboard-and.html), [двухэтапная аутентификация](https://developer.chrome.com/docs/webstore/program-policies/two-step-verification).

## 3. Проверьте расширение перед упаковкой

В папке проекта выполните:

```powershell
node scripts/build-locales.cjs
npm test
node --check content.js
node --check options.js
```

На `chrome://extensions` перезагрузите расширение, затем обновите вкладку YouTube. Вручную проверьте:

- Установку A и B, ручной ввод времени, включение и выключение повтора.
- Ошибочные границы и сброс.
- Полноэкранный режим и обычный режим.
- Переход между роликами и восстановление сохранённых границ.
- Приостановку повтора на рекламе, если она появляется.
- Автоматический выбор языка, английский для неподдерживаемой локали и ручной выбор в параметрах.

Не обещайте поддержку Shorts, прямых эфиров, встроенных плееров или бесшовную аудиопетлю: текущая версия этого не предоставляет.

## 4. Соберите ZIP для загрузки

После добавления иконок соберите архив из файлов расширения. `manifest.json` должен лежать **в корне ZIP**, а не внутри дополнительной папки.

Пример для PowerShell, запущенного из папки проекта:

```powershell
$releaseFiles = @(
  'manifest.json',
  'loop-core.js',
  'content.js',
  'locales.js',
  'language.js',
  'options.html',
  'options.css',
  'options.js',
  '_locales',
  'icons'
)
$releaseZip = Join-Path $env:TEMP 'youtube-loop-1.1.1.zip'
Compress-Archive -Path $releaseFiles -DestinationPath $releaseZip -Force
Write-Output $releaseZip
```

Этот пример предполагает, что иконки уже находятся в папке `icons` и прописаны в манифесте. `.git`, `node_modules`, тесты и документы не нужны для работы расширения и в этот архив не включаются. Не загружайте CRX вместо ZIP.

## 5. Создайте карточку расширения

В кабинете нажмите **New item / Добавить элемент** и загрузите ZIP. Заполните **Store listing / Описание в магазине**.

### Название

```text
YouTube Loop — A-B Repeat
```

Название и краткое описание уже локализованы через `_locales`. Подробное описание и изображения карточки магазина заполняются отдельно: наличие переводов интерфейса не переводит автоматически всю карточку.

### Основной язык

Выберите английский для основной карточки. Затем добавьте русскую, китайскую, французскую, японскую, корейскую и немецкую локализации описания, если кабинет предлагает соответствующие варианты. Наш китайский перевод — упрощённый.

### Краткое описание на английском

```text
Loop any part of a YouTube video with A–B controls inside the player.
```

### Подробное описание на английском

```text
Repeat the exact part of a YouTube video you want to hear or watch again.

YouTube Loop — A-B Repeat adds A–B controls directly to the YouTube player, including fullscreen.

• Set the start (A) and end (B) using the current playback position.
• Enter precise timestamps manually.
• Save loop points locally for each video.
• Use the interface in English, Russian, Simplified Chinese, French, Japanese, Korean or German.
• Follow Chrome's language automatically, or choose a language in Options.

Free and open source under the MIT license. No accounts, analytics or tracking. Loop points and your language preference stay in local extension storage.

Supports regular desktop YouTube watch pages. Shorts, livestreams and embedded players are not supported. Buffering may cause a short delay at the loop boundary.

Source code and documentation:
https://github.com/l4iniwakura/youtube-ab-loop

Report a problem:
https://github.com/l4iniwakura/youtube-ab-loop/issues

Independent project, not affiliated with or endorsed by YouTube or Google.
```

Выберите подходящую доступную категорию, например инструменты или образование. Загрузите иконку, скриншоты и промоизображение. Используйте реальные изображения работы текущей версии.

### Ссылки

| Поле | Значение |
|---|---|
| Homepage / сайт, если доступно | `https://github.com/l4iniwakura/youtube-ab-loop` |
| Support URL | `https://github.com/l4iniwakura/youtube-ab-loop/issues` |
| Privacy policy URL | `https://github.com/l4iniwakura/youtube-ab-loop/blob/master/docs/PRIVACY.md` |

Если поле **Official URL** требует подтверждения владения доменом, GitHub-репозиторий не заменяет такое подтверждение. Не заполняйте это необязательное поле как подтверждённый сайт без соответствующей проверки. Ссылка на репозиторий всё равно останется в описании и поддержке.

## 6. Заполните Privacy practices

Ниже — тексты для текущей реализации. При изменении поведения расширения пересмотрите ответы.

### Single purpose

```text
Allow users to repeatedly play a selected A–B section of a YouTube video using controls integrated into the existing video player.
```

### Обоснование storage

```text
The storage permission saves the A and B timestamps selected by the user for each video and an optional interface language preference. These settings are stored in chrome.storage.local on the user's device and are not transmitted to the developer or third parties.
```

### Обоснование доступа к YouTube

```text
The content script runs only on https://www.youtube.com/* to add A–B controls to the existing player and control the video element's current playback position. This access is necessary to repeat the selected section and handle navigation between YouTube videos.
```

Шаблон доступа охватывает YouTube, потому что переходы между страницами могут происходить без полной перезагрузки. Само управление показывается на поддерживаемых страницах обычного просмотра.

### Remote code

Выберите **No, I am not using remote code**. Все скрипты входят в пакет; расширение не скачивает и не исполняет удалённый код.

### Сбор и использование данных

Для текущей версии разработчик не получает и не собирает пользовательские данные. Расширение обрабатывает идентификатор текущего видео и выбранные отметки локально, чтобы сохранить границы. Не отмечайте передачу истории просмотра или персональных данных разработчику: такой передачи нет.

Прочитайте точные формулировки вопросов и заверений в кабинете перед подтверждением. Ответы должны соответствовать [политике конфиденциальности](PRIVACY.md) и реальному поведению. Работа самого сайта YouTube регулируется его собственными правилами.

Источник: [заполнение privacy-полей](https://developer.chrome.com/docs/webstore/cws-dashboard-privacy).

## 7. Инструкция для проверяющего

Если кабинет предлагает поле testing instructions, можно вставить:

```text
No account or paid access is required by the extension.

1. Open a publicly accessible regular video on https://www.youtube.com/watch.
2. Click A–B in the bottom-right player controls.
3. Choose two positions at least 0.2 seconds apart using Set current time, or enter start and end timestamps manually.
4. Click Enable loop. Playback returns to A when it reaches B.
5. Click Disable loop to stop repeating.
6. Open the extension's Options to test automatic language selection or a manual language override.

The extension supports regular desktop videos, not Shorts, livestreams or embedded players. Looping pauses during ads. All preferences remain in local extension storage.
```

## 8. Отправьте на проверку

1. В **Distribution / Распространение** выберите **Public**, чтобы расширение было доступно всем в выбранных поддерживаемых регионах.
2. Проверьте ошибки и незаполненные обязательные поля.
3. Выберите автоматическую публикацию после одобрения или публикацию вручную после проверки — в зависимости от доступных настроек и желаемого момента выпуска.
4. Нажмите **Submit for review** и проверьте подтверждение отправки.
5. Следите за статусом в кабинете и письмами Google. Срок проверки не гарантирован.

Если получен отказ, прочитайте конкретную причину. Исправьте соответствующие файлы или карточку и отправьте повторно. При загрузке новой версии пакета увеличьте `version` в `manifest.json` и согласуйте версию в `package.json`.

Источник: [процесс публикации](https://developer.chrome.com/docs/webstore/publish).

## 9. После одобрения

1. Если выбран ручной выпуск, опубликуйте одобренную версию из кабинета.
2. Откройте реальную публичную карточку магазина и скопируйте её адрес.
3. Добавьте ссылку **Install from Chrome Web Store** в начало главного `README.md` и ссылку установки во все семь языковых инструкций.
4. Убедитесь, что в описании магазина есть обратная ссылка на GitHub.
5. При желании создайте GitHub Release для соответствующего коммита и приложите ZIP.
6. Проверьте установку именно из магазина в отдельном профиле Chrome. Расширение, установленное из папки, само не превращается в магазинную установку — это отдельные установки.

Не добавляйте кнопку магазина с выдуманным адресом до появления настоящей карточки.

## 10. Дальнейшие обновления

Увеличьте версию, соберите переводы, выполните проверки и загрузите новый ZIP в **существующую** карточку расширения. Не создавайте новый элемент для каждого обновления. Обновляйте описание и политику конфиденциальности, если меняются возможности, разрешения или обработка данных.
