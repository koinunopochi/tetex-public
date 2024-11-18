import { TOOL_SCHEMAS } from '@/constants/toolSchemas';
import { SEOHead } from '@/layout/SEOHeadLayout/SEOHeadLayout';
import { useState } from 'react';

const URLEncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');

  const handleConvert = () => {
    if (mode === 'encode') {
      setOutput(encodeURIComponent(input));
    } else {
      try {
        setOutput(decodeURIComponent(input));
      } catch (error) {
        setOutput('エラー: 無効な入力です');
      }
    }
  };

  return (
    <>
      <SEOHead
        title="URL エンコーダー/デコーダー"
        description="URLの特殊文字をエンコード・デコードするオンラインツール。Web開発やAPIテスト時に必要なURL文字列の変換を簡単に行えます。"
        path="/tools/url-encoder"
        type="article"
        keywords={[
          'URL',
          'エンコード',
          'デコード',
          'percent encoding',
          'URLエスケープ',
          'Web開発',
          'API',
        ]}
        schema={TOOL_SCHEMAS.urlEncoder}
      />
      <div className="w-full max-w-2xl mx-auto p-6 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">URL エンコーダー/デコーダー</h2>
        <div className="space-y-4">
          <textarea
            placeholder="変換するテキストを入力してください"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-40 p-2 border rounded bg-background-secondary"
          />
          <div className="flex space-x-4">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="p-2 border rounded bg-background-main"
            >
              <option value="encode">エンコード</option>
              <option value="decode">デコード</option>
            </select>
            <button
              onClick={handleConvert}
              className="mt-4 w-full bg-background-secondary text-primary py-2 px-4 rounded-md hover:bg-accent2 transition-colors text-sm sm:text-base"
            >
              変換
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            className="w-full h-40 p-2 border rounded bg-background-secondary "
          />
        </div>
      </div>
    </>
  );
};

export default URLEncoderDecoder;
