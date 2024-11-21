import { generateToolSchema } from '../utils/seoHelpers';

export const TOOL_SCHEMAS = {
  base64: generateToolSchema({
    name: 'Base64 エンコーダー/デコーダー',
    description:
      'テキストをBase64形式にエンコード・デコードするオンラインツール。データの変換や送信時に便利なユーティリティです。',
    features: [
      'テキストのBase64エンコード',
      'Base64のテキストデコード',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),

  jsonXmlFormatter: generateToolSchema({
    name: 'JSON/XML フォーマッター',
    description:
      'JSONやXMLデータを整形し、可読性を向上させるツール。コメント付きJSONにも対応しています。',
    features: [
      'JSONの整形と圧縮',
      'XMLの整形と圧縮',
      'コメント付きJSONのサポート',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),

  lineBreakConverter: generateToolSchema({
    name: '改行文字変換ツール',
    description:
      'テキストの改行文字を異なる形式に変換するツール。一般的な改行文字の選択やカスタム文字の指定が可能です。',
    features: [
      'LF/CRLF/CR変換',
      'カスタム改行文字指定',
      '一括変換機能',
      'プレビュー表示',
      '文字コード表示',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),

  urlEncoder: generateToolSchema({
    name: 'URL エンコーダー/デコーダー',
    description:
      'URLの特殊文字をエンコード・デコードするツール。Web開発やAPIテストに不可欠なユーティリティです。',
    features: [
      'URLエンコード',
      'URLデコード',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),

  unixTimestamp: generateToolSchema({
    name: 'UNIX タイムスタンプ変換ツール',
    description:
      'UNIXタイムスタンプと人間が読める日時形式を相互に変換するツール。データ処理やログ解析に役立ちます。',
    features: [
      'タイムスタンプ変換',
      '日時フォーマット変換',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),

  colorConverter: generateToolSchema({
    name: 'カラーコード変換ツール',
    description:
      'HEXカラーコードとRGBカラーコードを相互に変換するツール。Web設計やUIデザインに便利なユーティリティです。',
    features: [
      'HEX⇔RGB変換',
      'カラーピッカー',
      'パレット機能',
      '色の類似色表示',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),

  regexTester: generateToolSchema({
    name: '正規表現テスター',
    description:
      '正規表現パターンをリアルタイムでテストし、マッチング結果を確認できるツール。パターンの作成や検証、デバッグに最適です。',
    features: [
      'リアルタイムテスト',
      'マッチング結果表示',
      'パターン説明',
      'サンプルパターン',
      '置換機能',
    ],
    programmingLanguage: ['TypeScript', 'React'],
  }),
};
