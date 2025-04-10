"use client"

import { useSearch } from "@/context/search-context"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Custom debounce function
function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default function SearchResults() {
  const { searchResults, isSearching, searchQuery, clearSearch } = useSearch()
  const resultsRef = useRef<HTMLDivElement>(null)

  // Using custom debounce hook
  const debouncedQuery = useDebounce(searchQuery, 500)

  // Handle clicks outside the results to clear search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        clearSearch()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [clearSearch])

  // Update search status only when debounced query changes
  const isSearchingState = debouncedQuery && debouncedQuery !== searchQuery

  if (!debouncedQuery) return null  // Don't render if no query

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center pt-20">
      <div ref={resultsRef} className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] overflow-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-bold text-darkBlue">
            {isSearchingState ? "Naghahanap..." : `Mga Resulta para sa "${debouncedQuery}"`}
          </h3>
          <button
            onClick={clearSearch}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Isara"
          >
            <X size={20} />
          </button>
        </div>

        {isSearchingState ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-darkBlue mx-auto"></div>
            <p className="mt-4 text-gray-600">Naghahanap...</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-600">Walang nahanap na resulta para sa "{debouncedQuery}"</p>
          </div>
        ) : (
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-4">{searchResults.length} (na) resulta ang nahanap</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  className="flex gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={clearSearch}
                >
                  {result.imageUrl && (
                    <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={result.imageUrl || "/placeholder.svg"}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-bold text-darkBlue">{result.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
                    <span className="text-xs text-teal mt-1 inline-block">{result.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
