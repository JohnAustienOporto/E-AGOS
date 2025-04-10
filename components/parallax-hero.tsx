"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface ParallaxHeroProps {
  imageUrl: string
  height: string
  title: string
  subtitle?: string
  overlayOpacity?: number
}

export default function ParallaxHero({ imageUrl, height, title, subtitle, overlayOpacity = 0.5 }: ParallaxHeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return

      const scrollPosition = window.scrollY
      const parallaxElement = parallaxRef.current

      // Calculate the parallax effect (slower scroll for background)
      const offset = scrollPosition * 0.4

      // Apply the transform
      parallaxElement.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="parallax relative overflow-hidden" style={{ height }}>
      <div ref={parallaxRef} className="parallax-bg">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-darkBlue" style={{ opacity: overlayOpacity }}></div>
      </div>

      <div className="parallax-content flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-opensans">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
