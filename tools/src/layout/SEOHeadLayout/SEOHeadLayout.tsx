import { Helmet } from 'react-helmet-async';
import { MetaTagsProps, StructuredDataProps } from '../../types/seo';

interface SEOHeadProps extends MetaTagsProps {
  schema?: StructuredDataProps;
}

export const SEOHead = ({
  title,
  description,
  path,
  type = 'website',
  keywords = [],
  noindex = false,
  schema,
}: SEOHeadProps) => {
  const baseUrl = 'https://tools.tetex.tech';
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title} | tetex tools`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* OGP Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="tetex tools" />

      {/* Technical SEO */}
      <link rel="canonical" href={fullUrl} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow'}
      />

      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(',')} />
      )}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};
