# SEOチェックリスト — 株式会社0ai (0ai-inc.com)

このドキュメントは、`0ai-inc.com` の検索エンジン最適化（SEO）状況を管理するためのチェックリストです。
エージェントが自動実施できる項目と、ユーザーが手動で実施する必要がある項目を分けて記載しています。

---

## 技術的SEO基盤（M1） — 完了済み ✅

| 項目 | 状態 | 備考 |
|------|------|------|
| robots.txt の設定 | ✅ 完了 | `User-agent: *`, `Allow: /`, `Sitemap: https://0ai-inc.com/sitemap-index.xml` |
| sitemap.xml の自動生成 | ✅ 完了 | `@astrojs/sitemap` で自動生成 |
| canonical タグ | ✅ 完了 | 全ページに `<link rel="canonical">` を設定済み |
| hreflang（多言語対応） | ✅ 完了 | `ja`, `en`, `x-default` を全ページに設定済み |
| OGP タグ（og:title, og:description, og:image） | ✅ 完了 | `SEOHead.astro` に実装済み |
| Twitter Card タグ | ✅ 完了 | `summary_large_image` を設定済み |
| Organization 構造化データ（JSON-LD） | ✅ 完了 | 日英トップページに実装済み |
| Google Analytics 4 | ✅ 完了 | `G-5XDTM5XDNM` で計測中 |
| HTTPS / TLS | ✅ 完了 | GitHub Pages でSSL対応済み |
| モバイル対応（Responsive） | ✅ 完了 | Tailwind CSS でレスポンシブ対応 |

---

## オンページSEO最適化（M2） — 完了済み ✅

| 項目 | 状態 | 備考 |
|------|------|------|
| タイトルタグへの「0ai（ゼロエーアイ）」配置 | ✅ 完了 | 日本語: `0ai（ゼロエーアイ）\| AI活用 × 経営支援 \| 株式会社0ai` |
| メタディスクリプションの最適化 | ✅ 完了 | CTA + キーワードを含む説明文 |
| H1タグへの「0ai」キーワード配置 | ✅ 完了 | Hero コンポーネントのh1に「株式会社0ai（ゼロエーアイ）」を含む |
| OGP画像（og:image）の設定 | ✅ 完了 | `/og-image.svg` (1200x630) |

---

## Search Console最適化（M3） — 手動実施が必要

### ユーザーが実施する項目

| 優先度 | 項目 | 方法 | 参考リンク |
|--------|------|------|-----------|
| 🔴 高 | Google Search Console にサイトマップを Submit | Search Console > サイトマップ > `https://0ai-inc.com/sitemap-index.xml` を入力して送信 | [手順は seo-action-guide.md を参照](#) |
| 🔴 高 | トップページのインデックスリクエスト | Search Console > URL検査 > `https://0ai-inc.com/` > インデックス登録をリクエスト | [手順は seo-action-guide.md を参照](#) |
| 🟡 中 | 英語トップページのインデックスリクエスト | Search Console > URL検査 > `https://0ai-inc.com/en/` | — |
| 🟡 中 | 「0ai」クエリのパフォーマンス確認 | Search Console > 検索パフォーマンス > クエリ絞り込み | — |
| 🟢 低 | Core Web Vitals レポートの確認 | Search Console > Core Web Vitals | — |

---

## 外部ブランド認知向上（M4） — 一部完了・一部手動実施が必要

### エージェントが実施済み ✅

| 項目 | 状態 | 備考 |
|------|------|------|
| Organization JSON-LDのsameAsにGitHubリンク追加 | ✅ 完了 | `https://github.com/0ai-Inc` を設定 |
| Footerへの法人番号明示 | ✅ 完了 | 「法人番号: 6010001262079」を全ページfooterに追加 |
| About ページへの「0ai」由来説明追加 | ✅ 完了 | 名前の意味・ブランドストーリーを追記 |
| BaseLayoutのpreconnect追加 | ✅ 完了 | GTM向けpreconnect/dns-prefetchを追加（LCP改善） |

### ユーザーが実施する項目

| 優先度 | 項目 | 備考 |
|--------|------|------|
| 🔴 高 | GitHub Organization（0ai-Inc）のプロフィール整備 | Website URL に `https://0ai-inc.com` を設定、説明文に「0ai（ゼロエーアイ）」を含める |
| 🟡 中 | X（旧Twitter）アカウントの開設・整備 | ユーザー名 `@0ai_inc` 等、プロフィールにWebサイトURL設定 |
| 🟡 中 | Wantedly / 会社四季報オンライン等への企業情報登録 | バックリンク獲得・企業データベース掲載 |
| 🟢 低 | Google ビジネスプロフィールの登録 | 「株式会社0ai」で登録、ローカルSEO強化 |

---

## 現在のSEOスコアサマリー

- 技術的SEO基盤: **100%** (M1完了)
- オンページ最適化: **100%** (M2完了)
- Search Console連携: **30%** (コード側完了、手動操作待ち)
- 外部ブランド認知: **20%** (コード側完了、SNS/ディレクトリ登録待ち)
- 検索順位: 未計測（Search Console確認待ち）

---

最終更新: 2026-04-03
