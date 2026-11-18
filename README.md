# ClaudeとGitHubではじめるブラウザゲーム開発

**🌐 公開サイト：https://zonarouzo.github.io/GameGitHubGuide/**（GitHub Pages の設定後）

GitHub とブラウザ版 Claude Code を使って、HTML のブラウザゲームを作り、スマホで遊んで確かめ、チームの代表者が Android アプリにするまでを、GitHub 未経験者向けに解説する HowTo サイトです。
HTML / CSS / JavaScript だけで作っています（ビルド不要・外部サービス不要）。

- ゲーム開発テンプレート：https://github.com/zonarouzo/GameTemplate
- 姉妹サイト（小説版）：https://zonarouzo.github.io/NovelGitHubGuide/

## ページ構成

| ファイル | ページ | 種類 |
|---|---|---|
| `index.html` | トップ | — |
| `github-account.html` | GitHubアカウントの作成 | ステップ1 |
| `create-repository.html` | ゲーム用リポジトリの作成と公開（GitHub Pages） | ステップ2 |
| `claude-code.html` | Claude Codeとの連携 | ステップ3 |
| `initial-setup.html` | ゲームの初期設定 | ステップ4 |
| `develop.html` | ゲームを作る・遊んで確かめる | ステップ5 |
| `handoff.html` | 代表者への引き渡し（移管・Organization） | ステップ6 |
| `prompts.html` | プロンプト集 | 資料 |
| `faq.html` | よくある質問・トラブル解決 | 資料 |
| `404.html` | ページが見つからないとき | — |

## ファイル構成

```
├── CLAUDE.md                 … Claude 用の作業ルール（日本語で報告する等）
├── index.html ほか各ページ（.html）
├── 404.html
├── favicon.svg
├── .nojekyll
└── assets/
    ├── css/style.css         … デザイン（色は先頭の :root で一括管理）
    ├── js/config.js          … ★サイトの設定（ページ順・テンプレートURL・外部リンク・スクリーンショット）
    ├── js/prompts.js         … ★プロンプトの文面
    ├── js/main.js            … メニュー・進行状況・前へ/次へ・コピーボタンなどの動き
    └── images/screenshots/   … 画面画像の置き場所
```

サイトの仕組み（`main.js`・`style.css`）は、小説版サイトと共通です。片方を直したら、もう一方にも反映するか検討してください。
完了チェックの保存名は `config.js` の `storagePrefix`（`game-guide-done:`）で、同じドメインの小説版と混ざらないようにしています。

## よくある更新のしかた

更新のしかた（プロンプトの追加、スクリーンショットの追加、ページの追加、本文の部品の使い分け）は、小説版サイトの README と同じです。
→ https://github.com/zonarouzo/NovelGitHubGuide#よくある更新のしかた

### スクリーンショットの枠

| ID | ページ | 内容 | 状態 |
|---|---|---|---|
| `template-create-form` | リポジトリ作成 | リポジトリの作成画面 | 登録済み（小説版と共通の画像） |
| `github-app-install` | Claude Code連携 | Claude に許可するリポジトリを選ぶ画面 | 登録済み（小説版と共通の画像） |
| `pages-settings` | リポジトリ作成 | GitHub Pages の設定画面 | 未登録 |
| `github-signup` ほか | アカウント作成 | 小説版と同じ枠 | 未登録 |

## GitHub Pages での公開設定

1. リポジトリの **Settings** → 左のメニューの **Pages**
2. 「Source」で **Deploy from a branch**、ブランチで **main**、フォルダで **/ (root)** を選んで **Save**
3. 数分後、`https://zonarouzo.github.io/GameGitHubGuide/` で公開されます
