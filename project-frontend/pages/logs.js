import { useState } from 'react';

export default function LogsPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [logs, setLogs] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const query = new URLSearchParams({ startDate, endDate });
      const res = await fetch(`http://localhost:8000/api/logs?${query.toString()}`);
      const data = await res.json();
      setLogs(data.logs);
    } catch (err) {
      setError('Failed to fetch logs. Please check your server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">📜 Logs Viewer</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 items-center mb-4">
        <div>
          <label className="block text-sm mb-1">Start Date:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">End Date:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={fetchLogs}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          >
            {loading ? 'Fetching...' : 'Fetch Logs'}
          </button>
        </div>
      </div>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {logs && logs.length > 0 ? (
        <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded max-h-96 overflow-y-auto">
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(logs, null, 2)}
          </pre>
        </div>
      ) : logs && logs.length === 0 ? (
        <div className="text-gray-500 mt-4">No logs found for the selected range.</div>
      ) : null}
    </div>
  );
}
