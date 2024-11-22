import Character from '@/assets/with_character_logo.svg';

export interface LoadingProps {
  /** ローディングテキスト。デフォルトは「読み込み中...」 */
  text?: string;
  /** ロゴの表示有無。デフォルトはtrue */
  showLogo?: boolean;
  /** アニメーションラインの長さ（%）。デフォルトは30 */
  lineWidth?: number;
}

export const Loading: React.FC<LoadingProps> = ({
  text = '読み込み中...',
  showLogo = true,
  lineWidth = 30,
}) => {
  return (
    <div className="ttx-flex ttx-flex-col ttx-items-center ttx-justify-center ttx-min-h-[50vh] ttx-w-full">
      {showLogo && (
        <div className="ttx-mb-0">
          <img
            src={Character}
            alt="tetex.tech"
            className="ttx-w-48 ttx-h-48"
          />
        </div>
      )}

      {/* モールス信号風のアニメーションライン */}
      <div className="ttx-w-full ttx-max-w-md ttx-px-4 ttx-mb-6">
        <div className="ttx-relative ttx-w-full ttx-h-0.5 ttx-bg-background-secondary ttx-overflow-hidden">
          <div
            className="ttx-absolute ttx-top-0 ttx-h-full ttx-bg-primary ttx-animate-morse"
            style={{ width: `${lineWidth}%` }}
          />
        </div>
      </div>

      {text && <p className="ttx-text-secondary ttx-text-sm">{text}</p>}
    </div>
  );
};
