import ParallaxHero from "@/components/parallax-hero"
import Image from "next/image"

export default function Mananaliksik() {
  return (
    <div className="bg-softWhite">
      {/* Header with Parallax */}
      <ParallaxHero
        imageUrl="/images/mmct.png"
        height="300px"
        title="Mga Mananaliksik"
        subtitle="Kilalanin ang mga mananaliksik na nag-ambag sa pag-aaral tungkol sa Ilog Daet"
      />

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkBlue">Tungkol sa Pananaliksik</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="mb-4">
                    Naglalayon ang pananaliksik bilang bahagi ng isang mas malaking inisyatiba para sa kaalaman, preserbasiyon at 
                    pangangalaga ng mga lokal na Paniniwala, Gawi, at Pamumuhay sa Tabi ng Ilog Daet sa lalawigan ng Camarines Norte.
                  </p>
                  <p>
                    Ang pangunahing layunin nito ang makolekta, mapangalagaan, at maibahagi ang mga kuwento, salaysay, karanasan, at kaalaman ng mga naninirahan sa tabi ng Ilog Daet.
                    Upang higit na maunawaan at mapahalagahan ang kanilang kultura at magamit ito bilang batayan ng pag-aaral at pagtaguyod sa lokal na identidad o pagkakakilanlan ng Daet.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/images/Tungkol sa Pananaliksik.png" alt="Proyekto ng Pananaliksik" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Disenyo ng Pananaliksik Section */}
            <div className="section-divider">
              <h3 className="text-xl font-bold mb-4 text-darkBlue">Disenyo ng Pananaliksik</h3>
              <p className="mb-4">
                Ginamit ang kwalitatibong disenyo sa pananaliksik sa pangangalap at pagsusuri ng mga datos na hindi numerikal, na may layuning maunawaan ang mga konsepto, opinyon, at karanasan ng mga tao.
              </p>
              <p className="mb-4">
                Ginamit din ang mga mananaliksik ng Penomenolohikal na pamamaraan pag-aaral ng karanasan ng tao at ang mga paraan kung paano ang mga bagay nagpapakita sa pamamagitan ng karanasan. Isa ang pag-unawa sa kung paano nararanasan ang mga nangyayari sa paligid. Hindi lamang tungkol sa kung ano ang mga bagay, kung hindi pati na rin kung paano ito nakikita, nararamdaman, at naintindihan.
              </p>
              <h4 className="text-lg font-bold mb-2 text-darkBlue">Paraan ng pagpili ng mga impormante</h4>
              <p className="mb-4">
                Ginamit ang sampling na may layunin o Purposive Sampling, isang paraan ng pagpili ng mga kalahok kung saan tinutukoy ang mga indibidwal na may sapat na kaalaman at karanasan upang makapagbigay ng mahalagang impormasyon.
              </p>
              <h4 className="text-lg font-bold mb-2 text-darkBlue">Instrumento ng Pananaliksik</h4>
              <p className="mb-4">
                Gagamitin ng mga mananaliksik ang inihandang pamatnubay na tanong para sa Pakikipagkuwentuhan upang makakuha ng mas malalim na kaalaman at karanasan mula sa mga mamamayan.
              </p>
              <h4 className="text-lg font-bold mb-2 text-darkBlue">Paraan ng Pangangalap ng Datos</h4>
              <p className="mb-4">
                Isinagawa ang panayam sa pamamagitan ng pangkatang panayam. Pagtitipon ng mga impormante sa isang lugar upang sagutin ang mga katanungang nais linawin.
              </p>
              <h4 className="text-lg font-bold mb-2 text-darkBlue">Paraan ng Pagsusuri ng Datos</h4>
              <p className="mb-4">
                Ginamit ang Tematikong Pagsusuri bilang isang sistema ng pagsusuri ng kwalitatibong datos. Sa pamamaraang ito, tutukuyin ng mananaliksik ang mga paulit-ulit na tema o ideya sa mga teksto, tulad ng mga panayam o transkrip.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-darkBlue">MGA MANANALIKSIK</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card">
                  <div className="relative h-80 overflow-hidden">
                    <Image src="/images/jiane.png" alt="Jiane Mae M. Pacleta" fill className="object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-darkBlue">Jiane Mae M. Pacleta</h3>
                    <p className="text-sm text-gray-600 mb-4">Mananaliksik</p>
                    <p className="text-xl"> {/* Larger text for readability */}
                    Si Bb. Jiane Mae M. Pacleta isinilang noong ika-siyam ng Marso, taong 2004 sa bayan ng Daet, Camarines Norte. Dalawampung taong gulang at kasalukuyang naninirahan sa Barangay VIII, bayan ng Daet.  Nakapagtapos ng Elementarya at Sekondaryang Edukasyon sa Moreno Integrated School at Senior Highschool sa Mabini Colleges Inc. Kasalukuyang nasa ikatlong taon ng kolehiyo sa Camarines Norte State College sa kursong Batsilyer sa Edukasyong Pansekondarya Medyor sa Filipino. Kasapi siya sa Kapisanan ng mga Medyor sa Filipino.                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="relative h-80 overflow-hidden">
                    <Image src="/images/rica.png" alt="Rica Responde" fill className="object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-darkBlue">Rica Responde</h3>
                    <p className="text-sm text-gray-600 mb-4">Mananaliksik</p>
                    <p className="text-xl"> {/* Larger text for readability */}
                    Si Bb. Rica B Responde isinilang noong Agosto 23, taong 2003. Dalawamput isang taong gulang at kasalukuyang naninirahan sa Barangay Calabagas San Vicente Camarines Norte.  Nakapagtapos ng Elementarya at Sekondaryang Edukasyon sa V. Orendain Elementary school  at Senior Highschool sa Froilan D. Lopez Highschool. Kasalukuyang nasa ikatlong taon ng kolehiyo sa Camarines Norte State College sa kursong Batsilyer sa Edukasyong Pansekondarya Medyor sa Filipino.                    </p>
                  </div>
                </div>
              </div>
            </div>

{/* Tagapayo Section */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-6 text-darkBlue">TAGAPAYO</h2>

  <div className="flex items-center gap-6">
    <div className="relative h-80 w-1/3 overflow-hidden">
      <Image src="/images/adviser.png" alt="Ryan S. Rodriguez, PhD" fill className="object-contain" />
    </div>

    <div className="p-6 w-2/3">
      <h3 className="text-lg font-bold mb-2 text-darkBlue">RYAN S. RODRIGUEZ, PhD</h3>
      <p className="text-sm text-gray-600 mb-4">Tagapayo</p>
      <p className="mb-4">
        Doktor ng Pilosopiya sa Filipino
      </p>
      <p className="text-xl"> {/* Larger text for readability */}
      Nagtapos ng kolehiyo sa La Consolacion College-Daet sa kursong Batsilyer sa Pansekondaryang Edukasyon major sa Filipino noong 2005. Nagtapos ng Master of Arts in Education major sa Filipino sa Universidad de Santa Isabel - Lungsod Naga. Nagkamit ng karangalan bilang Magna Cum Laude, pinakamahusay na Tesis at Presenter noong 2016. Nakamit ang titulong Doktor ng Pilosopiya sa Filipino noong 2024 sa Bicol University - Lungsod Legazpi at hinirang na pinakamahusay na disertasyon.
      </p>
    </div>
  </div>
</div>



          </div>
        </div>
      </section>
    </div>
  )
}
