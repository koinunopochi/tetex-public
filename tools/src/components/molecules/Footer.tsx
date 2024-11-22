import { Heart, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background-main border-t border-primary mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴとコピーライト */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold text-primary mb-2">tetex.tech</h2>
            <p className="text-sm text-secondary">
              © {currentYear} tetex.tech All rights reserved.
            </p>
          </div>

          {/* リンクセクション */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-primary mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://tetex.tech/about"
                  className="link transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://tetex.tech/terms"
                  className="link transition-colors"
                >
                  利用規約
                </a>
              </li>
              <li>
                <a
                  href="https://tetex.tech/privacy"
                  className="link transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="https://tools.tetex.tech"
                  className="link transition-colors"
                >
                  開発支援ツール
                </a>
              </li>
            </ul>
          </div>

          {/* SNSとコンタクト */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contact & Social
            </h3>
            <div className="flex space-x-4">
              <a
                href="mailto:koinunopoti@gmail.com"
                className="link transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/koinunopochi/ttx-public"
                className="link transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 text-center">
          <p className="text-sm text-secondary flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-primary" /> in Japan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
