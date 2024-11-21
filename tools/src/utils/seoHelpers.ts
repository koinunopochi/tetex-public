import { StructuredDataProps } from "@/types/seo";

export const generateToolSchema = ({
  name,
  description,
  version = '1.0.0',
  category = 'DeveloperApplication',
  features = [],
  programmingLanguage = [],
  author = {
    '@type': 'developer',
    name: 'koinunopochi',
    url: 'https://tetex.tech',
  },
}: {
  name: string;
  description: string;
  version?: string;
  category?: string;
  features?: string[];
  programmingLanguage?: string[];
  author?: {
    '@type': string;
    name: string;
    url: string;
  };
}): StructuredDataProps => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  description,
  applicationCategory: category,
  operatingSystem: 'Web browser',
  softwareVersion: version,
  programmingLanguage,
  featureList: features,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'JPY',
  },
  author,
});
