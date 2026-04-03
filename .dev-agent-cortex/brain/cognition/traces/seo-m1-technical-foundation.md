---
id: seo-m1-technical-foundation
trigger: claude-code
status: in_progress
created_at: 2026-04-03T05:52:04Z
completed_at:
task_nature: M1技術的SEO基盤の整備 — robots.txt作成、構造化データ追加、OGP/canonicalタグ整備、sitemapプラグイン設定
intention:
intention_github_issue: 3
evaluate_summary:
learn_outcome:
---

# M1: 技術的SEO基盤の整備 — サイト現状調査と実装

## PERCEIVE

**タスクの性質**: 株式会社0aiのコーポレートサイト（0ai-inc.com、Astro製）に対して、技術的SEO基盤を整備する実装タスク。調査後に実際のコード編集・ファイル作成を行い、`npm run build` で動作を確認してcommit/pushまで完結させる。

**スコープ**:
- 対象: `/Users/ig/Dev/0ai/hp` リポジトリ
- 主要ファイル: `src/components/SEOHead.astro`、`astro.config.mjs`、`public/robots.txt`、`src/i18n/ui.ts`
- 戦略: `seo-google-first-page-0ai`（GitHub Issue #3）のM1マイルストーン

**キーエンティティ**:
- Astro v6（SSG）+ Tailwind CSS + Three.js
- `@astrojs/sitemap` プラグイン（既に導入済み）
- Google Analytics 4（G-5XDTM5XDNM）導入済み
- 日英2言語対応（hreflang設定済み）

**現状調査結果**（調査済み）:
1. `robots.txt`: **既に存在**。`Sitemap: https://0ai-inc.com/sitemap-index.xml` を指定済み。Googlebot許可設定あり。
2. `astro.config.mjs`: **`@astrojs/sitemap` 既に設定済み**。`site: 'https://0ai-inc.com'` も設定済み。
3. `SEOHead.astro`: canonical URL、hreflang、OGPタグ（og:title/description/type/url/locale）、Twitter Cardタグ **既に実装済み**。
4. **未実装**: 構造化データ（JSON-LD: Organization schema）が存在しない。
5. `og:image` タグが未設定。
6. `site.title` が「株式会社0ai」で、「0ai」キーワードは含むが企業としての情報が構造化データとして出力されていない。

**制約**:
- 明示的: White-hat SEOのみ（Googleウェブマスターガイドライン遵守）、既存スタック維持
- 暗黙的: 日英両言語対応が必要、ビルド成功が必須条件

**曖昧点**:
1. `og:image` 用の画像ファイル: OGP画像（1200x630px推奨）が存在しない。後から追加可能なため影響は限定的。
2. Organization schema の `sameAs` リンク（SNS）: 戦略ファイルには記載なし。M4（外部ブランド認知）で整備予定のため今は仮の値を使えばよい。

## REMEMBER

**参照ソース**:
- docs: `.claude/docs/` に architectures・requirements ディレクトリが存在するが、SEO実装に直接関連する要件定義はなし。プロジェクトdocsは未整備。
- memory: `.dev-agent-cortex/brain/memory/` は `config/` のみ。SEOに関する過去記憶・知見なし。
- past runs: `traces/` ディレクトリはこのトレースのみ（初回）。cognition-log には strategy作成ログが1件あるが、SEO実装に関する知見なし。

**関連度評価**:
- 戦略ファイル（`seo-google-first-page-0ai.md`）がM1の目的・原則・現状を正確に記述しており、このタスクの最重要参照ドキュメントとなる。
- 過去の類似実行は存在しないため、今回がSEO技術基盤整備の初回実行となる。
- Astroのsitemap/SEO実装知識は事前知識として活用可能。

## REASON

### Primary Reasoning

**現状の評価と実装ギャップの特定**:

既に整備済みの項目:
- robots.txt: Googlebotのクロール許可、sitemapパス指定あり → **完了**
- @astrojs/sitemap: astro.config.mjsに設定済み → **完了**
- canonical URL: SEOHead.astroで実装済み → **完了**
- OGPタグ（og:title/description/type/url/locale）: 実装済み → **完了**
- Twitter Cardタグ: 実装済み → **完了**
- hreflang（ja/en/x-default）: 実装済み → **完了**

**実装が必要な項目（M1スコープ）**:

1. **構造化データ（JSON-LD: Organization schema）** - 最優先
   - Googleが企業情報をリッチリザルトとして表示するために重要
   - 株式会社0aiの法人情報（会社名、URL、ロゴ、設立年、住所、メール）を含めるべき
   - `SEOHead.astro` に追加するのが最適（全ページで出力される）
   - ただしOrganizationスキーマはトップページのみに絞るのがベストプラクティス
   - `index.astro` にのみ埋め込む方が望ましい → `BaseLayout` に `jsonLd` オプションpropsとして追加する設計が良い

2. **og:image タグ** - 中優先度
   - SNSシェア時のサムネイル画像として重要
   - 画像ファイルがないため、今サイクルでは`og:image`タグを追加しつつ画像はスキップ
   - または、faviconSVGを暫定的に指定する方法もあるが、OGP用には適切でない
   - **判断**: `og:image`タグ追加は今サイクルでは見送り（画像なしでタグだけ追加してもSNSでブロークンイメージになる）。M2で画像作成とセットで対応。

3. **site.descriptionの改善** - 補足事項
   - 現在の日本語description: 「人間活動のAI化とAIの人間化の追求\n人間とAIの境界を0にする企業」
   - 「0ai」キーワードが明示的に含まれていない
   - ただしM2（オンページSEO最適化）のスコープであるため、今サイクルは対象外

**実装方針**:
- `SEOHead.astro` に `jsonLd` オプションプロップを追加し、JSONを受け取って`<script type="application/ld+json">`として出力
- `src/pages/index.astro` と `src/pages/en/index.astro` にOrganization schemaのJSONオブジェクトを渡す
- 日本語ページ: `@type: Organization`, `name: "株式会社0ai"`, URL, logo, address（日本語）
- 英語ページ: 同様、英語表記

**スキル選定**:
| スキル | 判定 | 理由 |
|--------|------|------|
| docs-reference | スキップ | SEO実装に関する内部ドキュメントが存在しないため不要 |
| memory-recall | スキップ | メモリ内にSEO関連知見なし |
| orchestrate-traces-recall | スキップ | 過去トレースなし（初回） |

- confidence: high
- decision_type: routine

### Adversarial Review

- 判定: PASS
- 構造化データをSEOHead.astroのオプションpropsとして実装する方針は、Astroの設計パターンと一致しており技術的リスクは低い。robots.txt/sitemap/canonical/OGPが既に整備されている事実確認は正確。og:imageを今サイクルで見送る判断も、画像なしのOGPタグはSEO上マイナスになりうるため合理的。
- 改訂結論: なし

### Assumptions

| # | 曖昧点 | downstream_impact | guess_confidence | 採用した仮定 | アクション | resolution_status |
|---|--------|-------------------|-----------------|-------------|-----------|-------------------|
| A1 | og:image用画像ファイルが存在しない | low | high | 今サイクルはog:imageタグ追加を見送り、M2で画像とセットで対応 | record_only | pending |
| A2 | Organization schemaのsameAsリンク（SNS）未確定 | low | high | 空配列で初期化し、M4で更新する | record_only | pending |

- notify_sent: false
- notify_ts: なし
- resolution_reason: なし

### Blockers

ブロッカーなし。全リソース（コード、設定ファイル）にアクセス可能。

## PLAN

**計画概要**: `SEOHead.astro` に `jsonLd` オプションプロップを追加し、`index.astro`（日本語）と `en/index.astro`（英語）からOrganization schemaを渡す実装を行う。その後 `npm run build` でビルド確認、問題なければgit commit & push。

**実装ステップ**:

1. `src/components/SEOHead.astro` を編集
   - Props に `jsonLd?: object` を追加
   - JSONが渡された場合に `<script type="application/ld+json">` を出力

2. `src/pages/index.astro` を編集
   - Organization schema（日本語）をSEOHeadに渡す
   - `@id`、`name`、`url`、`description`、`foundingDate`、`address`（PostalAddress）、`email`、`logo`

3. `src/pages/en/index.astro` を編集
   - Organization schema（英語表記）を同様に追加

4. `npm run build` でビルド確認

5. ビルド成功後、git add & commit & push

**Slack通知**: 不要（非同期通知対象の曖昧点なし）





