---
id: company-website-launch
title: 0ai Inc. 会社HP構築・デプロイ
objective_nature: implementation
strategy: null
github_issue: 1
created_at: 2026-04-02T01:37:00+09:00
completed_at: null
---

## Objective

GCP OAuth クライアント検証に通過するため、0ai-inc.com ドメインにプライバシーポリシー等の法的ページを含む会社HPを構築し、GitHub Pages にデプロイする。Astro + Tailwind CSS + Three.js（パーティクルネットワーク3D背景）で実装。日英バイリンガル対応。ランニングコスト¥0。

## Why

GCP OAuth クライアントの検証に通過するには、ドメイン上にプライバシーポリシーページが必須。同時に会社の公式プレゼンスとして、事業内容（NEXCAST, ENVOY, FLECTO, ANIMEX + 受託開発・無料相談）を掲載するHPが必要。

## Acceptance Criteria

- [ ] AC1: Astro + Tailwind CSS でビルドが成功し、全6ページ（ホーム、サービス、会社概要、プライバシーポリシー、利用規約、お問い合わせ）が表示される
- [ ] AC2: Three.js パーティクルネットワーク3D背景がホームページのHeroセクションに表示され、マウスインタラクションが動作する
- [ ] AC3: 日英バイリンガル対応（ヘッダー右上の言語切替アイコンで全ページがJP/EN切替可能）
- [ ] AC4: プライバシーポリシーページに個人情報保護法・GDPR対応の実コンテンツが掲載されている（GCP OAuth検証要件）
- [ ] AC5: 利用規約ページに実コンテンツが掲載されている
- [ ] AC6: GitHub Pages へのデプロイが完了し、カスタムドメイン 0ai-inc.com でHTTPSアクセス可能（DNS設定ガイド含む）
- [ ] AC7: カラーテーマが Primary #061124（ダークネイビー）+ 白で統一されている
- [ ] AC8: サービスページに4プロダクト（NEXCAST, ENVOY, FLECTO, ANIMEX）+ 受託開発 + 無料相談が掲載されている

## Context

- 会社情報: 株式会社0ai, 〒103-0022 東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階, 代表者 池田元気, info@0ai-inc.com
- ドメイン: 0ai-inc.com（Squarespace DNS管理）
- 実装プラン: /Users/ig/.claude/plans/merry-shimmying-toucan.md
