import { useState } from 'react';

export default function ImportPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const uploadCSV = async (endpoint) => {
    if (!file) {
      setMessage('❌ No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`http://localhost:8000/api/import/${endpoint}`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setMessage(`✅ ${endpoint.toUpperCase()} imported successfully:\n` + JSON.stringify(data, null, 2));
    } catch (err) {
      setMessage(`❌ Upload failed: ${err.message}`);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📥 Import CSV Data</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          setFile(e.target.files[0]);
          setFileName(e.target.files[0]?.name || '');
          setMessage('');
        }}
        className="block mb-4"
      />
      {fileName && <p className="text-sm text-gray-500 dark:text-gray-300">Selected file: <strong>{fileName}</strong></p>}

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => uploadCSV('items')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Upload Items CSV
        </button>

        <button
          onClick={() => uploadCSV('containers')}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
        >
          Upload Containers CSV
        </button>
      </div>

      {message && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 border rounded whitespace-pre-wrap">
          {message}
        </div>
      )}
    </div>
  );
}
