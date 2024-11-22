# tetex.tech UI ライブラリ

tetex.techで使用されているUIコンポーネントライブラリです。Reactで構築され、Tailwind CSSを使用してスタイリングされています。

## インストール

```bash
npm install @tetex-public/ui
```

または

```bash
yarn add @tetex-public/ui
```

## 使い方

基本的な使用例:

```tsx
import ArticlePage from './components/pages/ArticlePage';
import { ThemeProvider, BasePageLayout } from '@tetex-public/ui';
import '@tetex-public/ui/style.css';

function App() {
  return (
    <ThemeProvider>
      <BasePageLayout headerProps={{ defaultLabel: '記事', defaultPath: '/' }}>
        <ArticlePage />
      </BasePageLayout>
    </ThemeProvider>
  );
}

export default App;
```

## 重要な注意事項

現在の版では型定義ファイル（`.d.ts`）のエクスポートに制限があります。そのため、TypeScriptプロジェクトで使用する際に型エラーが表示される可能性がありますが、実際の機能は正常に動作します。この問題は次回のアップデートで解決予定です。

### 一時的な対処方法

型エラーを回避するには、以下のいずれかの方法を使用してください：

1. `tsconfig.json`の`compilerOptions`に以下を追加:
```json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "skipLibCheck": true
  }
}
```

2. または、型アサーションを使用:
```tsx
import { ThemeProvider, BasePageLayout } from '@tetex-public/ui';
const Layout = BasePageLayout as any;
```

## 主要なコンポーネント

### ThemeProvider

アプリケーション全体のテーマを管理します。全てのコンポーネントをThemeProviderで囲む必要があります。

```tsx
<ThemeProvider>
  {/* 子コンポーネント */}
</ThemeProvider>
```

### BasePageLayout

ページの基本レイアウトを提供します。ヘッダーとフッターを含みます。

```tsx
<BasePageLayout
  headerProps={{
    defaultLabel: 'ホーム',
    defaultPath: '/',
  }}
>
  {/* ページコンテンツ */}
</BasePageLayout>
```

#### 主なprops

- `headerProps`: ヘッダーの設定
  - `defaultLabel`: デフォルトのラベル
  - `defaultPath`: デフォルトのパス
## スタイリング

このライブラリはTailwind CSSを使用しています。独自のプレフィックス`ttx-`を使用してクラス名の衝突を防いでいます。

```tsx
// 例
<div className="ttx-container ttx-mx-auto ttx-p-4">
```

## 必須依存関係

- React 18.0.0以上
- Tailwind CSS 3.0.0以上

## 開発環境のセットアップ

```bash
# インストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## コントリビューション

バグ報告や機能要望は、GitHubのIssueトラッカーをご使用ください。プルリクエストも歓迎します。

## 今後の予定

- 型定義ファイルの完全なサポート
- コンポーネントのドキュメント整備
- テストカバレッジの向上

## サポート

質問や問題がある場合は、GitHubのIssueでお知らせください。
