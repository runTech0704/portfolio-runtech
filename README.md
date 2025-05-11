# 藤原悟のポートフォリオサイト

モダンでレスポンシブなポートフォリオサイトです。React、Tailwind CSS、Framer Motionを使用して構築されています。

## 特徴

- **モダンなデザイン**: Tailwind CSSを使用したスタイリッシュでクリーンなデザイン
- **レスポンシブ**: あらゆるデバイスサイズで最適に表示
- **ダークモード対応**: ユーザーの環境設定に応じたカラーテーマの自動切り替え
- **スムーズなアニメーション**: Framer Motionを使用したエレガントなアニメーション効果
- **セクション構成**: 
  - 自己紹介
  - スキル・技術スタック
  - プロジェクト紹介
  - 経歴・職歴
  - Q&A
  - お問い合わせフォーム

## 使用技術

- **React**: UIコンポーネント構築
- **Tailwind CSS**: スタイリング
- **Framer Motion**: アニメーション
- **React Icons**: アイコン
- **React Scroll**: スムーズスクロール
- **React Type Animation**: タイピングアニメーション
- **React Intersection Observer**: スクロールベースのアニメーション

## インストール方法

```bash
# リポジトリをクローン
git clone https://github.com/your-github/portfolio.git

# ディレクトリに移動
cd portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm start
```

## カスタマイズ方法

1. `src/components/` 内の各コンポーネントを編集して、内容をカスタマイズできます。
2. 色やフォントなどのスタイル設定は `tailwind.config.js` で変更できます。
3. プロジェクトデータは `src/components/Projects.js` 内の `projects` 配列を編集してください。
4. スキルデータは `src/components/Skills.js` 内の `skillCategories` を編集してください。

## デプロイ方法

```bash
# 本番用ビルドを作成
npm run build

# ビルドされたファイルは `build` ディレクトリに格納されます
# お好みのホスティングサービス（Netlify、Vercel、GitHub Pagesなど）にデプロイしてください
```

## ライセンス

MIT

---

制作: 藤原悟