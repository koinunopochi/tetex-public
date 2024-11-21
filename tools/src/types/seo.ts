export interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  keywords?: string[];
  noindex?: boolean;
}

export interface StructuredDataProps {
  '@context': 'https://schema.org';
  '@type': string;
  name: string;
  description: string;
  [key: string]: any;
}

export interface ToolMetadata {
  id: string;
  path: string;
  title: string;
  description: string;
  lastModified?: string;
  changeFreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
}
