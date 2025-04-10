"use client"

import GalleryButton from "@/components/gallery-button"
import ParallaxHero from "@/components/parallax-hero"
import Image from "next/image"

export default function PaniniwalAtGawi() {
  // Define image collections for each category
  const paniniwalaSaInaImages = [
    {
      type: "video",
      src: "/videos/bidyo.mp4",
      alt: "Video ng Prosisyon ng Peñafrancia",
      description: "Isang video na nagpapakita ng taunang fluvial procession..."
    },
    {
      src: "/images/penafrancia-1.png",
      alt: "Prosisyon ng Peñafrancia sa Ilog",
      description:
        "Ang taunang fluvial procession o paglilipat ng imahen ng Mahal na Ina sa pamamagitan ng ilog ay isang mahalagang bahagi ng pagdiriwang ng Peñafrancia.",
    },
    {
      src: "/images/penafrancia-2.png",
      alt: "Pagmamasid sa Prosisyon ng Peñafrancia",
      description:
        "Maraming tao ang nagtitipon sa tabi ng ilog upang masaksihan ang pagdaan ng imahen ng Mahal na Ina sa taunang fluvial procession.",
    },
    {
      src: "/images/penafrancia-fluvial.png",
      alt: "Fluvial Procession ng Peñafrancia",
      description:
        "Ang fluvial procession ay isang makulay na pagdiriwang kung saan maraming bangka ang sumasama sa paglalakbay ng imahen ng Mahal na Ina sa Ilog Daet.",
    },
    {
      src: "/images/pagsisindi-kandila.png",
      alt: "Pagsisindi ng Kandila sa Prosisyon ng Mahal na Ina",
      description:
        "Ang pagsisindi ng kandila sa tabi ng ilog habang dumadaan ang prosisyon ng Mahal na Ina ay isang paraan ng pagpapakita ng debosyon at paggalang sa Birheng Maria.",
    },
    {
      src: "/images/pagtitirik-kandila.png",
      alt: "Pagtitirik ng Kandila sa Prosisyon ng Mahal na Ina",
      description:
        "Ang pagtitirik ng mga pulang kandila sa paligid ng daanan ng prosisyon ay simbolo ng pananampalataya at paghiling ng mga biyaya mula sa Mahal na Ina.",
    },
    {
      src: "/images/lalaking-voyadores.png",
      alt: "Lalaking Voyadores sa Prosisyon ng Mahal na Ina",
      description:
        "Ayon sa tradisyon, tanging mga lalaki lamang ang pinapayagang magdala o sumama sa pagbubuhat ng imahen ng Mahal na Ina sa ilog, na tinatawag na mga 'voyadores'.",
    },
    {
      src: "/images/penafrancia-spectators-1.png",
      alt: "Mga Nanonood sa Pampang ng Ilog",
      description:
        "Maraming tao ang nagtitipon sa pampang ng ilog upang masaksihan ang pagdaan ng prosisyon ng Mahal na Ina.",
    },
    {
      src: "/images/penafrancia-image-1.png",
      alt: "Imahen ng Mahal na Ina",
      description:
        "Ang imahen ng Mahal na Ina o Peñafrancia na pinalilibutan ng mga bulaklak habang dinadala sa prosisyon.",
    },
    {
      src: "/images/penafrancia-river-youth.png",
      alt: "Mga Kabataan sa Ilog",
      description: "Mga kabataan na lumalangoy sa ilog bilang bahagi ng pagdiriwang at pagsalubong sa Mahal na Ina.",
    },
    {
      src: "/images/penafrancia-image-2.png",
      alt: "Imahen ng Mahal na Ina sa Prosisyon",
      description:
        "Malapitan na larawan ng imahen ng Mahal na Ina na pinalilibutan ng mga bulaklak habang dinadala sa prosisyon.",
    },
    {
      src: "/images/penafrancia-aerial-1.png",
      alt: "Aerial View ng Fluvial Procession",
      description:
        "Pananaw mula sa itaas ng fluvial procession, ipinapakita ang mga bangka at mga taong lumalangoy sa ilog.",
    },
    {
      src: "/images/penafrancia-spectators-2.png",
      alt: "Mga Nanonood sa Pampang ng Ilog",
      description:
        "Isa pang larawan ng mga taong nagtitipon sa pampang ng ilog upang masaksihan ang pagdaan ng prosisyon.",
    },
    {
      src: "/images/penafrancia-aerial-2.png",
      alt: "Isa Pang Aerial View ng Fluvial Procession",
      description:
        "Isa pang pananaw mula sa itaas ng fluvial procession, ipinapakita ang mga bangka at mga taong lumalangoy sa ilog.",
    },
    {
      src: "/images/penafrancia-surfboards.png",
      alt: "Mga Kabataan sa Surfboard sa Pagdiriwang ng Peñafrancia",
      description:
        "Ang mga kabataan ay sumasali rin sa pagdiriwang gamit ang mga surfboard, na nagpapakita ng pagsasama ng tradisyon at modernong paraan ng pakikilahok.",
    },
  ]

  const pagsunosPunoImages = [
    {
      src: "/images/pagsunog-puno.png",
      alt: "Paniniwala sa Pagsunog ng Puno sa Tabi ng Ilog",
      description:
        "Ayon sa paniniwala, ang pagsunog ng puno sa tabi ng ilog ay maaaring magdulot ng sugat o sakit sa katawan, tulad ng ipinapakita sa larawan kung saan may sugat sa paa ang matanda.",
    },
  ]

  const malignoImages = [
    {
      src: "/images/paniniwala-interview.png",
      alt: "Pakikipanayam Tungkol sa mga Paniniwala",
      description:
        "Bahagi ng proseso ng pananaliksik ay ang pakikipanayam sa mga lokal na residente upang maitala ang kanilang mga paniniwala at karanasan sa tabi ng Ilog Daet.",
    },
    {
      src: "/images/maligno-1.png",
      alt: "Mga Maligno o Multo",
      description:
        "Representasyon ng mga maligno o multo na pinaniniwalaan ng mga naninirahan sa tabi ng Ilog Daet na nagmamasid at maaaring magdulot ng masama.",
    },
    {
      src: "/images/maligno-2.png",
      alt: "Ritwal para sa Proteksyon laban sa Maligno",
      description:
        "Pagsisindi ng kandila sa tubig bilang bahagi ng ritwal para sa proteksyon laban sa mga maligno o masasamang espiritu.",
    },
    {
      src: "/images/maligno-3.png",
      alt: "Mga Figurin para sa Ritwal",
      description:
        "Mga figurin o simbolo na ginagamit sa mga ritwal para sa proteksyon o pakikipag-ugnayan sa mga espiritu.",
    },
  ]

  const arimaImages = [
    {
      src: "/images/arima-1.png",
      alt: "Arima o Bolang Kristal",
      description:
        "Representasyon ng Arima o bolang kristal na nagliliyab o umaapoy na nagtuturo sa mga nangingisda kung saan mayroong maraming isda.",
    },
    {
      src: "/images/arima-2.png",
      alt: "Santelmo",
      description:
        "Kilala rin bilang Santelmo, ang Arima ay isang misteryosong liwanag na nakikita sa tubig na pinaniniwalaan ng mga mangingisda na may kaugnayan sa mga espiritu.",
    },
  ]

  const ipoipoImages = [
    {
      src: "/images/ipoipo-1.png",
      alt: "Ipo-ipo sa Tubig",
      description: "Representasyon ng ipo-ipo o paikot na tubig na pinaniniwalaan na may nanghihila sa ilalim nito.",
    },
    {
      src: "/images/ipoipo-2.png",
      alt: "Malakas na Ipo-ipo",
      description:
        "Malakas na ipo-ipo sa tubig na pinaniniwalaan ng mga naninirahan sa tabi ng ilog na may kaugnayan sa mga hindi nakikitang pwersa.",
    },
  ]

  const nagtitiradoran = [
    {
      src: "/images/tirador.jpg",
      alt: "Batang gumagamit ng tirador",
      description:
        "Isang batang mag-aaral na gumagamit ng tirador, isang tradisyonal na kasangkapan na ginagamit sa pagtitiradoran.",
    },
    {
      src: "/images/tirador1.jpg",
      alt: "Tradisyonal na tirador",
      description:
        "Isang tradisyonal na tirador na gawa sa kahoy at goma, ginagamit sa pagtitiradoran at pangangaso ng maliliit na hayop.",
    },
  ]

  const penitensyaImages = [
    {
      src: "/images/pagbabanlawpinetensya.jpg",
      alt: "Pagbanlaw ng mga nagpipenitensya sa ilog",
      description:
        "Mga tao na nagsasagawa ng ritwal ng penitensya sa pamamagitan ng pagbanlaw sa ilog, isang tradisyonal na gawain tuwing Semana Santa.",
    },
  ]

  const talonTulayImages = [
    {
      src: "/images/pagtatalon.jpg",
      alt: "Mga kabataan na tumataglon mula sa tulay",
      description:
        "Mga kabataan na tumataglon mula sa tulay patungo sa ilog, isang karaniwang libangan sa mga lugar na malapit sa ilog.",
    },
  ]

  const bayanihanImages = [
    {
      src: "/images/bayanihan.jpg",
      alt: "Bayanihan sa panahon ng pangangailangan",
      description:
        "Mga tao na nagtutulungan sa panahon ng pangangailangan, nagpapakita ng diwa ng bayanihan sa mga komunidad sa tabi ng ilog.",
    },
  ]

  const bingwitImages = [
    {
      src: "/images/bingwit-1.png",
      alt: "Mangingisda na may Nahuli",
      description: "Isang mangingisda na nagpapakita ng kanyang nahuli sa Ilog Daet.",
    },
    {
      src: "/images/bingwit-2.png",
      alt: "Pangingisda sa Tabi ng Ilog",
      description: "Isang lalaki na nangingisda sa tabi ng Ilog Daet gamit ang pamingwit.",
    },
    {
      src: "/images/bingwit-3.png",
      alt: "Grupo ng mga Mangingisda",
      description: "Grupo ng mga mangingisda na nagtutulungan sa pangingisda sa Ilog Daet.",
    },
    {
      src: "/images/bingwit-4.png",
      alt: "Mangingisda na Nagpapakita ng Nahuli",
      description: "Isang mangingisda na ipinakikita ang kanyang nahuli mula sa Ilog Daet.",
    },
    {
      src: "/images/bingwit-5.png",
      alt: "Pangingisda sa Pampang",
      description: "Isang mangingisda na nakaupo sa mga bato sa pampang ng Ilog Daet.",
    },
    {
      src: "/images/bingwit-6.png",
      alt: "Pangingisda sa Gilid ng Ilog",
      description: "Isang mangingisda na nangingisda sa gilid ng Ilog Daet.",
    },
  ]

  const naglalaroImages = [
    {
      src: "/images/naglalaro-mga-bata.png",
      alt: "Mga Batang Naglalaro sa Ilog",
      description:
        "Mga batang naglalaro sa tabi ng Ilog Daet, nagpapakita ng karaniwang gawain ng mga bata sa komunidad.",
    },
  ]

  const barangayVIIIImages = [
    {
      src: "/images/barangay-viii-1.png",
      alt: "Tanawin ng Ilog Daet sa Barangay VIII",
      description: "Tanawin ng Ilog Daet sa Barangay VIII, ipinapakita ang mga bahay at gusali sa tabi ng ilog.",
    },
    {
      src: "/images/barangay-viii-2.png",
      alt: "Tulay at Ilog sa Barangay VIII",
      description: "Tanawin ng tulay at ilog sa Barangay VIII, isang mahalagang bahagi ng buhay ng komunidad.",
    },
    {
      src: "/images/barangay-viii-3.png",
      alt: "Pampang ng Ilog sa Barangay VIII",
      description: "Tanawin ng pampang ng Ilog Daet sa Barangay VIII, ipinapakita ang natural na kapaligiran.",
    },
  ]

  return (
    <div className="bg-softWhite">
      {/* Header with Parallax */}
      <ParallaxHero
        imageUrl="/images/ilog-daet-1.png"
        height="300px"
        title="Paniniwala at Gawi"
        subtitle="Mga tradisyonal na paniniwala at gawi ng mga naninirahan sa tabi ng Ilog Daet"
      />

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-darkBlue">
                Paniniwala ng mga Naninirahan sa Tabi ng Ilog Daet
              </h2>

              <div className="grid grid-cols-1 gap-8 mb-8">
                {/* Card 1: Paniniwala sa Mahal na Ina */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY VIII</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="relative h-64 cursor-pointer overflow-hidden"
                      onClick={() => document.getElementById("open-ina-gallery")?.click()}
                    >
                      <Image
                        src="/images/penafrancia-1.png"
                        alt="Paniniwala sa Mahal na Ina"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                        <span className="sr-only">Buksan ang gallery</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-2 text-darkBlue">
                        Paniniwala sa Mahal na Ina o kay Peñafrancia
                      </h4>
                      <p className="mb-4">
                        Isang debosyon sa Mahal na Ina na nakakaapekto sa kultura at espirituwal na buhay ng mga tao,
                        kung saan marami ang nag-aalay ng panalangin at paghahandog sa kanya.
                      </p>

                      <h4 className="text-lg font-bold mb-2 text-darkBlue">
                        Paniniwala na dapat lalaki lamang ang sumasama sa pagbuhat sa mahal na ina
                      </h4>
                      <p className="mb-4">
                        Paniniwala na lalaki lang ang dapat sumasama sa pagbubuhat kay mahal na ina upang mabilis itong
                        maidaan sa ilog Daet.
                      </p>

                      <button
                        id="open-ina-gallery"
                        className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-4"
                      >
                        <GalleryButton
                          images={paniniwalaSaInaImages}
                          label="Tingnan ang mga imahe ng Paniniwala sa Mahal na Ina"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2: Paniniwala sa Pagsunog ng Puno */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY IV</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="relative h-64 cursor-pointer overflow-hidden"
                      onClick={() => document.getElementById("open-puno-gallery")?.click()}
                    >
                      <Image
                        src="/images/pagsunog-puno.png"
                        alt="Paniniwala sa Pagsunog ng puno sa tabi ng ilog"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                        <span className="sr-only">Buksan ang gallery</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-2 text-darkBlue">
                        Paniniwala sa Pagsunog ng puno sa tabi ng ilog
                      </h4>
                      <p className="mb-4">
                        Paniniwalang pagsunog sa puno ang siyang naging dahilan sa pagkakaroon ng sugat sa paa.
                      </p>

                      <button
                        id="open-puno-gallery"
                        className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-4"
                      >
                        <GalleryButton
                          images={pagsunosPunoImages}
                          label="Tingnan ang imahe ng Paniniwala sa Pagsunog ng Puno"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 3: Paniniwala sa Maligno */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY I, IV, VIII, at San Isidro</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="relative h-64 cursor-pointer overflow-hidden"
                      onClick={() => document.getElementById("open-maligno-gallery")?.click()}
                    >
                      <Image
                        src="/images/maligno-1.png"
                        alt="May maligno o taong hindi nakikita"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                        <span className="sr-only">Buksan ang gallery</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-2 text-darkBlue">May maligno o taong hindi nakikita</h4>
                      <p className="mb-4">
                        Naniniwala ang mga tao sa mga espiritu o maligno na nagmamasid at maaaring magdulot ng masama sa
                        kanila, kaya't may mga ritwal na isinasagawa upang maprotektahan ang kanilang sarili.
                      </p>

                      <h4 className="text-lg font-bold mb-2 text-darkBlue">Maraming nagagalawan</h4>
                      <p className="mb-4">
                        Ang mga naninirahan ay may pananaw na ang paglipat-lipat ng mga tao o ang pagkalat ng sakit ay
                        maaaring dahil sa masamang espiritu o iba pang supernatural na dahilan.
                      </p>

                      <button
                        id="open-maligno-gallery"
                        className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-4"
                      >
                        <GalleryButton images={malignoImages} label="Tingnan ang mga imahe ng Paniniwala sa Maligno" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 4: Paniniwala sa Arima at Ipo-ipo */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY III AT IV</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-2 h-64">
                      <div
                        className="relative cursor-pointer overflow-hidden"
                        onClick={() => document.getElementById("open-arima-gallery")?.click()}
                      >
                        <Image
                          src="/images/arima-1.png"
                          alt="Arima o bolang kristal"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                          <span className="sr-only">Buksan ang gallery ng Arima</span>
                        </div>
                      </div>
                      <div
                        className="relative cursor-pointer overflow-hidden"
                        onClick={() => document.getElementById("open-ipoipo-gallery")?.click()}
                      >
                        <Image
                          src="/images/ipoipo-1.png"
                          alt="Ipo-ipo sa tubig"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                          <span className="sr-only">Buksan ang gallery ng Ipo-ipo</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold mb-2 text-darkBlue">Arima o bolang kristal</h4>
                      <p className="mb-4">
                        Ito ay parang bolang nagliliyab o umaapoy na kung saan ito ang nagtuturo sa mga nangingisda sa
                        gabi kung saan mayroong maraming isda ngunit kinakatakutan ito ng mga tao.
                      </p>
                      <button
                        id="open-arima-gallery"
                        className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mb-4"
                      >
                        <GalleryButton images={arimaImages} label="Tingnan ang mga imahe ng Arima" />
                      </button>

                      <h4 className="text-lg font-bold mb-2 text-darkBlue">
                        May nanghihila sa ilalim ng tubig o sinasabi na ipo-ipo
                      </h4>
                      <p className="mb-4">
                        Isang paniniwala na may mga hindi nakikitang pwersa sa ilalim ng tubig na maaaring magdulot ng
                        panganib, kaya't nagiging maingat ang mga tao sa paglalangoy o pagbabad.
                      </p>
                      <button
                        id="open-ipoipo-gallery"
                        className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors"
                      >
                        <GalleryButton images={ipoipoImages} label="Tingnan ang mga imahe ng Ipo-ipo" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gawi Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-darkBlue">Gawi ng mga Naninirahan sa Tabi ng Ilog Daet</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="card h-full">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY I AT VIII</h3>
                  </div>
                  <div
                    className="relative h-64 cursor-pointer overflow-hidden"
                    onClick={() => document.getElementById("open-tiradoran-gallery")?.click()}
                  >
                    <Image
                      src="/images/tirador.jpg"
                      alt="Nagtitiradoran"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <span className="sr-only">Buksan ang gallery</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-darkBlue">Nagtitiradoran</h4>
                    <p className="mb-4">Gawi ng magkatapat na barangay VIII at I dahil sa pagkakaroon ng away.</p>

                    <button
                      id="open-tiradoran-gallery"
                      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
                    >
                      <GalleryButton images={nagtitiradoran} label="Tingnan ang mga imahe ng Nagtitiradoran" />
                    </button>
                  </div>
                </div>

                <div className="card h-full">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY I AT VIII</h3>
                  </div>
                  <div
                    className="relative h-64 cursor-pointer overflow-hidden"
                    onClick={() => document.getElementById("open-penitensya-gallery")?.click()}
                  >
                    <Image
                      src="/images/pagbabanlawpinetensya.jpg"
                      alt="Pagbanlaw ng mga nagpipenitensya sa ilog"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <span className="sr-only">Buksan ang gallery</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-darkBlue">Pagbanlaw ng mga nagpipenitensya sa ilog</h4>
                    <p className="mb-4">
                      Isang ritwal ng penitensya kung saan ang mga tao ay naliligo o bumababad sa ilog bilang tanda ng
                      pagsisisi at paghahanap ng pagpapatawad.
                    </p>

                    <button
                      id="open-penitensya-gallery"
                      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
                    >
                      <GalleryButton
                        images={penitensyaImages}
                        label="Tingnan ang imahe ng Pagbanlaw ng mga Nagpipenitensya"
                      />
                    </button>
                  </div>
                </div>

                <div className="card h-full">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY IV</h3>
                  </div>
                  <div
                    className="relative h-64 cursor-pointer overflow-hidden"
                    onClick={() => document.getElementById("open-talon-gallery")?.click()}
                  >
                    <Image
                      src="/images/pagtatalon.jpg"
                      alt="Pagtatalon sa tulay ng mga batang naglalaro"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <span className="sr-only">Buksan ang gallery</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-darkBlue">
                      Pagtatalon sa tulay ng mga batang naglalaro
                    </h4>
                    <p className="mb-4">
                      Isang masayang gawain para sa mga bata, nagpapakita ng kanilang kalikutan at kasiyahan habang
                      naglalaro sa tabi ng ilog.
                    </p>

                    <button
                      id="open-talon-gallery"
                      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
                    >
                      <GalleryButton images={talonTulayImages} label="Tingnan ang mga imahe ng Pagtatalon sa Tulay" />
                    </button>
                  </div>
                </div>

                <div className="card h-full">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
                  </div>
                  <div
                    className="relative h-64 cursor-pointer overflow-hidden"
                    onClick={() => document.getElementById("open-bayanihan-gallery")?.click()}
                  >
                    <Image
                      src="/images/bayanihan.jpg"
                      alt="Bayanihan"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <span className="sr-only">Buksan ang gallery</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-darkBlue">Bayanihan</h4>
                    <p className="mb-4">
                      Isang magandang tradisyon ng pagtutulungan ng mga tao sa komunidad, lalo na sa mga panahon ng
                      pangangailangan, tulad ng paglilipat ng bahay o pagtulong sa mga naapektuhan ng kalamidad.
                    </p>

                    <button
                      id="open-bayanihan-gallery"
                      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
                    >
                      <GalleryButton images={bayanihanImages} label="Tingnan ang mga imahe ng Bayanihan" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="section-divider">
  <h3 className="text-xl font-bold mb-4 text-darkBlue">
    Iba Pang Gawi sa BARANGAY I, III, IV, VIII, AT SAN ISIDRO
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Column - Reordered */}
    <div>
      {/* Moved Paglalaro section with image to top */}
      <div className="mb-4">
        <h4 className="font-bold text-darkBlue mb-2">Paglalaro ng mga bata sa tabi ng ilog</h4>
        <div className="grid grid-cols-1 gap-4">
          <div
            className="relative h-48 cursor-pointer overflow-hidden rounded-md"
            onClick={() => document.getElementById("open-naglalaro-gallery")?.click()}
          >
            <Image
              src="/images/naglalaro-mga-bata.png"
              alt="Mga Batang Naglalaro sa Ilog"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
              <span className="sr-only">Buksan ang gallery</span>
            </div>
          </div>
          <p>
            Isa sa mga karaniwang gawi ng mga bata sa mga pamayanang malapit sa ilog. Dito sila
            nagkakaroon ng pagkakataong makisalamuha sa isa't isa, magsaya, at matuto mula sa kalikasan.
          </p>
          <button
            id="open-naglalaro-gallery"
            className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors"
          >
            <GalleryButton images={naglalaroImages} label="Tingnan ang mga imahe ng Naglalarong Bata" />
          </button>
        </div>
      </div>

      {/* Text-only sections moved below */}
      <h4 className="font-bold text-darkBlue mb-2">Paglalaba</h4>
      <p className="mb-4">
        Karaniwang gawain ng mga kababaihan sa tabi ng ilog, ginagamit ang daloy ng tubig para sa
        paghuhugas ng mga damit at iba pang kasuotan.
      </p>

      <h4 className="font-bold text-darkBlue mb-2">Pagliligo</h4>
      <p className="mb-4">
        Isang mahalagang bahagi ng araw ng mga tao, partikular na sa mainit na panahon, kung saan
        ginagamit ang ilog bilang lugar ng paglilinis ng sarili.
      </p>
    </div>

    {/* Right Column - Already properly ordered */}
    <div>
      <div className="mb-4">
        <h4 className="font-bold text-darkBlue mb-2">Pamamana o bingwit</h4>
        <div className="grid grid-cols-1 gap-4">
          <div
            className="relative h-48 cursor-pointer overflow-hidden rounded-md"
            onClick={() => document.getElementById("open-bingwit-gallery")?.click()}
          >
            <Image
              src="/images/bingwit-1.png"
              alt="Pangingisda sa Ilog Daet"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
              <span className="sr-only">Buksan ang gallery</span>
            </div>
          </div>
          <p>
            Isang tradisyunal na paraan ng pangingisda, kung saan ang mga tao ay gumagamit ng mga
            panghuhuli upang makakuha ng isda para sa kanilang pang-araw-araw na pagkain.
          </p>
          <button
            id="open-bingwit-gallery"
            className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors"
          >
            <GalleryButton images={bingwitImages} label="Tingnan ang mga imahe ng Pangingisda" />
          </button>
        </div>
      </div>

      {/* Remaining text sections */}
      <h4 className="font-bold text-darkBlue mb-2">Pagtutuli o pagbabad bago tuliin</h4>
      <p className="mb-4">
        Isang kaugalian na isinasagawa ng mga batang lalaki bilang bahagi ng kanilang pagdapo sa pagtanda,
        kadalasang sinasamahan ng mga ritwal.
      </p>

      <div className="mb-4">
        <h4 className="font-bold text-darkBlue mb-2">Pagbabangka</h4>
        <p className="mb-4">
          Isang pangunahing paraan ng transportasyon sa tabi ng ilog, ginagamit ito para sa pamamasada o
          pangingisda, at nakatutulong sa mga tao sa kanilang araw-araw na buhay.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-darkBlue mb-2">Tanawin</h4>
        <button
          id="open-barangay-gallery"
          className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors"
        >
          <GalleryButton images={barangayVIIIImages} label="Tingnan ang mga imahe" />
        </button>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
