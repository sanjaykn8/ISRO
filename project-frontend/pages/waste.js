import { useState } from 'react'

export default function WastePage() {
  const [returnPlan, setReturnPlan] = useState(null)
  const [undockingContainer, setUndockingContainer] = useState('')
  const [undockingDate, setUndockingDate] = useState('')
  const [maxWeight, setMaxWeight] = useState(0)

  const identifyWaste = async () => {
    const res = await fetch('http://localhost:8000/api/waste/identify')
    const data = await res.json()
    setReturnPlan(data)
  }

  const getReturnPlan = async () => {
    const payload = {
      undockingContainerId: undockingContainer,
      undockingDate,
      maxWeight: parseFloat(maxWeight)
    }
    const res = await fetch('http://localhost:8000/api/waste/return-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await res.json()
    setReturnPlan(data)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Waste Management & Return Plan</h1>
      <button onClick={identifyWaste} className="px-4 py-2 bg-blue-500 text-white mb-4">
        Identify Waste Items
      </button>
      <div className="my-4">
        <input 
          type="text" 
          placeholder="Undocking Container ID"
          value={undockingContainer}
          onChange={(e) => setUndockingContainer(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="datetime-local" 
          placeholder="Undocking Date"
          value={undockingDate}
          onChange={(e) => setUndockingDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="number" 
          placeholder="Max Weight"
          value={maxWeight}
          onChange={(e) => setMaxWeight(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={getReturnPlan} className="px-4 py-2 bg-green-500 text-white">Get Return Plan</button>
      </div>
      {returnPlan && <pre className="bg-gray-100 p-4">{JSON.stringify(returnPlan, null, 2)}</pre>}
    </div>
  )
}
