import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">404</h2>
        <p className="text-gray-600 mb-6">Page not found</p>
        <Link
          href="/"
          className="px-6 py-2 bg-[#345895] text-white rounded-lg hover:bg-blue-900 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
