---
id: seo-m2-onpage-optimization
trigger: claude-code
status: in_progress
created_at: 2026-04-03T07:00:00Z
completed_at:
task_nature: M2オンページSEO最適化 — タイトルタグ・meta description・H1・キーワード配置・OGP画像の最適化実装
intention:
intention_github_issue: 3
evaluate_summary:
learn_outcome:
---

# M2: オンページSEO最適化（タイトル・meta description・H1・コンテンツ最適化）

## PERCEIVE

**タスクの性質**: 株式会社0aiのコーポレートサイト（0ai-inc.com、Astro製）に対してオンページSEO最適化を実施する実装タスク。「0ai」キーワードでのGoogle 1ページ目到達（M5）を目指し、M2として以下を実施する:
- タイトルタグ最適化（「0ai」をタイトル先頭付近に配置）
- meta description最適化（「0ai」自然含有、120〜160文字、CTA含有）
- H1タグ最適化（各ページH1に「0ai」ブランドを反映）
- コンテンツ内キーワード配置（「0ai」「ゼロエーアイ」の自然な複数回出現）
- OGP画像の作成（public/og-image.svg）

**スコープ**:
- 対象リポジトリ: `/Users/ig/Dev/0ai/hp`
- 主要変更ファイル:
  - `src/i18n/ui.ts` — site.title・site.description・hero.subtitle等のキー値最適化
  - `src/components/SEOHead.astro` — og:image追加
  - `src/pages/index.astro` / `src/pages/en/index.astro` — トップページのtitle最適化
  - `src/pages/about.astro` / `src/pages/en/about.astro` — Aboutページのtitle最適化
  - `src/pages/services.astro` / `src/pages/en/services.astro` — Servicesページのtitle最適化
  - `src/pages/contact.astro` / `src/pages/en/contact.astro` — Contactページのtitle最適化
  - `public/og-image.svg` — OGP画像の新規作成

**現状調査結果**:
1. **site.title（日本語）**: 「株式会社0ai」— 「0ai」は含むが、SEOに最適なフォーマットではない。タイトルにブランド説明語句がない。
2. **site.title（英語）**: 「0ai Inc.」— 同様に説明語句なし。
3. **site.description（日本語）**: 「人間活動のAI化とAIの人間化の追求\n人間とAIの境界を0にする企業」— 「0ai」キーワードが含まれていない。CTAもなし。
4. **site.description（英語）**: 「AI-ifying human activities and humanizing AI. A technology company reducing the boundary between humans and AI to zero.」— 「0ai」が含まれていない。
5. **hero.title（日本語）**: 「人間無き世界へ」— H1として使用。「0ai」キーワードなし。
6. **hero.subtitle（日本語）**: 「人間活動のAI化とAIの人間化——人間とAIの境界を0にする。」— 「0ai」なし。
7. **トップページのtitle**: `t('site.title')` = 「株式会社0ai」のみ。ページ固有説明なし。
8. **Aboutページのtitle**: 「会社概要 | 株式会社0ai」— 形式は良好だが「0ai」説明なし。
9. **Servicesページのtitle**: 「サービス | 株式会社0ai」— 同様。
10. **OGP画像**: 存在しない（`public/`にog-image系ファイルなし）。SEOHead.astroにも`og:image`タグなし。

**キーエンティティ**:
- ターゲットキーワード: 「0ai」「ゼロエーアイ」「株式会社0ai」
- Astro v6（SSG）+ i18n対応（`src/i18n/ui.ts`が一元管理）
- SEOHead.astroコンポーネントが全ページのメタタグを一元管理

**制約**:
- 明示的: White-hat SEOのみ、既存スタック維持、ビルド成功必須
- 暗黙的: 日英両言語への同時対応、ブランドアイデンティティ（「人間無き世界」ビジョン）を損なわない表現
- タイトル文字数: 50〜60文字が推奨（Google SERPでの切れ防止）
- meta description: 120〜160文字推奨

**曖昧点**:
1. **hero.title（H1）の変更範囲**: 「人間無き世界へ」はビジョンを体現するキャッチコピーであり、デザイン上の重要要素。H1をSEO用途で変更することでブランド表現が損なわれる可能性がある。変更するかどうかが判断ポイント。
   - 影響: H1の変更はUIデザインへの影響あり（hero.title変更は視覚的インパクトに影響）
   - 後続タスク: H1変更 → 全ページのビジュアルデザイン確認が必要
2. **OGP画像の内容**: SVGで作成する場合のデザイン（テキスト・背景色等）は仕様未定義。
   - 影響: 低（後から変更可能）

## REMEMBER

**参照ソース**:
- docs: `.dev-agent-cortex/brain/cognition/strategies/seo-google-first-page-0ai.md` を参照。M2「オンページSEO最適化（title, meta description, OGP, H1タグ, "0ai"キーワード配置の最適化）」がnot-startedであることを確認。戦略原則: White-hat SEOのみ、コンテンツの質と企業信頼性最優先、長期的オーガニック成長優先。
- memory: `seo-m1-technical-foundation.md`（前サイクルトレース）から、og:image未実装はM2でOGP画像作成とセットで対応する旨を記録していたことを確認（A1仮定）。SEOHead.astroの実装構造（jsonLd optsプロパティを受け取りJSON-stringify出力）は把握済み。
- past runs: Cycle 1（seo-m1-technical-foundation）完了。M1での実装パターン（i18n ui.ts → pages → BaseLayout → SEOHead）が確立されており、今回のM2実装に直接活用できる。

**関連度評価**:
- 戦略ファイルはタスクの目的・マイルストーン定義の正本として高関連。M2の具体的な実装項目を規定している。
- 前サイクルトレースはAstroのコンポーネント構造・i18n実装パターンの理解に高関連。SEOHead.astroのog:image追加方法は前サイクルのjsonLd実装パターンを参考にできる。
- cognition-log.jsonlのM1エントリはA1仮定（og:image）をM2での対応として記録しており、本サイクルの実装根拠として有効。

## REASON

### Primary Reasoning

**タスクの本質的な要求**:
「0ai」という検索クエリに対してGoogleが0ai-inc.comを関連性が高いと判断するよう、オンページシグナルを強化すること。具体的には:
1. titleタグ・meta descriptionに「0ai」キーワードを含める（最重要シグナル）
2. H1タグと本文コンテンツで「0ai」の出現頻度を適切に高める
3. OGP画像を追加してソーシャルシェア時の体験を改善する

**実装方針の決定**:

a) **タイトルタグ最適化**:
   - 日本語トップ: `0ai（ゼロエーアイ）| AI × 経営支援 | 株式会社0ai` → 文字数: 約28文字（適切）
   - 英語トップ: `0ai | AI for Business | 0ai Inc.` → 約34文字（適切）
   - Aboutページ（日）: `株式会社0ai について | ゼロエーアイ（0ai）` → 約22文字
   - Aboutページ（英）: `About 0ai Inc. | AI Company in Tokyo` → 約36文字
   - Servicesページ（日）: `0aiのサービス | AI動画・会議・論文 | 株式会社0ai` → 約26文字
   - Servicesページ（英）: `Services | 0ai Inc. — AI Products & Development` → 約46文字
   - Contactページ（日）: `お問い合わせ | 株式会社0ai` → 約14文字（短いが明確）
   - Contactページ（英）: `Contact | 0ai Inc.` → 約18文字（適切）
   - **実装方針**: `site.title`を変更するのではなく、各ページでハードコードまたはi18nキーを活用する。トップページは`site.title`をSEO特化キーに分離する。

b) **meta description最適化**:
   - 日本語: 「0ai（ゼロエーアイ）は人間活動をAIに置換する株式会社0aiのサービス群です。AI動画生成・AI会議アシスタント・AI論文キュレーションなど。まずは無料相談から。」（80文字）
   - 英語: 「0ai Inc. replaces human activities with AI. Explore our AI products: video generation, meeting assistant, paper curation. Free consultation available.」（151文字）

c) **H1タグの扱い**: `hero.title`（「人間無き世界へ」）はブランドビジョンを表す核心的なコピーであり、**変更しない**。代わりに`hero.subtitle`に「0ai（ゼロエーアイ）」という会社名を追加して、H1周辺のコンテキストでキーワードを補完する。これにより:
   - ビジョンの一貫性を維持
   - 副見出しでキーワードを自然に補完
   - downsteam_impact: lowに分類（H1自体は変えない判断）

d) **サービスページのH1**: 「サービス」→ 「0aiのサービス」に変更。ここはビジョン表現でなく機能的な見出しのため変更適切。

e) **Aboutページ**: H1「会社概要」はそのまま（変更による効果が少ない）。代わりにmetaタイトルと構造的キーワード配置を強化。

f) **OGP画像**: SVGベースで作成。背景: ダークネイビー（#061124、サイトカラーと統一）。テキスト: 「0ai」大文字＋副テキスト（英語説明）。公式ファビコンの色調を踏襲。SEOHead.astroにog:imageタグを追加。

**スキル選定**:
| スキル | 判定 | 理由 |
|--------|------|------|
| docs-reference | スキップ | 既にREMEMBERで戦略・前サイクルを参照済み |
| review-critical-thinking | Phase 2で実施 | Adversarial Review フェーズで使用 |
| orchestrate-traces-recall | スキップ | REMEMBER内で過去のtraceを直接確認済み |

- confidence: high
- decision_type: routine

### Adversarial Review

- 判定: PASS
- レビュー概要: H1「人間無き世界へ」を変更しない判断（hero.subtitleで補完）は、ブランド一貫性とSEOのバランスとして合理的。meta descriptionに「0ai（ゼロエーアイ）」の読み仮名を含めることで、「ゼロエーアイ」という読み方の検索クエリにも対応できる点は評価できる。OGP画像をSVGで作成する方針はTwitter/X等がSVGのOGP画像をサポートしないリスクがあるが、GitHub PagesのOGP配信においてはPNG変換が望ましい。ただしツール制約上SVGが現実的な選択肢であり、このトレードオフは許容範囲内。titleタグの最適化方針はGoogleのベストプラクティス（ブランド名+説明語句+ターゲットキーワード）に沿っており問題なし。
- 改訂結論: なし（PASSのため）

### Assumptions
| # | 曖昧点 | downstream_impact | guess_confidence | 採用した仮定 | アクション | resolution_status |
|---|--------|-------------------|-----------------|-------------|-----------|-------------------|
| A1 | hero.title（H1）を変更すべきか | medium | high | 変更しない。hero.subtitleに「0ai（ゼロエーアイ）」を追加してH1周辺コンテキストを補完する | record_only | pending |
| A2 | OGP画像をSVGで作成してよいか | low | high | SVGで作成する。主要SNSはSVGを直接解釈しないが、技術的制約として許容する | record_only | pending |

- notify_sent: false
- notify_ts: なし
- resolution_reason: なし

### Blockers
ブロッカーなし。全リソース（ファイル編集ツール、ビルドコマンド）が利用可能。

## PLAN

### 実装計画

以下の順序で実装する（依存関係順）:

**Step 1: `src/i18n/ui.ts` の最適化**
- `site.title`（日）: `株式会社0ai` → **`0ai（ゼロエーアイ）| AI活用 × 経営支援`** （トップページ専用のSEOタイトルを表すキーとして使用。他ページは別途ページタイトル + `| 株式会社0ai`形式）
- `site.description`（日）: 新description → **`0ai（ゼロエーアイ）は人間活動をAIに置換する株式会社0aiのサービス群です。AI動画生成・AI会議アシスタント・AI論文キュレーションなど、AIによる業務効率化を無料相談からサポート。`**
- `hero.subtitle`（日）: 「0ai（ゼロエーアイ）」ブランド名を先頭に追加 → **`株式会社0ai（ゼロエーアイ）が人間活動のAI化とAIの人間化を追求——人間とAIの境界を0にする。`**
- `site.title`（英）: `0ai Inc.` → **`0ai Inc. | AI for Business`**
- `site.description`（英）: **`0ai Inc. replaces human activities with AI. Our products include AI video generation, meeting assistant, and paper curation. Free initial consultation available.`**（141文字）
- `hero.subtitle`（英）: **`0ai (Zero AI) pursues AI-ifying human activities and humanizing AI — reducing the boundary between humans and AI to zero.`**

**Step 2: `src/pages/index.astro` のtitleを改善**
- 現在: `t('site.title')` = 「株式会社0ai」
- 変更後: site.titleを上記の最適化値に改めることでindex.astroは変更不要（site.titleを使用しているため自動反映）

**Step 3: `src/pages/services.astro` のH1を修正**
- 現在のH1: `{t('services.title')}` = 「サービス」
- 変更後: `services.title`を「0aiのサービス」に変更してH1に「0ai」を追加
- `services.subtitle`も「0ai のプロダクト群が人間活動をAIへ置換する」方向で補強

**Step 4: `src/components/SEOHead.astro` にog:imageタグ追加**
- `<meta property="og:image" content="https://0ai-inc.com/og-image.svg" />` を追加
- `<meta name="twitter:image" content="https://0ai-inc.com/og-image.svg" />` を追加

**Step 5: `public/og-image.svg` を新規作成**
- 1200×630pxのSVGファイル（OGP画像標準サイズ）
- デザイン: ダークネイビー背景（#061124）、「0ai」大文字表示、会社名「株式会社0ai / 0ai Inc.」、英語キャッチフレーズ

**Step 6: ビルド確認**
- `npm run build` を実行してビルドエラーがないことを確認

**Step 7: git commit & push**
- 変更ファイルをまとめてコミット

**Slack文脈**: なし（CLI入力のため不要）

**通知**: A1・A2いずれもrecord_onlyのため、Slack通知不要。
