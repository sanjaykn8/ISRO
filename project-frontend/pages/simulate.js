import { useState } from 'react'

export default function SimulatePage() {
  const [numDays, setNumDays] = useState(1)
  const [itemsToUse, setItemsToUse] = useState('')
  const [result, setResult] = useState(null)

  const simulateTime = async () => {
    const payload = {
      numOfDays: parseInt(numDays),
      itemsToBeUsedPerDay: itemsToUse ? JSON.parse(itemsToUse) : []
    }
    const res = await fetch('http://localhost:8000/api/simulate/day', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Time Simulation</h1>
      <div className="my-2">
        <label>Number of Days:</label>
        <input 
          type="number" 
          value={numDays}
          onChange={(e) => setNumDays(e.target.value)}
          className="border p-2 ml-2"
        />
      </div>
      <textarea
        placeholder='Enter itemsToBeUsedPerDay as JSON (e.g., [{"itemId": "F101", "name": "Food Pack"}])'
        value={itemsToUse}
        onChange={(e) => setItemsToUse(e.target.value)}
        className="w-full h-32 border p-2 my-2"
      />
      <button onClick={simulateTime} className="px-4 py-2 bg-blue-500 text-white">Simulate</button>
      {result && <pre className="mt-4 bg-gray-100 p-4">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}
