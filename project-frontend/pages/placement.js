import { useState } from 'react'

export default function PlacementPage() {
  const [itemsJSON, setItemsJSON] = useState('')
  const [containersJSON, setContainersJSON] = useState('')
  const [result, setResult] = useState(null)

  const callPlacement = async () => {
    const payload = {
      items: JSON.parse(itemsJSON),
      containers: JSON.parse(containersJSON)
    }
    const res = await fetch('http://localhost:8000/api/placement', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Placement Recommendations</h1>
      <textarea
        placeholder='Enter items JSON...'
        value={itemsJSON}
        onChange={(e) => setItemsJSON(e.target.value)}
        className="w-full h-40 border p-2 my-2"
      />
      <textarea
        placeholder='Enter containers JSON...'
        value={containersJSON}
        onChange={(e) => setContainersJSON(e.target.value)}
        className="w-full h-40 border p-2 my-2"
      />
      <button onClick={callPlacement} className="px-4 py-2 bg-blue-500 text-white">Get Placement</button>
      {result && <pre className="mt-4 bg-gray-100 p-4">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  )
}
