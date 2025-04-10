"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface GalleryImage {
  src: string
  alt: string
  description?: string
  type?: "image" | "video"
  poster?: string
}

interface ImageModalGalleryProps {
  images: GalleryImage[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

export default function ImageModalGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageModalGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight") {
        navigateImage("next")
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  if (!isOpen) return null

  const current = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-center items-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Isara"
      >
        <X size={24} />
      </button>

      {/* Media Display */}
      <div className="relative w-full max-w-4xl h-[70vh] my-4">
        {current.type === "video" ? (
          <video
            src={current.src}
            poster={current.poster}
            controls
            className="w-full h-full object-contain rounded"
          />
        ) : (
          <Image
            src={current.src || "/placeholder.svg"}
            alt={current.alt}
            fill
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* Image info */}
      <div className="text-white max-w-4xl w-full">
        <h3 className="text-xl font-bold mb-2">{current.alt}</h3>
        {current.description && <p className="text-gray-300">{current.description}</p>}
        <p className="text-gray-400 text-sm mt-2">
          {currentIndex + 1} ng {images.length}
        </p>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            aria-label="Nakaraang media"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            aria-label="Susunod na media"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Thumbnail navigation */}
      <div className="w-full max-w-4xl overflow-x-auto mt-4">
        <div className="flex space-x-2 px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === index ? "border-teal" : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`Tingnan ang ${image.type === "video" ? "video" : "larawan"} ${index + 1}`}
            >
              <Image
                src={image.type === "video" ? image.poster || "/placeholder.svg" : image.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
