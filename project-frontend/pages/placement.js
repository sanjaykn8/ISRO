import { useState } from 'react';
import Link from 'next/link';

export default function PlacementPage() {
  const [itemsJSON, setItemsJSON] = useState('');
  const [containersJSON, setContainersJSON] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const parseAndSortItems = (items) => {
    return items
      .filter(item => item.priority !== undefined && item.expiry !== undefined)
      .sort((a, b) => {
        if (b.priority !== a.priority) return b.priority - a.priority;
        return new Date(a.expiry) - new Date(b.expiry);
      });
  };

  const callPlacement = async () => {
    try {
      const parsedItems = parseAndSortItems(JSON.parse(itemsJSON));
      const parsedContainers = JSON.parse(containersJSON);

      const payload = {
        items: parsedItems,
        containers: parsedContainers
      };

      const res = await fetch('http://localhost:8000/api/placement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to get response from API');

      const data = await res.json();
      setResult(data);
      setError('');
    } catch (err) {
      setError('Invalid input or server error: ' + err.message);
      setResult(null);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">📍 Placement Recommendations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea
          placeholder="Enter items JSON..."
          value={itemsJSON}
          onChange={(e) => setItemsJSON(e.target.value)}
          className="w-full h-40 border p-3 rounded text-sm dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder="Enter containers JSON..."
          value={containersJSON}
          onChange={(e) => setContainersJSON(e.target.value)}
          className="w-full h-40 border p-3 rounded text-sm dark:bg-gray-800 dark:text-white"
        />
      </div>

      <button
        onClick={callPlacement}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
      >
        🚀 Get Optimized Placement
      </button>

      {error && (
        <div className="mt-4 text-red-500 bg-red-100 p-3 rounded">{error}</div>
      )}

      {result && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
          <h2 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">🧠 Placement Result</h2>

          <div className="mb-4">
            <h3 className="font-bold text-green-600 dark:text-green-400">✅ Placements</h3>
            <pre className="overflow-x-auto whitespace-pre-wrap text-gray-800 dark:text-gray-100">
              {JSON.stringify(result.placements, null, 2)}
            </pre>
          </div>

          {result.rearrangements && result.rearrangements.length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold text-yellow-600 dark:text-yellow-300">♻️ Rearrangement Suggestions</h3>
              <pre className="overflow-x-auto whitespace-pre-wrap text-yellow-800 dark:text-yellow-200">
                {JSON.stringify(result.rearrangements, null, 2)}
              </pre>
            </div>
          )}

          {result.unplaced && result.unplaced.length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold text-red-600 dark:text-red-400">🚫 Unplaceable Items</h3>
              <pre className="overflow-x-auto whitespace-pre-wrap text-red-800 dark:text-red-200">
                {JSON.stringify(result.unplaced, null, 2)}
              </pre>
            </div>
          )}

          <Link href="/simulate">
            <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded">
              ⏩ Simulate After Placement
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
