import { Heart, Mail, Github } from 'lucide-react';

export interface FooterProps{}

export const Footer = () => {
  const currentYear = '2024';

  return (
    <footer className="ttx-w-full ttx-bg-background-main ttx-border-t ttx-border-primary ttx-mt-10">
      <div className="ttx-max-w-7xl ttx-mx-auto ttx-px-4 ttx-py-8">
        <div className="ttx-grid ttx-grid-cols-1 md:ttx-grid-cols-3 ttx-gap-8">
          <div className="ttx-flex ttx-flex-col ttx-items-center md:ttx-items-start">
            <h2 className="ttx-text-xl ttx-font-bold ttx-text-primary ttx-mb-2">
              tetex.tech
            </h2>
            <p className="ttx-text-sm ttx-text-secondary">
              © {currentYear} tetex.tech All rights reserved.
            </p>
          </div>

          <div className="ttx-flex ttx-flex-col ttx-items-center md:ttx-items-start">
            <h3 className="ttx-text-lg ttx-font-semibold ttx-text-primary ttx-mb-4">
              Links
            </h3>
            <ul className="ttx-space-y-2">
              <li>
                <a
                  href="https://tetex.tech/about"
                  className="ttx-link ttx-transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://tetex.tech/terms"
                  className="ttx-link ttx-transition-colors"
                >
                  利用規約
                </a>
              </li>
              <li>
                <a
                  href="https://tetex.tech/privacy"
                  className="ttx-link ttx-transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="https://tools.tetex.tech"
                  className="ttx-link ttx-transition-colors"
                >
                  開発支援ツール
                </a>
              </li>
            </ul>
          </div>

          <div className="ttx-flex ttx-flex-col ttx-items-center md:ttx-items-start">
            <h3 className="ttx-text-lg ttx-font-semibold ttx-text-primary ttx-mb-4">
              Contact & Social
            </h3>
            <div className="ttx-flex ttx-space-x-4">
              <a
                href="mailto:koinunopoti@gmail.com"
                className="ttx-link ttx-transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/koinunopochi/ttx-public"
                className="ttx-link ttx-transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="ttx-mt-8 ttx-text-center">
          <p className="ttx-text-sm ttx-text-secondary ttx-flex ttx-items-center ttx-justify-center">
            Made with{' '}
            <Heart className="ttx-h-4 ttx-w-4 ttx-mx-1 ttx-text-primary" /> in
            Japan
          </p>
        </div>
      </div>
    </footer>
  );
};
