import { useState } from 'react';

const UnixTimestampConverter = () => {
  const [timestamp, setTimestamp] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [mode, setMode] = useState('toDateTime');

  const handleConvert = () => {
    if (mode === 'toDateTime') {
      const date = new Date(parseInt(timestamp) * 1000);
      setDateTime(date.toISOString().slice(0, 19).replace('T', ' '));
    } else {
      const date = new Date(dateTime);
      setTimestamp(Math.floor(date.getTime() / 1000).toString());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6border rounded-lg border p-3">
      <h2 className="text-2xl font-bold mb-4">UNIX タイムスタンプ変換ツール</h2>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="p-2 border rounded bg-background-main"
          >
            <option value="toDateTime">タイムスタンプ → 日時</option>
            <option value="toTimestamp">日時 → タイムスタンプ</option>
          </select>
        </div>
        {mode === 'toDateTime' ? (
          <input
            type="number"
            placeholder="UNIXタイムスタンプを入力"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="w-full p-2 border rounded bg-background-secondary"
          />
        ) : (
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        )}
        <button
          onClick={handleConvert}
          className="mt-4 w-full bg-background-secondary text-primary py-2 px-4 rounded-md hover:bg-accent2 transition-colors text-sm sm:text-base"
        >
          変換
        </button>
        <div className="p-2 border rounded">
          {(mode === 'toDateTime' ? dateTime : timestamp) || (
            <span className="">結果がここに表示されます</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnixTimestampConverter;
