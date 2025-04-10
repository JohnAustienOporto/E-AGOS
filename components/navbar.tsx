"use client"

import type React from "react"

import SearchResults from "@/components/search-results"
import { Input } from "@/components/ui/input"
import { useSearch } from "@/context/search-context"
import { Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { searchQuery, setSearchQuery, performSearch } = useSearch()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch()
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Perform search when user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        performSearch()
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery, performSearch])

  return (
    <>
      <nav className="bg-gradient-blue shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                {/* Add your logo image here */}
                <img src="/images/icon.png" alt="E-Agos Logo" className="h-8 w-auto" />
                <span className="text-white text-xl font-bold ml-2">E-Agos</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <form onSubmit={handleSearch} className="w-full max-w-lg">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Maghanap..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-white text-white placeholder-gray-300 bg-transparent"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={18} />
                  </button>
                </div>
              </form>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-white hover:text-lightBlue px-3 py-2 rounded-md text-sm font-medium">
                Tahanan
              </Link>
              <Link
                href="/paniniwala-at-gawi"
                className="text-white hover:text-lightBlue px-3 py-2 rounded-md text-sm font-medium"
              >
                Paniniwala at Gawi
              </Link>
              <Link
                href="/pamumuhay"
                className="text-white hover:text-lightBlue px-3 py-2 rounded-md text-sm font-medium"
              >
                Pamumuhay
              </Link>
              <Link
                href="/mananaliksik"
                className="text-white hover:text-lightBlue px-3 py-2 rounded-md text-sm font-medium"
              >
                Mananaliksik
              </Link>
            </div>

            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-lightBlue focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-darkBlue">
              <form onSubmit={handleSearch} className="mb-3">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Maghanap..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-white text-white placeholder-gray-300 bg-transparent"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={18} />
                  </button>
                </div>
              </form>

              <Link
                href="/"
                className="text-white hover:bg-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tahanan
              </Link>
              <Link
                href="/paniniwala-at-gawi"
                className="text-white hover:bg-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Paniniwala at Gawi
              </Link>
              <Link
                href="/pamumuhay"
                className="text-white hover:bg-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pamumuhay
              </Link>
              <Link
                href="/mananaliksik"
                className="text-white hover:bg-teal block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mananaliksik
              </Link>
            </div>
          </div>
        )}
      </nav>

      <SearchResults />
    </>
  )
}
