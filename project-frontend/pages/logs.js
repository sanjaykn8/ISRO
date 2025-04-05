import { useState } from 'react'

export default function LogsPage() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [logs, setLogs] = useState(null)

  const fetchLogs = async () => {
    const query = new URLSearchParams({
      startDate,
      endDate
    })
    const res = await fetch(`http://localhost:8000/api/logs?${query.toString()}`)
    const data = await res.json()
    setLogs(data.logs)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Logs Viewer</h1>
      <div className="my-4">
        <label>Start Date: </label>
        <input 
          type="datetime-local" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 mr-4"
        />
        <label>End Date: </label>
        <input 
          type="datetime-local" 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 mr-4"
        />
        <button onClick={fetchLogs} className="px-4 py-2 bg-blue-500 text-white">Fetch Logs</button>
      </div>
      {logs && <pre className="bg-gray-100 p-4">{JSON.stringify(logs, null, 2)}</pre>}
    </div>
  )
}
