// types/breadcrumb.ts
export interface BreadcrumbItem {
  label: string; // 表示テキスト
  path?: string; // 内部リンク用パス
  url?: string; // 外部リンク用URL
  isBlank?: boolean; // 新規タブで開くかどうか
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string; // 追加のスタイリング用
}
