import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Space Station Inventory Dashboard</h1>
      <nav className="space-x-4">
        <Link href="/import" className="text-blue-500">Import Data</Link>
        <Link href="/placement" className="text-blue-500">Placement</Link>
        <Link href="/search" className="text-blue-500">Search & Retrieval</Link>
        <Link href="/simulate" className="text-blue-500">Simulate Time</Link>
        <Link href="/waste" className="text-blue-500">Waste Management</Link>
        <Link href="/logs" className="text-blue-500">View Logs</Link>
      </nav>
    </div>
  )
}
