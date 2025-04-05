import Link from 'next/link';

export default function Home() {
  const actions = [
    { title: "Import Data", href: "/import", emoji: "📦", desc: "Upload items and containers" },
    { title: "Placement", href: "/placement", emoji: "📍", desc: "Get optimal placement suggestions" },
    { title: "Search & Retrieval", href: "/search", emoji: "🔍", desc: "Locate items with expiry-aware logic" },
    { title: "Simulate Time", href: "/simulate", emoji: "⏳", desc: "Fast-forward to test expiry and usage" },
    { title: "Waste Management", href: "/waste", emoji: "🗑", desc: "Handle and plan cargo return" },
    { title: "View Logs", href: "/logs", emoji: "🧾", desc: "Track all system events and API calls" },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Space Station Inventory Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map(({ title, href, emoji, desc }) => (
          <Link
            key={href}
            href={href}
            className="bg-white hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 rounded-xl p-6 shadow-md border border-gray-200"
          >
            <div className="text-4xl mb-2">{emoji}</div>
            <h2 className="text-xl font-semibold mb-1">{title}</h2>
            <p className="text-sm text-gray-600">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
