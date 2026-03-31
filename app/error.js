'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-black mb-4">Something went wrong</h2>
        <p className="text-black mb-6">We encountered an unexpected error. Please try again.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-[#3C087E] text-white rounded-lg hover:scale-105 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
