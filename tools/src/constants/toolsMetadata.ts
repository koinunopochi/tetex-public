import { ToolMetadata } from "@/types/seo";

export const TOOLS_METADATA: ToolMetadata[] = [
  {
    id: 'base64',
    path: '/base64',
    title: 'Base64 エンコーダー/デコーダー',
    description:
      'テキストをBase64形式にエンコード・デコードするオンラインツール',
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    id: 'json-formatter',
    path: '/json-formatter',
    title: 'JSON/XML フォーマッター',
    description: 'JSONやXMLデータを整形し、可読性を向上させるツール',
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    id: 'line-break',
    path: '/line-break',
    title: '改行文字変換ツール',
    description: 'テキストの改行文字を変換するツール',
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    id: 'url-encoder',
    path: '/url-encoder',
    title: 'URL エンコーダー/デコーダー',
    description: 'URLの特殊文字をエンコード・デコードするツール',
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    id: 'timestamp',
    path: '/timestamp',
    title: 'UNIX タイムスタンプ変換ツール',
    description: 'UNIXタイムスタンプと人間が読める日時形式を相互に変換',
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    id: 'color',
    path: '/color',
    title: 'カラーコード変換ツール',
    description: 'HEXカラーコードとRGBカラーコードを相互に変換',
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    id: 'regex',
    path: '/regex',
    title: '正規表現テスター',
    description:
      '正規表現パターンをリアルタイムでテストし、マッチング結果を確認',
    changeFreq: 'monthly',
    priority: 0.8,
  },
];
