---
id: scaffold-and-core-layout
title: プロジェクト初期化 + コアレイアウト + i18n + Three.js
parent: .dev-agent-cortex/brain/objectives/company-website-launch.md
github_issue: 2
status: completed
created_at: 2026-04-02T01:38:00+09:00
completed_at: 2026-04-02T01:50:00+09:00
---

## Intent

Astro プロジェクトの初期化、コアレイアウト（Header/Footer/BaseLayout）、i18n システム、Three.js パーティクルネットワーク背景を構築する。全ページの基盤となる Phase 0-2 を一括実行。

## Why

全ページがこの基盤に依存するため、最初に確立する必要がある。AC1（ビルド成功）、AC2（Three.js）、AC3（i18n）、AC7（カラーテーマ）の基盤。

## Approach

1. astro.config.mjs 作成（site, i18n, Tailwind vite plugin, sitemap）
2. Tailwind CSS グローバルスタイル（#061124 + 白テーマ）
3. i18n 翻訳辞書 + ヘルパー関数
4. BaseLayout + Header（右上言語切替）+ Footer
5. Three.js パーティクルネットワーク実装
6. ホームページ（JP/EN）でビルド確認

## Outcome

全フェーズ完了。Astro 6 + Tailwind CSS 4 + Three.js で会社HPを構築し、GitHub Pages にデプロイ成功。

- 全12ページ生成（JP 6 + EN 6）: ホーム、サービス、会社概要、お問い合わせ、プライバシーポリシー、利用規約
- Three.js パーティクルネットワーク3D背景（マウスインタラクション対応）
- 日英バイリンガル（ヘッダー右上言語切替アイコン）
- カラーテーマ: #061124 ダークネイビー + 白
- GitHub Pages デプロイ成功、カスタムドメイン 0ai-inc.com 設定済み
- DNS設定はユーザー作業（Squarespace）
