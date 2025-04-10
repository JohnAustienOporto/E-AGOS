import ParallaxHero from "@/components/parallax-hero"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageUrl="/images/background.jpg"
        height="500px"
        title="E-Agos"
        subtitle="Naglalaman ito ng mga impormasyon tungkol sa Naratibong Salaysay ng mga Naninirahan sa Tabi ng Ilog Daet.
              Magsisilbi ang Website na ito bilang preserbasyon at Magagamit bilang kagamitang pantulong sa pagpapaunlad
              ng kaalaman."
      />

      {/* Overview Section */}
      <section className="py-12 bg-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tungkol sa E-Agos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="card-header">
                <h3 className="text-xl font-bold text-white">Paniniwala at Gawi</h3>
              </div>
              <div className="relative h-48">
                <Image src="/images/penafrancia-image-2.png" alt="Paniniwala at Gawi" fill className="object-cover" />
              </div>
              <div className="card-body">
                <p className="mb-4">
                  Alamin ang mga tradisyonal na paniniwala at gawi ng mga naninirahan sa tabi ng Ilog Daet.
                </p>
                <Link href="/paniniwala-at-gawi" className="btn-primary inline-flex items-center">
                  Magbasa pa <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="card-header">
                <h3 className="text-xl font-bold text-white">Pamumuhay</h3>
              </div>
              <div className="relative h-48">
                <Image src="/images/pangingisda.png" alt="Pamumuhay" fill className="object-cover" />
              </div>
              <div className="card-body">
                <p className="mb-4">
                  Tuklasin ang pang-araw-araw na pamumuhay ng mga naninirahan sa tabi ng Ilog Daet.
                </p>
                <Link href="/pamumuhay" className="btn-primary inline-flex items-center">
                  Magbasa pa <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="card-header">
                <h3 className="text-xl font-bold text-white">Mananaliksik</h3>
              </div>
              <div className="relative h-48">
                <Image src="/images/ilog-daet-2.png" alt="Mananaliksik" fill className="object-cover" />
              </div>
              <div className="card-body">
                <p className="mb-4">
                  Kilalanin ang mga mananaliksik na nagbahagi ng kanilang kaalaman at pananaliksik tungkol sa Ilog Daet.
                </p>
                <Link href="/mananaliksik" className="btn-primary inline-flex items-center">
                  Magbasa pa <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
