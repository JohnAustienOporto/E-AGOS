"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import type React from "react"
import { useState } from "react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  description: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  title?: string
  categories?: string[]
}

export default function ImageGallery({ images, title, categories }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredImages = activeCategory ? images.filter((img) => img.category === activeCategory) : images

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex: number

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setSelectedImage(filteredImages[newIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "ArrowRight") {
      navigateImage("next")
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev")
    }
  }

  return (
    <div className="w-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {title && <h2 className="text-2xl font-bold mb-6 text-darkBlue">{title}</h2>}

      {/* Category Filter */}
      {categories && categories.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === null ? "bg-darkBlue text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Lahat
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category ? "bg-darkBlue text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative w-[252px] h-[360px] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(image)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-4xl h-[70vh] my-4">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="text-white max-w-4xl w-full">
            <h3 className="text-xl font-bold mb-2">{selectedImage.alt}</h3>
            <p className="text-gray-300">{selectedImage.description}</p>
          </div>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => navigateImage("prev")}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => navigateImage("next")}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
