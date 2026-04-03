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

- M1〜M4 完了済み（2026-04-03）
- Organization JSON-LD・OGP・タイトル最適化・Core Web Vitals改善済み
- サイトマップ送信・インデックスリクエスト済み
- Googleビジネスプロフィール・Wantedly・LinkedIn・Crunchbase・ICPF・GitHub登録済み
- X（@zer0ai_inc）sameAs追加済み
- M5達成待ち（Googleインデックス反映・順位確認）

## Milestones

- [x] M1: 技術的SEO基盤の整備（sitemap.xml確認・robots.txt・構造化データ・Core Web Vitals・インデックス確認）
- [x] M2: オンページSEO最適化（title, meta description, OGP, H1タグ, "0ai"キーワード配置の最適化）
- [x] M3: Google Search Consoleでの検索パフォーマンス確認と改善施策の実施（サイトマップ送信・インデックスリクエスト完了）
- [x] M4: 外部ブランド認知向上（Googleビジネスプロフィール・Wantedly・LinkedIn・Crunchbase・ICPF・GitHub登録完了）
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

### Cycle 1 -- 2026-04-03T05:56:50Z
- **Milestone Progress**: 0 -> 1 / 5
- **Intentions**: created=0, completed=0, failed=0
- **Outcome**: M1技術的SEO基盤整備完了。robots.txt/sitemap/@astrojs/sitemap/canonical/OGP/hreflangが全て整備済みを確認し、未実装だったOrganization JSON-LD構造化データを日英トップページに追加してビルド・push完了。
- **Signals**: stagnation=false, direction_change=false

### Cycle 2 -- 2026-04-03T06:07:00Z
- **Milestone Progress**: 1 -> 2 / 5
- **Intentions**: created=0, completed=0, failed=0
- **Outcome**: M2オンページSEO最適化完了。日英タイトルに「0ai（ゼロエーアイ）」配置、meta description最適化（CTA+キーワード）、H1に「0ai」追加、og:image/OGP画像（og-image.svg）新規作成、SEOHead.astroにog:image/twitter:imageタグ追加してpush済み。
- **Signals**: stagnation=false, direction_change=false

### Cycle 3 -- 2026-04-03T07:20:00Z
- **Milestone Progress**: 2 -> 2 / 5（M3/M4 コード側施策完了、手動Search Console操作待ち）
- **Intentions**: created=0, completed=0, failed=0
- **Outcome**: M3/M4コード側施策完了。preconnect追加（Core Web Vitals改善）、Organization JSON-LDのsameAsにGitHubリンク追加、about.astroに「0ai」由来説明セクション追加、Footerに法人番号6010001262079明示。docs/seo-checklist.mdとdocs/seo-action-guide.mdを新規作成してユーザー向けSearch Console操作ガイドを整備。push済み。
- **Signals**: stagnation=false, direction_change=false

### Cycle 4（手動操作完了確認） -- 2026-04-03T08:30:00Z
- **Milestone Progress**: 2 -> 4 / 5（M3・M4 手動操作完了）
- **Intentions**: created=0, completed=0, failed=0
- **Outcome**: ユーザーがM3（サイトマップ送信・インデックスリクエスト）・M4（Googleビジネスプロフィール・Wantedly・LinkedIn・Crunchbase・ICPF・GitHub登録）を全て完了。X sameAs追加もpush済み。M5（順位確認）のみ残存。
- **Signals**: stagnation=false, direction_change=false

