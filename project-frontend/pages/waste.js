import { useState } from 'react'

export default function WastePage() {
  const [returnPlan, setReturnPlan] = useState(null)
  const [undockingContainer, setUndockingContainer] = useState('')
  const [undockingDate, setUndockingDate] = useState(() => new Date().toISOString().slice(0, 16))
  const [maxWeight, setMaxWeight] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const identifyWaste = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:8000/api/waste/identify')
      const data = await res.json()
      setReturnPlan(data)
    } catch (err) {
      setError('Failed to fetch waste items.')
    } finally {
      setLoading(false)
    }
  }

  const getReturnPlan = async () => {
    setLoading(true)
    setError('')
    const payload = {
      undockingContainerId: undockingContainer,
      undockingDate,
      maxWeight: parseFloat(maxWeight)
    }

    try {
      const res = await fetch('http://localhost:8000/api/waste/return-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setReturnPlan(data)
    } catch (err) {
      setError('Failed to get return plan.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">♻️ Waste Management & Return Plan</h1>

      <button
        onClick={identifyWaste}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mb-6"
      >
        {loading ? 'Identifying Waste...' : 'Identify Waste Items'}
      </button>

      <h2 className="text-lg font-semibold mb-2">📦 Create Return Plan</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Undocking Container ID"
          value={undockingContainer}
          onChange={(e) => setUndockingContainer(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="datetime-local"
          value={undockingDate}
          onChange={(e) => setUndockingDate(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="number"
          placeholder="Max Weight (kg)"
          value={maxWeight}
          onChange={(e) => setMaxWeight(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
        />
      </div>
      <button
        onClick={getReturnPlan}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
      >
        {loading ? 'Generating Plan...' : 'Get Return Plan'}
      </button>

      {error && <div className="text-red-600 mt-4">{error}</div>}

      {returnPlan && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">📋 Result</h2>
          <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(returnPlan, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
