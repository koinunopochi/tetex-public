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
