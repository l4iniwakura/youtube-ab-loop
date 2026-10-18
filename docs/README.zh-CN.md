# YouTube Loop — A-B Repeat

[English](README.en.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md)

使用播放器内的 A–B 控件循环播放 YouTube 视频片段，支持全屏。免费、MIT 许可，无外部依赖。

## 安装
下载并解压仓库。打开 `chrome://extensions`，开启开发者模式，点击“加载已解压的扩展程序”，选择包含 `manifest.json` 的文件夹，然后刷新 YouTube 页面。更新文件后，请先重新加载扩展程序，再刷新 YouTube。

## 使用
打开普通视频，点击播放器右下角的 **A–B**。用“设为当前时间”设置起点 A 和终点 B，或手动输入时间，然后点击“开启循环”。关闭面板不会停止循环。按 Escape 关闭面板；“重置”清除循环点。

时间格式：`85.5`、`1:25.500`、`0:01:25.500`。片段至少为 0.2 秒。开启循环时，跳到片段之外会返回 A。循环点按视频保存在本地；切换视频时关闭循环，刷新后也需手动开启。

## 语言
默认跟随 Chrome 界面语言。支持英语、俄语、简体中文、法语、日语、韩语和德语；不支持的语言回退为英语。在扩展程序的“选项”中可手动选择语言，或恢复自动选择。更改会应用到已打开的 YouTube 标签页。

## 限制与隐私
支持桌面端 `www.youtube.com/watch`，不支持 Shorts、直播或嵌入式播放器。广告期间暂停循环。缓冲和后台计时器限制可能导致循环边界延迟，不能保证无缝播放。YouTube 界面更新可能需要扩展程序更新。

循环点和语言设置仅存储在本地。无分析、无账号、无外部请求。`storage` 权限用于保存设置，网站访问仅限 YouTube。

## 开发与许可
Node.js 18+：`npm test`。修改翻译后运行 `node scripts/build-locales.cjs`。无需安装依赖。请在 Chrome 中手动检查播放、全屏、广告、页面切换、保存和语言。使用 [MIT 许可证](../LICENSE)。本项目独立于 YouTube 和 Google，未获其认可。
