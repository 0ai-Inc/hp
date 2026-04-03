# SEO操作ガイド — 株式会社0ai

このガイドは、Google Search ConsoleでのM3施策（検索パフォーマンス改善）と、M4施策（外部ブランド認知向上）のために、ユーザーが手動で実施する操作手順をまとめたものです。

---

## M3: Google Search Console 操作手順

### 前提条件
- Google Search Console（https://search.google.com/search-console）に `0ai-inc.com` がプロパティとして登録済みであること
- Google アカウントでログイン済みであること

---

### 手順1: サイトマップのSubmit

サイトマップをSearch Consoleに登録することで、Googleがサイト構造を効率的にクロールできるようになります。

1. [Google Search Console](https://search.google.com/search-console) を開く
2. 左サイドバーの「**インデックス作成**」>「**サイトマップ**」をクリック
3. 「新しいサイトマップの追加」欄に以下のURLを入力:
   ```
   https://0ai-inc.com/sitemap-index.xml
   ```
4. 「**送信**」ボタンをクリック
5. ステータスが「成功しました」になることを確認

**確認ポイント**: 送信後数時間〜数日でGoogleがクロールを開始します。サイトマップには以下のページが含まれているはずです:
- `https://0ai-inc.com/` （日本語トップ）
- `https://0ai-inc.com/en/` （英語トップ）
- `https://0ai-inc.com/about`
- `https://0ai-inc.com/services`
- `https://0ai-inc.com/contact`
- `https://0ai-inc.com/privacy`
- `https://0ai-inc.com/terms`

---

### 手順2: URL検査とインデックスリクエスト

個別ページのインデックス登録を促進します。特にトップページから先に実施してください。

1. Search Console 上部の検索バーに以下を入力してEnterキーを押す:
   ```
   https://0ai-inc.com/
   ```
2. 「**インデックスに登録済みです**」または「**インデックス登録されていません**」の状態を確認
3. インデックス未登録の場合:「**インデックス登録をリクエスト**」ボタンをクリック
4. 「テストをリクエスト」→「インデックス登録をリクエスト」の順に操作

**推奨実施順序**:
1. `https://0ai-inc.com/` （日本語トップ — 最重要）
2. `https://0ai-inc.com/en/` （英語トップ）
3. `https://0ai-inc.com/about` （会社情報）
4. その他のページ

---

### 手順3: 「0ai」クエリのパフォーマンス確認

「0ai」で検索したときのインプレッション数・クリック数・掲載順位を確認します。

1. Search Console の左サイドバーから「**検索パフォーマンス**」>「**検索結果**」をクリック
2. 「**+新規**」ボタンをクリック > 「クエリ」を選択
3. 「クエリが次を含む」を選び、`0ai` と入力して「適用」
4. 以下の指標を確認:
   - **クリック数**: 実際に0ai-inc.comをクリックした回数
   - **表示回数**: 「0ai」検索結果に0ai-inc.comが表示された回数
   - **平均CTR**: クリック率（クリック数/表示回数）
   - **平均掲載順位**: 検索結果での平均順位（1位が最上位）

**目標指標（M5達成の目安）**:
- 「0ai」クエリでの掲載順位: **10位以内**（1ページ目）
- 表示回数: 週100回以上
- CTR: 5%以上

---

### 手順4: Core Web Vitals の確認

ページ速度がランキングに影響します。問題がある場合はエージェントに修正を依頼してください。

1. Search Console の左サイドバーから「**Core Web Vitals**」をクリック
2. 「**モバイル**」タブで「不良」「改善が必要」なURLを確認
3. 問題のあるURLをクリックして詳細を確認
4. **LCP**（最大コンテンツ描画）が2.5秒以内か確認

---

## M4: 外部ブランド認知向上 — 手動操作手順

### GitHub Organization プロフィールの整備

GitHubのOrganizationページを充実させることで、外部からの参照（sameAs）の信頼性が向上します。

1. [github.com/0ai-Inc](https://github.com/0ai-Inc) にアクセス（存在する場合）
2. 「Edit profile」からプロフィールを設定:
   - **Organization name**: `0ai Inc. (株式会社0ai)`
   - **Website**: `https://0ai-inc.com`
   - **Description**: `0ai (Zero AI) — Reducing the boundary between humans and AI to zero. | 人間とAIの境界を0にする`
   - **Location**: `Tokyo, Japan`

---

### X（旧Twitter）アカウントの開設

X/Twitterアカウントを開設し、ウェブサイトとリンクさせることでブランド認知を強化します。

1. X（https://twitter.com）で新規アカウントを作成
2. 推奨ユーザー名: `@0ai_inc` または `@0ai_official`
3. プロフィール設定:
   - **表示名**: `0ai Inc. (株式会社0ai)`
   - **Bio**: `人間活動のAI化とAIの人間化を追求。Zero AI — 人間とAIの境界を0にする。 #AI #スタートアップ`
   - **Website**: `https://0ai-inc.com`
4. 開設後、Xのプロフィール URL（例: `https://twitter.com/0ai_inc`）をエージェントに伝えると、サイトのOrganization JSON-LDのsameAsに追加します。

---

### Google ビジネスプロフィール（任意）

ローカルSEO強化のため、Googleビジネスプロフィールへの登録を検討してください。

1. [business.google.com](https://business.google.com) にアクセス
2. 「今すぐ開始」から会社名「株式会社0ai」で登録
3. 住所・電話番号・Webサイトを設定
4. オーナー確認（郵便 or 電話）を完了させる

---

## 実施後の確認タイムライン

| タイミング | 確認内容 |
|-----------|---------|
| サイトマップ送信から1〜3日後 | Search Consoleでクロール状況を確認 |
| インデックスリクエストから1〜2週間後 | URL検査で「インデックス登録済み」に変わっているか確認 |
| 1ヶ月後 | 「0ai」クエリの表示回数・掲載順位の変化を確認 |
| 3ヶ月後 | M5達成（掲載順位top10）の評価 |

---

最終更新: 2026-04-03
