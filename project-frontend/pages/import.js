import { useState } from 'react'

export default function ImportPage() {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')

  const uploadCSV = async (endpoint) => {
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch(`http://localhost:8000/api/import/${endpoint}`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    setMessage(JSON.stringify(data))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Import Data</h1>
      <input 
        type="file" 
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="mt-2"
      />
      <div className="mt-4">
        <button onClick={() => uploadCSV('items')} className="px-4 py-2 bg-blue-500 text-white mr-2">Import Items</button>
        <button onClick={() => uploadCSV('containers')} className="px-4 py-2 bg-green-500 text-white">Import Containers</button>
      </div>
      {message && <div className="mt-4 p-2 border">{message}</div>}
    </div>
  )
}
