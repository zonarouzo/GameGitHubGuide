/*
 * サイト全体の設定ファイル
 * ------------------------------------------------------------
 * ページの順番・テンプレートのURL・スクリーンショットなど、
 * 「後から変わる可能性があるもの」はすべてここにまとめています。
 * 更新方法は README.md を参照してください。
 */
window.SITE_CONFIG = {
  siteName: "ClaudeとGitHubではじめるブラウザゲーム開発（けんちくぶ！）",

  /* 完了チェックの保存名（同じドメインの小説版サイトと混ざらないようにする） */
  storagePrefix: "game-guide-done:",

  /* ゲーム開発テンプレートリポジトリのURL（空欄にすると「準備中」と表示） */
  templateRepoUrl: "https://github.com/zonarouzo/GameTemplate",

  /* 外部リンク（公式サイト） */
  links: {
    github: "https://github.com/",
    githubSignup: "https://github.com/signup",
    githubSecuritySettings: "https://github.com/settings/security",
    githubEmailSettings: "https://github.com/settings/emails",
    claudeCode: "https://claude.ai/code",
    claudeGithubApp: "https://github.com/apps/claude/installations/new",
    githubDocs2fa: "https://docs.github.com/ja/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication",
    githubDocsTemplate: "https://docs.github.com/ja/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template",
    githubDocsPlans: "https://docs.github.com/ja/get-started/learning-about-github/githubs-plans",
    githubDocsPages: "https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site",
    githubDocsTransfer: "https://docs.github.com/ja/repositories/creating-and-managing-repositories/transferring-a-repository",
    claudeCodeWebDocs: "https://code.claude.com/docs/en/web-quickstart",
    capacitor: "https://capacitorjs.com/docs",
    novelGuide: "https://zonarouzo.github.io/NovelGitHubGuide/"
  },

  /*
   * ページの順番
   * step: true のページは「ステップ」として進行状況（○/5）に数えます。
   * ストアリリース対応は、必ず行うものではないので、ステップに数えません。
   */
  pages: [
    { file: "index.html",             title: "トップ",                     short: "トップ" },
    { file: "github-account.html",    title: "GitHubアカウントの作成",       short: "アカウント作成", step: true },
    { file: "create-repository.html", title: "ゲーム用リポジトリの作成と公開", short: "リポジトリ作成", step: true },
    { file: "claude-code.html",       title: "Claude Codeとの連携",         short: "Claude Code連携", step: true },
    { file: "initial-setup.html",     title: "ゲームの初期設定",             short: "初期設定",       step: true },
    { file: "develop.html",           title: "ゲームを作る・遊んで確かめる", short: "作る・遊ぶ",     step: true },
    { file: "handoff.html",           title: "Androidストアリリース対応（けんちくぶ！への引き渡し）", short: "ストアリリース対応" },
    { file: "prompts.html",           title: "プロンプト集",                 short: "プロンプト集" },
    { file: "faq.html",               title: "よくある質問・トラブル解決",   short: "FAQ・トラブル" }
  ],

  /*
   * スクリーンショット（assets/images/screenshots/ に置き、"ID": "ファイル名" で登録）
   * 実際の操作で確認できた画像だけを使ってください。
   */
  screenshots: {
    "pages-settings": "pages-settings.png",
    "template-use-button": "template-use-button.png",
    "claude-code-repo-select": "claude-code-repo-select.png",
    "app-repo-add": "app-repo-add.png",
    "app-repo-select": "app-repo-select.png",
    "template-create-form": "template-create-form.png",
    "github-app-install": "github-app-install.png",
    "chat-html-card": "chat-html-card.png",
    "chat-html-download": "chat-html-download.png"
  },

  /* 画像がまだない枠（画像準備中）を表示するかどうか */
  showScreenshotPlaceholders: false
};
