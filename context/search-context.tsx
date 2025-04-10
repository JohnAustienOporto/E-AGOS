"use client"

import { createContext, useContext, useState, type ReactNode } from "react"



type SearchContextType = {
  searchQuery: string
  searchResults: SearchResult[]
  isSearching: boolean
  setSearchQuery: (query: string) => void
  performSearch: () => void
  clearSearch: () => void
}

export type SearchResult = {
  title: string
  description: string
  url: string
  category: string
  imageUrl?: string
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Sample data for search results
  const siteContent = [
    {
      title: "Paniniwala sa Mahal na Ina",
      description: "Isang debosyon sa Mahal na Ina na nakakaapekto sa kultura at espirituwal na buhay ng mga tao.",
      url: "/paniniwala-at-gawi",
      category: "Paniniwala at Gawi",
      imageUrl: "/images/penafrancia-1.png",
    },
    {
      title: "Paniniwala sa Pagsunog ng Puno",
      description: "Paniniwalang pagsunog sa puno ang siyang naging dahilan sa pagkakaroon ng sugat sa paa.",
      url: "/paniniwala-at-gawi",
      category: "Paniniwala at Gawi",
      imageUrl: "/images/pagsunog-puno.png",
    },
    {
      title: "Paniniwala sa Maligno",
      description: "Naniniwala ang mga tao sa mga espiritu o maligno na nagmamasid at maaaring magdulot ng masama.",
      url: "/paniniwala-at-gawi",
      category: "Paniniwala at Gawi",
      imageUrl: "/images/maligno-1.png",
    },
    {
      title: "Arima o bolang kristal",
      description:
        "Ito ay parang bolang nagliliyab o umaapoy na nagtuturo sa mga nangingisda kung saan mayroong maraming isda.",
      url: "/paniniwala-at-gawi",
      category: "Paniniwala at Gawi",
      imageUrl: "/images/arima-1.png",
    },
    {
      title: "Nagtitiradoran",
      description: "Gawi ng magkatapat na barangay VIII at I dahil sa pagkakaroon ng away.",
      url: "/paniniwala-at-gawi",
      category: "Paniniwala at Gawi",
      imageUrl: "/images/tirador.jpg",
    },
    {
      title: "Pagbanlaw ng mga nagpipenitensya sa ilog",
      description: "Isang ritwal ng penitensya kung saan ang mga tao ay naliligo o bumababad sa ilog.",
      url: "/paniniwala-at-gawi",
      category: "Paniniwala at Gawi",
      imageUrl: "/images/penitensya.png",
    },
    {
      title: "Pagbubuhangin",
      description:
        "Isang gawaing karaniwang isinasagawa sa tabi ng Ilog Daet, kung saan kumukuha ng buhangin bilang pangunahing pinagkukunan ng kabuhayan.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/pagbubuhangin.jpg",
    },
    {
      title: "Pangingisda",
      description:
        "Isa sa pangunahing kabuhayan sa tabi ng Ilog Daet ang pangingisda, kung saan nanghuhuli ng isda gamit ang bangka, lambat, o kawil.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/pangingisda.png",
    },
    {
      title: "Pagtatanim ng Palay",
      description:
        "Pangunahing pinagkukuhanan ng kabuhayan sa tabi ng Ilog Daet dahil sa matabang lupa at sapat na patubig.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/taniman-ng-palay.jpg",
    },
    {
      title: "Pagtatanim ng Mais",
      description: "Bukod sa palay, ang mais ay isa ring pangunahing pananim sa mga lugar malapit sa Ilog Daet.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/pagtatanim-ng-mga-mais.jpg",
    },
    {
      title: "Pag-aalaga ng Hayop",
      description: "Pangunahing pamumuhay na nagbibigay pagkain at kabuhayan sa mga residente.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/pag-aalaga-ng-gansa.jpg",
    },
    {
      title: "Paglilikas tuwing may bagyo",
      description:
        "Isang mahalagang hakbang na isinasagawa ng mga tao upang masiguro ang kanilang kaligtasan tuwing may banta ng malalakas na bagyo at pagbaha.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/paglikas.png",
    },
    {
      title: "Jiane Mae M. Pacleta",
      description: "Mananaliksik na nag-ambag sa pag-aaral tungkol sa Ilog Daet.",
      url: "/mananaliksik",
      category: "Mananaliksik",
      imageUrl: "/images/jiane.png",
    },
    {
      title: "Rica Responde",
      description: "Mananaliksik na nag-ambag sa pag-aaral tungkol sa Ilog Daet.",
      url: "/mananaliksik",
      category: "Mananaliksik",
      imageUrl: "/images/rica.png",
    },
    {
      title: "Pag-aalaga ng Kalabaw",
      description: "Ang kalabaw ay mahalagang hayop sa buhay ng mga magsasaka sa tabi ng Ilog Daet.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/pagaalagangkalabaw.jpg",
    },
    {
      title: "Pag-aalaga ng Baboy",
      description: "Ang pag-aalaga ng baboy ay isang mahalagang hanapbuhay para sa mga pamilya sa tabi ng Ilog Daet.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/pagaalagangbaboy.jpg",
    },
    {
      title: "Pagawaan ng Hollow Blocks",
      description: "Ang paggawa ng hollow blocks gamit ang buhangin mula sa ilog ay isang industriya sa lugar.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/PAGAWAAN NG HOLLOW BLOCKS .jpg",
    },
    {
      title: "Pagtatanim ng Saging",
      description: "Ang pagtatanim ng saging sa tabi ng ilog ay isang karaniwang hanapbuhay ng mga residente.",
      url: "/pamumuhay",
      category: "Pamumuhay",
      imageUrl: "/images/PAGTATANIM NG MGA SAGING.jpg",
    },
  ]

  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase()
      const results = siteContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query),
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 300)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        isSearching,
        setSearchQuery,
        performSearch,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
