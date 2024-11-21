import { writeFileSync } from 'fs';
import { TOOLS_METADATA } from '../src/constants/toolsMetadata';

interface SitemapConfig {
  baseUrl: string;
  excludePaths?: string[];
  additionalPages?: {
    path: string;
    lastmod?: string;
    changefreq?: string;
    priority?: number;
  }[];
}

class SitemapGenerator {
  private config: SitemapConfig;
  private currentDate: string;

  constructor(config: SitemapConfig) {
    this.config = config;
    this.currentDate = new Date().toISOString();
  }

  private generateUrlEntry(
    path: string,
    lastmod: string = this.currentDate,
    changefreq: string = 'monthly',
    priority: number = 0.8
  ): string {
    const fullUrl = `${this.config.baseUrl}${path}`;
    return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  private generateToolsEntries(): string {
    return TOOLS_METADATA.filter(
      (tool) => !this.config.excludePaths?.includes(tool.path)
    )
      .map((tool) =>
        this.generateUrlEntry(
          tool.path,
          tool.lastModified || this.currentDate,
          tool.changeFreq || 'monthly',
          tool.priority || 0.8
        )
      )
      .join('');
  }

  private generateAdditionalEntries(): string {
    return (this.config.additionalPages || [])
      .map((page) =>
        this.generateUrlEntry(
          page.path,
          page.lastmod || this.currentDate,
          page.changefreq || 'monthly',
          page.priority || 0.5
        )
      )
      .join('');
  }

  public generate(): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${this.config.baseUrl}</loc>
    <lastmod>${this.currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>${this.generateToolsEntries()}${this.generateAdditionalEntries()}
</urlset>`;

    return sitemap;
  }

  public saveToFile(filePath: string): void {
    writeFileSync(filePath, this.generate());
    console.log(`Sitemap generated successfully at: ${filePath}`);
  }
}

// サイトマップの生成
const generator = new SitemapGenerator({
  baseUrl: 'https://tools.tetex.tech',
  excludePaths: ['/internal', '/test'],
  additionalPages: [],
});

// public/sitemap.xmlに保存
generator.saveToFile('public/sitemap.xml');
