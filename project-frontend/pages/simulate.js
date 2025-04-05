import { useState } from 'react'

export default function SimulatePage() {
  const [numDays, setNumDays] = useState(1)
  const [itemsToUse, setItemsToUse] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const simulateTime = async () => {
    setError('')
    setLoading(true)

    let itemsParsed = []
    try {
      if (itemsToUse) {
        itemsParsed = JSON.parse(itemsToUse)
        if (!Array.isArray(itemsParsed)) throw new Error()
      }
    } catch {
      setError('❌ Invalid JSON format for items. Please provide a valid array.')
      setLoading(false)
      return
    }

    const payload = {
      numOfDays: parseInt(numDays),
      itemsToBeUsedPerDay: itemsParsed
    }

    try {
      const res = await fetch('http://localhost:8000/api/simulate/day', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setError('Failed to simulate. Check server or input.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">⏳ Time Simulation</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Number of Days:</label>
        <input 
          type="number" 
          value={numDays}
          onChange={(e) => setNumDays(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Items To Be Used Per Day (JSON format):</label>
        <textarea
          placeholder='e.g., [{"itemId": "F101", "name": "Food Pack"}]'
          value={itemsToUse}
          onChange={(e) => setItemsToUse(e.target.value)}
          className="w-full h-40 border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      <button
        onClick={simulateTime}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        {loading ? 'Simulating...' : 'Simulate'}
      </button>

      {error && <div className="text-red-600 mt-4">{error}</div>}

      {result && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🧪 Simulation Result</h2>
          <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
