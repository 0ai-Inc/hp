---
id: seo-google-first-page-0ai
title: 「0ai」Google検索1ページ目表示達成
github_issue: 3
created_at: 2026-04-03T05:50:37Z
completed_at: null
---

## Vision

「0ai」でGoogle検索した際に、0ai-inc.comが1ページ目（top10）に表示されること。Google Search Consoleへのドメイン登録を起点に、技術的SEO基盤整備・オンページ最適化・ブランド認知向上を体系的に実施し、0ai株式会社のブランドとしての検索可視性を確立する。

## Current State

- Google Search Console に 0ai-inc.com を登録済み
- 0ai-inc.com（Astro + Tailwind + Three.js）はGitHub Pages でホスティング中
- 日本語・英語の2言語対応済み
- Google Analytics 4 導入済み
- 現在の「0ai」検索順位: 未計測

## Milestones

- [ ] M1: 技術的SEO基盤の整備（sitemap.xml確認・robots.txt・構造化データ・Core Web Vitals・インデックス確認）
- [ ] M2: オンページSEO最適化（title, meta description, OGP, H1タグ, "0ai"キーワード配置の最適化）
- [ ] M3: Google Search Consoleでの検索パフォーマンス確認と改善施策の実施
- [ ] M4: 外部ブランド認知向上（SNSプロフィール整備・ディレクトリ登録・バックリンク獲得）
- [ ] M5: 「0ai」検索でのGoogle 1ページ目（top10）到達の確認とレポート

## Principles

- White-hat SEOのみ採用（Googleウェブマスターガイドライン遵守）
- 既存技術スタック（Astro + Tailwind）を維持・活用
- コンテンツの質と企業信頼性を最優先
- 短期的なランキング操作より長期的なオーガニック成長
- 日英両言語でのSEO最適化を並行実施

## References

- `src/layouts/BaseLayout.astro` — SEOメタタグ実装場所
- `src/pages/index.astro`, `src/pages/en/index.astro` — メインランディングページ
- `astro.config.mjs` — サイト設定・sitemap設定
- `public/robots.txt` — クローラー設定

## Cycle Summaries

