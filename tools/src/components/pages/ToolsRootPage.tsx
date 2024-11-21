import { SEOHead } from '@/layout/SEOHeadLayout/SEOHeadLayout';
import { generateToolSchema } from '@/utils/seoHelpers';
import { WifiOff, Info, Wifi } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ToolTip = ({
  children,
  isUseWifi = true,
}: {
  children: React.ReactNode;
  isUseWifi?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-flex">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onTouchStart={() => setIsVisible(true)}
        onTouchEnd={() => setIsVisible(false)}
        aria-describedby="tooltip"
      >
        {children}
      </div>
      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className="absolute z-50 w-64 p-2 text-sm -top-2 right-8 
          bg-background-main border border-accent1 rounded-md shadow-lg
          text-primary transition-opacity duration-200"
        >
          <h4 className="font-semibold mb-1">
            {!isUseWifi ? 'フロントエンド実装' : 'サーバーサイド実装'}
          </h4>
          <p className="text-secondary text-sm">
            {!isUseWifi
              ? 'このツールはブラウザ上で完結し、サーバーとの通信を行いません。データは外部に送信されることなく、ローカルで処理されます。'
              : 'このツールはサーバーと通信を行います。データはサーバーに送信され、処理されます。'}
          </p>
        </div>
      )}
    </div>
  );
};

const ToolCard = ({
  title,
  description,
  link,
  isExternal = false,
  isUseWifi = true,
}: {
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
  isUseWifi?: boolean;
}) => (
  <div className="shadow-md rounded-lg p-6 mb-4 border">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <ToolTip isUseWifi={isUseWifi}>
        <div className="flex items-center gap-1 text-secondary cursor-help">
          {isUseWifi ? (
            <Wifi size={20} className="text-accent1" />
          ) : (
            <WifiOff size={20} className="text-accent1" />
          )}
          <Info size={16} />
        </div>
      </ToolTip>
    </div>
    <p className="mb-4">{description}</p>
    {isExternal ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full bg-background-secondary text-primary py-2 px-4 rounded-md hover:bg-accent2 transition-colors text-sm sm:text-base inline-block text-center"
      >
        ツールを使用する
      </a>
    ) : (
      <Link
        to={link}
        className="mt-4 w-full bg-background-secondary text-primary py-2 px-4 rounded-md hover:bg-accent2 transition-colors text-sm sm:text-base inline-block text-center"
      >
        ツールを使用する
      </Link>
    )}
  </div>
);

const ToolsRootPage = () => {
  const internalTools = [
    {
      title: 'Base64 エンコーダー/デコーダー',
      description:
        'テキストをBase64形式にエンコードしたり、Base64からデコードしたりするツールです。データの変換や送信時に便利です。',
      link: '/base64',
      isUseWifi: false,
    },
    {
      title: 'JSON/XML フォーマッター',
      description:
        'JSONやXMLデータを整形し、読みやすく表示するツールです。コメント付きJSONにも対応しています。',
      link: '/format',
      isUseWifi: false,
    },
    {
      title: '改行文字変換ツール',
      description:
        'テキストの改行文字を変換します。一般的な改行文字の選択やカスタム文字の指定が可能です。',
      link: '/newline-converter',
      isUseWifi: false,
    },
    {
      title: 'URL エンコーダー/デコーダー',
      description:
        'URLの特殊文字をエンコード/デコードするツールです。Web開発やAPIテストに便利です。',
      link: '/url-encoder-decoder',
      isUseWifi: false,
    },
    {
      title: 'UNIX タイムスタンプ変換ツール',
      description:
        'UNIXタイムスタンプと人間が読める日時形式を相互に変換します。データ処理やログ解析に役立ちます。',
      link: '/unix-timestamp-converter',
      isUseWifi: false,
    },
    {
      title: 'カラーコード変換ツール',
      description:
        'HEXカラーコードとRGBカラーコードを相互に変換します。Web設計やUIデザインに便利です。',
      link: '/color-code-converter',
      isUseWifi: false,
    },
    {
      title: '正規表現テスター',
      description:
        '正規表現パターンをリアルタイムでテストし、マッチング結果を確認できるツールです。パターンの作成や検証、デバッグに役立ちます。',
      link: '/regex-tester',
      isUseWifi: false,
    },
  ];

  const externalTools = {
    コーディング支援: [
      {
        title: '変数名生成ツール',
        description: 'プログラミングの変数名を簡単に考えられるツールです。',
        link: 'https://codic.jp/engine',
      },
      {
        title: 'JSON Formatter & Validator',
        description:
          'JSONデータのフォーマットと検証を行うオンラインツールです。',
        link: 'https://jsonformatter.curiousconcept.com/',
      },
      {
        title: 'Regex101',
        description: '正規表現のテストと解説を行うツールです。',
        link: 'https://regex101.com/',
      },
    ],
    デザイン: [
      {
        title: 'イラスト素材',
        description: 'シンプルで使いやすいイラスト素材を提供しています。',
        link: 'https://loosedrawing.com/illust/1460/',
      },
      {
        title: 'カラーパレット生成',
        description: '色の組み合わせを簡単に見つけられるツールです。',
        link: 'https://coolors.co/000000-291528-3a3e3b-f0eff4-9e829c',
      },
      {
        title: 'Googleアイコン',
        description: 'Googleが提供する豊富なアイコンセットです。',
        link: 'https://fonts.google.com/icons',
      },
      {
        title: 'フリーアイコン集',
        description: '多様なフリーアイコンを提供しています。',
        link: 'https://icooon-mono.com/category/other/page/20/',
      },
      {
        title: 'CSS Grid Generator',
        description: 'CSSグリッドレイアウトを視覚的に作成できるツールです。',
        link: 'https://cssgrid-generator.netlify.app/',
      },
      {
        title: 'Favicon Generator',
        description: '様々なサイズのファビコンを生成するツールです。',
        link: 'https://realfavicongenerator.net/',
      },
    ],
    ユーティリティ: [
      {
        title: 'AWSコスト計算',
        description: 'AWSサービスのコストを簡単に計算できます。',
        link: 'https://aws-rough.cc/',
      },
      {
        title: '絵文字コピーツール',
        description: '様々な絵文字をコピーして使用できます。',
        link: 'https://emojigraph.org/ja/party-popper/',
      },
      {
        title: 'Lorem Ipsum Generator',
        description: 'ダミーテキストを生成するツールです。',
        link: 'https://loremipsum.io/',
      },
      {
        title: 'Optimize Images',
        description: '画像を最適化して圧縮するツールです。',
        link: 'https://imagecompressor.com/',
      },
    ],
    参考資料: [
      {
        title: 'サービスロゴまとめ',
        description: '様々なサービスのロゴをまとめて確認できます。',
        link: 'https://qiita.com/Ry0xi/items/857687c892f783955fe1#python%E5%85%AC%E5%BC%8F',
      },
      {
        title: 'Can I Use',
        description: 'ウェブ技術の互換性をブラウザごとに確認できるツールです。',
        link: 'https://caniuse.com/',
      },
      {
        title: 'Public APIs',
        description: '無料で使用できるAPIのリストです。',
        link: 'https://github.com/public-apis/public-apis',
      },
      {
        title: 'DevDocs',
        description:
          '多数のプログラミング言語やフレームワークのドキュメントを一箇所で検索できるツールです。',
        link: 'https://devdocs.io/',
      },
    ],
  };

    const portalSchema = generateToolSchema({
      name: 'tetex developer tools',
      description: '開発者のための便利なツールを提供するポータルサイト',
      features: [
        'JSON整形・バリデーション',
        '正規表現テスト',
        '文字列変換ツール',
        '開発者ユーティリティ',
      ],
      programmingLanguage: ['TypeScript', 'React'],
    });

  return (
    <>
      <SEOHead
        title="開発者向けツール集"
        description="開発者のための便利なツールを提供するポータルサイト。JSONフォーマッター、正規表現テスター、その他開発に役立つツールを集めています。"
        path="/"
        keywords={[
          '開発者ツール',
          'プログラミング',
          'Web開発',
          'JSON',
          '正規表現',
          'ユーティリティ',
        ]}
        schema={portalSchema}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary">開発ツール</h1>

        {/* 目次セクション */}
        <nav className="mb-8 p-4 bg-background-secondary rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-primary">目次</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#internal-tools"
                className="link transition-colors hover:text-accent1"
              >
                内部ツール
              </a>
            </li>
            <li>
              <a
                href="#external-tools"
                className="link transition-colors hover:text-accent1"
              >
                外部おすすめツール・サイト
              </a>
              <ul className="ml-4 mt-1 space-y-1">
                {Object.keys(externalTools).map((category) => (
                  <li key={category}>
                    <a
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="link transition-colors hover:text-accent1"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        {/* 内部ツールセクション */}
        <section id="internal-tools">
          <h2 className="text-2xl font-bold mb-4 text-primary">内部ツール</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {internalTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </section>

        {/* 外部ツールセクション */}
        <section id="external-tools">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            外部おすすめツール・サイト
          </h2>
          <p className="text-error mb-4">
            ※ 安全性を保障するものではないことに注意してください。
          </p>
          {Object.entries(externalTools).map(([category, tools]) => (
            <div
              key={category}
              id={category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-8"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <ToolCard key={index} {...tool} isExternal={true} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default ToolsRootPage;
