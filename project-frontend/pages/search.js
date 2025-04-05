import { useState } from 'react'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [itemId, setItemId] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchItem = async () => {
    if (!itemId && !searchTerm) {
      setError('Please enter either Item ID or Name.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const query = new URLSearchParams()
      if (itemId) query.append('itemId', itemId)
      if (searchTerm) query.append('itemName', searchTerm)

      const res = await fetch(`http://localhost:8000/api/search?${query.toString()}`)
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError('Failed to fetch item. Check your server.')
    } finally {
      setLoading(false)
    }
  }

  const retrieveItem = async (itemId) => {
    const payload = {
      itemId,
      userId: 'astronaut_1',
      timestamp: new Date().toISOString()
    }
    const res = await fetch('http://localhost:8000/api/retrieve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    alert(`Retrieve response: ${JSON.stringify(data)}`)
  }

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">🔍 Search & Retrieve Item</h1>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="text"
          placeholder="Search by Item Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-full dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      <button
        onClick={searchItem}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <div className="text-red-600 mt-4">{error}</div>}

      {result && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
          {result.item ? (
            <>
              <h2 className="text-lg font-semibold mb-2">📦 Item Found</h2>
              <pre className="text-sm whitespace-pre-wrap mb-4">
                {JSON.stringify(result.item, null, 2)}
              </pre>
              <button
                onClick={() => retrieveItem(result.item.itemId)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
              >
                Retrieve Item
              </button>
            </>
          ) : (
            <div className="text-gray-600">No item found.</div>
          )}
        </div>
      )}
    </div>
  )
}
