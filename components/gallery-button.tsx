"use client"

import { useState } from "react"
import { Camera } from "lucide-react"
import ImageModalGallery from "./image-modal-gallery"

interface GalleryImage {
  src: string
  alt: string
  description?: string
}

interface GalleryButtonProps {
  images: GalleryImage[]
  label?: string
  className?: string
}

export default function GalleryButton({ images, label = "Tingnan ang mga imahe", className = "" }: GalleryButtonProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsGalleryOpen(true)}
        className={`flex items-center gap-2 text-teal hover:text-tealDark transition-colors ${className}`}
      >
        <Camera size={18} />
        <span>{label}</span>
      </button>

      <ImageModalGallery images={images} isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </>
  )
}
