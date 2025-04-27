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
    {
      src:"/images/FGAWI/1.jpg",
    },
    {
      src:"/images/FGAWI/2.jpg",
    },
    {
      src:"/images/FGAWI/3.jpg",
    },
    {
      src:"/images/FGAWI/4.jpg",
    },
    {
      src:"/images/FGAWI/5.jpg",
    },
    {
      src:"/images/FGAWI/6.jpg",
    },
    {
      src:"/images/FGAWI/7.jpg",
    },
    {
      src:"/images/FGAWI/8.jpg",
    },
    {
      src:"/images/FGAWI/9.jpg",
    },
  ]

  const pagsunosPunoImages = [
    {
      src: "/images/FGAWI/Paniniwala sa Pagsunog ng puno sa tabi ng ilog.jpg",
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
      src: "/images/FGAWI/Paniniwala sa Maligno.jpg",
      alt: "Mga Maligno o Multo",
      description:
        "Representasyon ng mga maligno o multo na pinaniniwalaan ng mga naninirahan sa tabi ng Ilog Daet na nagmamasid at maaaring magdulot ng masama.",
    },
    {
      src: "/images/FGAWI/Paniniwala sa Maligno 2.jpg",
      alt: "Ritwal para sa Proteksyon laban sa Maligno",
      description:
        "Pagsisindi ng kandila sa tubig bilang bahagi ng ritwal para sa proteksyon laban sa mga maligno o masasamang espiritu.",
    },
    {
      src: "/images/FGAWI/Paniniwala sa Maligno 3.jpg",
      alt: "Mga Figurin para sa Ritwal",
      description:
        "Mga figurin o simbolo na ginagamit sa mga ritwal para sa proteksyon o pakikipag-ugnayan sa mga espiritu.",
    },
  ]

  const arimaImages = [
    {
      src: "/images/FGAWI/Arima o Bolang Kristal 1.jpg",
      alt: "Arima o Bolang Kristal",
      description:
        "Representasyon ng Arima o bolang kristal na nagliliyab o umaapoy na nagtuturo sa mga nangingisda kung saan mayroong maraming isda.",
    },
    {
      src: "/images/FGAWI/Arima o Bolang Kristal 2.jpg",
      alt: "Santelmo",
      description:
        "Kilala rin bilang Santelmo, ang Arima ay isang misteryosong liwanag na nakikita sa tubig na pinaniniwalaan ng mga mangingisda na may kaugnayan sa mga espiritu.",
    },
  ]

  const ipoipoImages = [
    {
      src: "/images/FGAWI/May nanghihila sa ilalim ng tubig o sinasabi na ipo-ipo 2.jpg",
      alt: "Ipo-ipo sa Tubig",
      description: "Representasyon ng ipo-ipo o paikot na tubig na pinaniniwalaan na may nanghihila sa ilalim nito.",
    },
    {
      src: "/images/FGAWI/May nanghihila sa ilalim ng tubig o sinasabi na ipo-ipo 1.jpg",
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
        "https://images.app.goo.gl/oAED4W4SDTN4e1zo7",
    },
    {
      src: "/images/FGAWI/Nagtitiradoran 2.jpg",
      alt: "Tradisyonal na tirador",
      description:
        "https://images.app.goo.gl/smt7M32MwRg31eNJ8.",
    },
  ]

  const penitensyaImages = [
    {
      src: "/images/pagbabanlawpinetensya.jpg",
      alt: "Pagbanlaw ng mga nagpipenitensya sa ilog",
      description:
        "https://www.facebook.com/share/1AKtLfxLLR/",
    },
  ]

  const talonTulayImages = [
    {
      src: "/images/FGAWI/Pagtatalon sa tulay ng mga batang naglalaro.jpg",
      alt: "Mga kabataan na tumataglon mula sa tulay",
      description:
        "https://www.facebook.com/share/163Au2hquE/",
    },
  ]

  const bayanihanImages = [
    {
      src: "/images/bayanihan.jpg",
      alt: "Bayanihan sa panahon ng pangangailangan",
      description:
        "https://www.google.com/imgres?imgurl=https://philippinerevolution.nu/wp-content/uploads/2023/06/photo-from-the-national-fb-page-mayon-evacuation.jpg&tbnid=kcuuC2Kj-aClwM&vet=1&imgrefurl=https://philippinerevolution.nu/angbayan/bhb-albay-handang-tumugon-sa-sakuna-ng-pagsabog-ng-bulkang-mayon/&docid=P2mMaUilEOrqTM&w=2048&h=1536&itg=1&source=sh/x/im/m1/1&kgs=bb897bd7482bfa91",
    },
  ]

  const bingwitImages = [
    {
      src: "/images/FGAWI/Pamamana o Bingwit 4.jpg",
      alt: "Mangingisda na may Nahuli",
      description: "Isang mangingisda na nagpapakita ng kanyang nahuli sa Ilog Daet.",
    },
    {
      src: "/images/FGAWI/Pamamana o Bingwit 3.jpg",
      alt: "Pangingisda sa Tabi ng Ilog",
      description: "Isang lalaki na nangingisda sa tabi ng Ilog Daet gamit ang pamingwit.",
    },
    {
      src: "/images/FGAWI/Pamamana o Bingwit 2.jpg",
      alt: "Grupo ng mga Mangingisda",
      description: "Grupo ng mga mangingisda na nagtutulungan sa pangingisda sa Ilog Daet.",
    },
    {
      src: "/images/bingwit-4.png",
      alt: "Mangingisda na Nagpapakita ng Nahuli",
      description: "Isang mangingisda na ipinakikita ang kanyang nahuli mula sa Ilog Daet.",
    },
    {
      src: "/images/FGAWI/Pamamana o Bingwit 1.jpg",
      alt: "Pangingisda sa Pampang",
      description: "Isang mangingisda na nakaupo sa mga bato sa pampang ng Ilog Daet.",
    },
    {
      src: "/images/FGAWI/Pamamana o Bingwit 5.jpg",
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
  const pagtutuliImages = [
    {
      src: "/images/FGAWI/PAGTUTULI.jpg",
      alt: "Pagbabad sa ilog bago tuliin",
    },

  ];

  const paglalabaImages = [
    {
      src: "/images/FGAWI/Paglalaba.jpg",
      alt: "Paglalaba sa Ilog",
    },
    {
      src: "/images/gawi/laba2.jpg",
      alt: "Paglalaba sa Ilog",
      description: "https://www.facebook.com/photo/?fbid=814143218978064&set=a.569367390122316",
    },
  ]

  const pagliligoImages = [
    {
      src: "/images/FGAWI/Pagliligo 1.jpg",
      alt: "Pagliligo sa Ilog",
    },
    {
      src: "/images/gawi/ligo2.jpg",
      alt: "Pagliligo sa Ilog",
      description: "https://www.google.com/imgres?imgurl=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWjlqw5MjM0sGC1ZcmeNGLCynX6njlSoLC24WKFOCuIA8ZdRGI4424y38ggXTEA2B2kg9YKm4aOKvrZKECnPSXzqByGD_mSKelsIxvMTY8ln4A9SZkk8dopLyMQoq-UZ8YKjN3P46baRA/s1600/04082010(011).jpg&tbnid=CXUCi1oc_wKv4M&vet=1&imgrefurl=http://asiong32.blogspot.com/2010/08/ligo-sa-ilog.html&docid=DXg6pGGNFdZChM&w=1600&h=1200&source=sh/x/im/m1/1&kgs=e873620fca4ed3cf",
    },
  ]

  const pagbabangkaImages = [
    {
      src: "/images/pamumuhay/PAGBABANGKA.jpg",
      alt: "Pagbabangka sa Ilog",
    },
  ]

  const balsaImages = [
    {
      src: "/images/FGAWI/Paggawa ng Balsa gamit ang katawan ng puno ng saging.jpg",
      alt: "Paggawa ng Balsa gamit ang katawan ng puno ng saging",
    },
  ]
  
  
  
  
   
  
  

  return (
    <div className="bg-softWhite">
      {/* Header with Parallax */}
      <ParallaxHero
        imageUrl="/images/COVER PANINIWALA AT GAWI TAB.png"
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
                        src="/images/FGAWI/3.jpg"
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
                      <p className="text-xl"> {/* Larger text for readability */}
                      Malalim na nakaugat sa puso ng mga mamamayang Bicolano ang debosyon sa Mahal na Ina ng Peñafrancia, lalo na sa mga naninirahan sa mga lugar malapit sa ilog ng Daet. Ang taunang prusisyon at fluvial parade, kung saan isinasakay sa bangka ang imahe ni Ina at pinapadaan sa ilog na isa sa pinakaaabangang bahagi ng kapistahan. Para sa mga naninirahan sa tabing-ilog, ang okasiyong ito hindi lamang relihiyoso kung hindi isang mahalagang bahagi ng kanilang pamumuhay at pagkakakilanlan bilang komunidad.
Maraming naniniwala na ang presensiya ng mahal na Ina sa ilog ang nagbibigay ng biyaya sa kanilang kabuhayan, lalo na sa mga mangingisda, magsasaka, at negosyanteng umaasa sa tubig at kalikasan. Pinaniniwalaan din ng ilang matatanda sa lugar na kapag dumaan ang imahe ni Ina sa tapat ng kanilang bahay o lugar ng kabuhayan, pinagpapala sila at pinoprotektahan mula sa sakuna o malas.

                      </p>
                      

                <p className="text-xl"> {/* Larger text for readability */}
                Sa mga barangay na nasa tabing-ilog ng Daet, may matibay na paniniwala na ang mga lalaki lamang ang dapat magbuhat sa imahen ni Ina tuwing prusisyon, lalo na sa bahagi ng fluvial procession. Ayon sa kanila, na ang mga lalaki kinakailangan na may sapat na lakas at tapang upang maitaguyod at maisagawa nang maayos ang pagbubuhat, lalo na sa bahagi ng ilog kung saan kailangan ng balanse, koordinasyon, at pisikal na tibay.
                Ang pagbubuhat kay Ina ay panata ng mga lalaki bilang alay sa pamilya at komunidad. Ipinapakita rito ang pananampalataya, pagkakaisa, at debosiyon na naipapasa sa bawat henerasiyon bilang bahagi ng kanilang kultura.
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
                        src="/images/FGAWI/Paniniwala sa Pagsunog ng puno sa tabi ng ilog.jpg"
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
                      <p className="text-xl"> {/* Larger text for readability */}
                      Sa mga pamayanang malapit sa tabing-ilog ng Daet, laganap ang paniniwalang sagrado ang mga punong kahoy sa gilid ng ilog dahil pinaniniwalaang tirahan ito ng mga ispiritu o lamang-lupa. Ang pagsunog sa mga punong ito itinuturing na paglabag sa kagandahang-loob ng kalikasan at maaaring magdulot ng ganti mula sa mga ispiritu, gaya ng hindi maipaliwanag na pagkakaroon sakit at sugat. Marami sa mga naninirahan ang pinaniniwalaan ito na patuloy na nagpapalalim sa respeto nila sa kalikasan at sa mga nilalang na hindi nakikita.                      </p>

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
                        src="/images/FGAWI/Paniniwala sa Maligno 3.jpg"
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
                      <p className="text-xl"> {/* Larger text for readability */}
                      Sa mga pamayanang malapit sa tabing-ilog ng Daet, laganap ang paniniwala sa mga nilalang na hindi basta-bastang nakikitang mga ispiritu, engkanto, o maligno na sinasabing nagbabantay sa kalikasan, lalo na sa ilog at kagubatan. Ayon sa mga matatanda, may mga lugar na “bawal gambalain” dahil tirahan ito ng mga nilalang na hindi mula sa mundong ito. Minsan, may mga taong bigla na lang nagkakasakit, naliligaw kahit pamilyar sa lugar, o nakakaramdam ng mabigat na presensya. Kapag ganito, sinasabi nilang baka “naalihan” o “naabala” ang espiritu. Upang makaiwas, marami ang sumusunod sa pamahiin tulad ng paghingi muna ng pahintulot bago pumasok sa masukal na lugar, o kaya’y pag-iwas sa malakas na pagtawa o ingay kapag gabi sa tabi ng ilog.
                      </p>

                      <h4 className="text-lg font-bold mb-2 text-darkBlue">Maraming nagagalawan</h4>
                      <p className="text-xl"> {/* Larger text for readability */}
                      Dahil sa malapit sila sa kalikasan, sensitibo ang mga taga-tabing-ilog sa mga biglaang pagbabago sa paligid. Kapag may sunod-sunod na pagkakasakit o kakaibang pangyayari, gaya ng pagbaha kahit walang ulan o pagkalat ng mga insekto, iniisip ng ilan na may galit na espiritu sa lugar. Naniniwala sila na ang mga espiritu ng kalikasan na may kakayahang “gumanti” kung naistorbo o hindi sila nirerespeto. May mga kuwento pa ngang kapag may bagong tayong bahay malapit sa ilog, kailangan munang “makiusap” sa pamamagitan ng dasal o alay upang hindi magdulot ng sakit sa mga maninirahan.
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
                          src="/images/FGAWI/Arima o Bolang Kristal 2.jpg"
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
                          src="/images/FGAWI/May nanghihila sa ilalim ng tubig o sinasabi na ipo-ipo 2.jpg"
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
                      <p className="text-xl"> {/* Larger text for readability */}
                      Ang Santelmo, mula sa salitang Kastila na "San Elmo’s Fire", isang kakaibang liwanag o bolang apoy na karaniwang lumilitaw sa gabi, lalo na sa mga liblib na lugar tulad ng ilog, lawa, o bangin. Sa Daet, partikular na sa mga pamayanang nasa tabing-ilog, may mga kuwento ng mga mangingisdang nakakakita ng bolang nagliliyab na lumulutang sa hangin o dumadapo sa ibabaw ng tubig. Bagamat nakakatakot ito, may mga pagkakataong nagsisilbi itong gabay kung saan masagana ang huli at sinasabi ng Santelmo kung saan maraming isda.
Ngunit sa kabila ng magandang dulot nito sa ilang mangingisda, ang karamihan nananatiling takot sa Santelmo. Pinaniniwalaan kasing ito ang kaluluwa ng isang taong hindi matahimik, o isang ispiritung naglalagalag, na maaaring magdala ng masama kapag nilapitan o sinundan. May mga sabi-sabi pa na kapag masyado kang nakatitig o sinubukang habulin ang bolang apoy, maaari kang maligaw, mawala sa sarili, o hindi na makabalik sa pampang.

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
                      <p className="text-xl"> {/* Larger text for readability */}
                      Isang paniniwala na may mga hindi nakikitang puwersa o nilalang sa ilalim ng tubig tulad ng mga engkanto, lamang-lupa, o espiritu ng kalikasan na nanghihila ng mga tao pababa, lalo na sa malalim o matahimik na bahagi ng ilog. Kadalasan, iniuugnay sa biglaang pagkalunod o pagkawala ng isang tao sa gitna ng tubig, kahit siya'y magaling lumangoy.
Madalas itong ginagamit bilang babala sa mga bata at kabataang mahilig magbabad sa tubig, lalo na sa mga lugar na may kasaysayan ng aksidente. May mga kuwento pa nga na kung hindi ka magpapaalam o magpapausog bago pumasok sa ilog, maaari kang hilahin ng "nakatirang ispiritu" roon.
Ang "ipo-ipo" naman tinutukoy din minsan bilang isang anyo ng engkanto o masamang elemento na umiikot at gumagawa ng malalakas na alon sa ilalim ng tubig, na tila ba may sariling isip. 

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
                      src="/images/FGAWI/Nagtitiradoran 1.jpg"
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
                    <p className="text-xl"> {/* Larger text for readability */}
                    Isang karaniwang tagpo sa pagitan ng magkatapat na Barangay VIII at I, kung saan madalas silang nasasangkot sa alitan. Isa sa mga gawi nila kapag may tensiyon o hindi pagkakaunawaan ang pagtitirador. Kanilang ginagamit ang tirador upang batuhin ang kabilang panig, kadalasang ginagawa sa gabi o kapag walang tanod. Nag-ugat ito sa matagal nang kompetisyon, pagka-ingit, at mga personal na bangayan ng mga naninirahan. Ginagamit din ito minsan bilang porma ng pananakot o paghihiganti, lalo na kung may bagong insidente ng away o paninira. Ang ganitong gawi nagpapakita ng matinding tensyon sa pagitan ng dalawang barangay at patuloy na pinapalala ang sigalot sa komunidad.</p>

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
                    <p className="text-xl"> {/* Larger text for readability */}
                    Isang ritwal ng penitensiya tuwing Mahal na Araw kung saan ang mga deboto, matapos ang kanilang pagsasakripisyo gaya ng paghahampas sa sarili o paglalakad ng nakayapak sa ilalim ng araw, bumababa sila sa ilog upang magbanlaw. Ang pagligo o pagbabad sa ilog sumisimbolo ng paglilinis sa katawan at kaluluwa, tanda ng tunay na pagsisisi at paghahangad ng kapatawaran sa mga kasalanan. Para sa marami, hindi lamang ito ritwal kung hindi isang panata, isang taunang tradisyon na pinaniniwalaang may kapangyarihang espiritwal. Bukod sa pagiging bahagi ng kanilang pananampalataya, ang tubig ng ilog itinuturing na banal tuwing ganitong panahon, kaya ang pagbanlaw nagiging huling hakbang ng kanilang sakripisyo bago tuluyang magpahinga.
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
                      src="/images/FGAWI/Pagtatalon sa tulay ng mga batang naglalaro.jpg"
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
                    <p className="text-xl"> {/* Larger text for readability */}
                    Isang karaniwang tanawin tuwing tag-init sa mga pamayanang malapit sa ilog. Ang pagtatalon sa tulay ng mga bata habang masayang naglalaro. Sa kabila ng panganib, ito’y isang masayang gawain na nagpapakita ng kabataan, kalayaan, at kakulitan. Ginagawa nila ito upang magpalamig mula sa init ng araw, o simpleng paraan lang ng pagtatampisaw sa kalikasan. Madalas nagsisigawan sila ng may halong kaba at tuwa bago tumalon, sabay lulubog at muling aahon sa tubig na may halakhak. Ang tulay  nagiging palaruan, habang ang ilog tila kanilang swimming pool. Bagamat itinuturing ng ilan bilang delikado, para sa mga batang ito, ang ganitong laro bahagi na ng kanilang paglaki sa probinsya puno ng simpleng saya, pakikipagbarkadahan, at mga alaala ng kabataan.
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
                onClick={() => document.getElementById("open-naglalaro-gallery")?.click()}
              >
                <Image
                  src="/images/FGAWI/FINAL PAGLALARO NG MGA BATA .jpg"
                  alt="Mga Batang Naglalaro sa Ilog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
                  <span className="sr-only">Buksan ang gallery</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 text-darkBlue">Paglalaro ng mga Bata</h4>
                <p className="text-xl"> {/* Larger text for readability */}
                Sa mga barangay sa tabi ng ilog Daet, karaniwang libangan ng mga bata ang paglalaro sa tubig. Nagkakaroon sila ng pagkakataong makisalamuha, magsaya, at matuto mula sa kalikasan. Kabilang sa mga laro ang pagtatalunan sa tubig, karera ng palutang gamit ang mga dahon o tsinelas, at paligsahan sa paglangoy. May mga batang nanghuhuli ng isda at hipon gamit ang kamay o lambat, at may mga nagtatampisaw at gumagawa ng mga dam o kanal gamit ang putik at bato. Ang mga larong ito ang nagpapalakas ng kanilang samahan at koneksiyon sa kalikasan.
                </p>
                <button
                  id="open-naglalaro-gallery"
                  className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
                >
                  <GalleryButton images={naglalaroImages} label="Tingnan ang mga imahe ng Naglalarong Bata" />
                </button>
              </div>
            </div>

            <div className="card h-full">
  <div className="card-header">
    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
  </div>
  <div
    className="relative h-64 cursor-pointer overflow-hidden"
    onClick={() => document.getElementById("open-bingwit-gallery")?.click()}
  >
    <Image
      src="/images/FGAWI/Pamamana o Bingwit 3.jpg"
      alt="Pangingisda sa Ilog Daet"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
      <span className="sr-only">Buksan ang gallery</span>
    </div>
  </div>
  <div className="p-6">
    <h4 className="text-lg font-bold mb-2 text-darkBlue">Pamamana o Bingwit</h4>
    <p className="text-xl"> {/* Larger text for readability */}
    Isang tradisyunal na paraan ng pangingisda na matagal nang bahagi ng kultura sa mga pamayanang malapit sa ilog. Gumagamit ang mga tao ng pamana na isang mahabang kahoy na may matulis na dulo o sibat, o kaya'y bingwit. Isang kawit na may pain na inilulubog sa tubig upang makahuli ng isda. Karaniwan itong ginagawa sa mga mababaw na bahagi ng ilog, sa mga batuhan, o sa mga lugar na tahimik at hindi malakas ang agos ng tubig.
Bukod sa pagiging praktikal na paraan ng paghahanap ng pagkain, nagsisilbi ring panahon ng pagtuturo mula sa matatanda tungo sa mga bata. Itinuturo sa kanila kung paano kilalanin ang galaw ng tubig, saan matatagpuan ang mga isda, at kung kailan ang tamang oras ng pangingisda na karaniwang madaling araw o hapon. Ang pamamana nangangailangan ng konsentrasiyon, tiyaga, at galing sa pagmamasid, habang ang pagbibingwit naman na isang pagsubok ng pasensiya at tamang timing.

    </p>
    <button
      id="open-bingwit-gallery"
      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
    >
      <GalleryButton images={bingwitImages} label="Tingnan ang mga imahe ng Pangingisda" />
    </button>
  </div>
</div>

<div className="card h-full">
  <div className="card-header">
    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
  </div>
  <div
    className="relative h-64 cursor-pointer overflow-hidden"
    onClick={() => document.getElementById("open-pagtutuli-gallery")?.click()}
  >
    <Image
      src="/images/FGAWI/PAGTUTULI.jpg" // replace this with your actual image
      alt="Pagtutuli o Pagbabad"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
      <span className="sr-only">Buksan ang gallery</span>
    </div>
  </div>
  <div className="p-6">
    <h4 className="text-lg font-bold mb-2 text-darkBlue">Pagtutuli o Pagbabad</h4>
    <p className="text-xl"> {/* Larger text for readability */}
    Isang mahalagang bahagi ang pagtutuli ng tradisyonal na kultura, at bago ito isagawa, may mga hakbang na kailangang sundin para sa kaligtasan at kalinisan. Isang karaniwang hakbang ang pagbabad ng ari sa ilog, na naglalayong linisin ang katawan at maiwasan ang impeksiyon. Nakatutulong din upang mapalambot ang balat at gawing mas madali ang pagtutuli. Ang paghahanda isinasagawa sa ilalim ng gabay ng mga may karanasan at nakatatanda upang matiyak ang kaligtasan at maayos na karanasan para sa batang lalaki.
    </p>
    <button
      id="open-pagtutuli-gallery"
      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
    >
      <GalleryButton images={pagtutuliImages} label="Tingnan ang imahe ng Pagtutuli" />
    </button>
  </div>
</div>

<div className="card h-full">
  <div className="card-header">
    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
  </div>
  <div
    className="relative h-64 cursor-pointer overflow-hidden"
    onClick={() => document.getElementById("open-paglalaba-gallery")?.click()}
  >
    <Image
      src="/images/FGAWI/Paglalaba.jpg" // Replace this with your actual image
      alt="Paglalaba sa Ilog"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
      <span className="sr-only">Buksan ang gallery</span>
    </div>
  </div>
  <div className="p-6">
    <h4 className="text-lg font-bold mb-2 text-darkBlue">Paglalaba</h4>
    <p className="text-xl"> {/* Larger text for readability */}
    Karaniwang gawain sa tabi ng ilog, ginagamit ang daloy ng tubig para sa paghuhugas ng mga damit at iba pang kasuotan. Maaga pa lamang dala na nila ang batya, palu-palo, sabon, at mga maruruming damit. Sa malamig na tubig ng ilog, isa-isa nilang binababad ang mga kasuotan, pinapahiran ng sabon, at pinapalo sa bato upang matanggal ang mga mantsa at dumi.
Ang tunog ng tubig na humahampas sa bato, ang tunog ng palu-palo, at ang sabayang pagkilos ng mga kamay ay tila musika ng araw-araw na gawain. Mahalaga sa kanila ang pagiging malinis ng mga damit hindi lang ito tungkol sa kalinisan, kung hindi sa pag-aalaga sa pamilya.

    </p>
    <button
      id="open-paglalaba-gallery"
      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
    >
      <GalleryButton images={paglalabaImages} label="Tingnan ang mga imahe ng Paglalaba" />
    </button>
  </div>
</div>

<div className="card h-full">
  <div className="card-header">
    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
  </div>
  <div
    className="relative h-64 cursor-pointer overflow-hidden"
    onClick={() => document.getElementById("open-pagliligo-gallery")?.click()}
  >
    <Image
      src="/images/FGAWI/Pagliligo 1.jpg"
      alt="Pagliligo sa Ilog"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
      <span className="sr-only">Buksan ang gallery</span>
    </div>
  </div>
  <div className="p-6">
    <h4 className="text-lg font-bold mb-2 text-darkBlue">Pagliligo</h4>
    <p className="text-xl"> {/* Larger text for readability */}
    Isang mahalagang bahagi ng araw ng mga tao, partikular na sa mainit na panahon, kung saan ginagamit ang ilog bilang lugar ng paglilinis ng sarili. Sa paglipas ng tanghali, kapag ramdam na ang init ng araw, marami ang nagtutungo sa ilog upang magbuhos, maglangoy, at magpalamig. Ang malinaw at dumadaloy na tubig ay nagsisilbing natural na paliguan, malayo sa ingay at abala ng kabihasnan.
Dala ang kanilang sabong pampaligo, shampoo, at minsan timba, ang mga bata o matanda sabay-sabay na nagtatampisaw sa tubig. May mga nagtatawanan, may mga tahimik na nagpapahinga sa tabing-bato, at may mga batang naglalaro, tila ba ang ilog naging isang paraiso ng kasiyahan at kalinisan.

    </p>
    <button
      id="open-pagliligo-gallery"
      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
    >
      <GalleryButton images={pagliligoImages} label="Tingnan ang imahe ng Pagliligo" />
    </button>
  </div>
</div>

<div className="card h-full">
  <div className="card-header">
    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
  </div>
  <div
    className="relative h-64 cursor-pointer overflow-hidden"
    onClick={() => document.getElementById("open-pagbabangka-gallery")?.click()}
  >
    <Image
      src="/images/pamumuhay/PAGBABANGKA.jpg"
      alt="Pagbabangka sa Ilog"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
      <span className="sr-only">Buksan ang gallery</span>
    </div>
  </div>
  <div className="p-6">
    <h4 className="text-lg font-bold mb-2 text-darkBlue">Pagbabangka</h4>
    <p className="text-xl"> {/* Larger text for readability */}
    Isang mahalagang paraan ng transportasiyon sa mga barangay malapit sa ilog, ginagamit sa pangingisda at iba pang pang-araw-araw na gawain. Hindi lamang ito sasakyan kung hindi bahagi na ng kultura at kabuhayan ng mga tao, lalo na sa mga mangingisda. Bukod sa praktikal na gamit, ang pagbabangka nagbibigay ng kapanatagan at karanasan sa kalikasan, at bahagi ng mga pagdiriwang tulad ng fluvial parade. Sa kabila ng makabagong transportasiyon, patuloy na mahalaga ang bangka sa mga lugar at nagsisilbing bilang ugnayan ng tao at kalikasan.
    </p>
    <button
      id="open-pagbabangka-gallery"
      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
    >
      <GalleryButton images={pagbabangkaImages} label="Tingnan ang imahe ng Pagbabangka" />
    </button>
  </div>
</div>


<div className="card h-full">
  <div className="card-header">
    <h3 className="text-xl font-bold text-white">BARANGAY I, III, IV, VIII, AT SAN ISIDRO</h3>
  </div>
  <div
    className="relative h-64 cursor-pointer overflow-hidden"
    onClick={() => document.getElementById("open-balsa-gallery")?.click()}
  >
    <Image
      src="/images/FGAWI/Paggawa ng Balsa gamit ang katawan ng puno ng saging.jpg"
      alt="Paggawa ng Balsa gamit ang katawan ng puno ng saging"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-darkBlue bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center">
      <span className="sr-only">Buksan ang gallery</span>
    </div>
  </div>
  <div className="p-6">
    <h4 className="text-lg font-bold mb-2 text-darkBlue">Paggawa ng Balsa gamit ang katawan ng puno ng saging</h4>
    <p className="text-xl"> {/* Larger text for readability */}
    Ginagamit ang katawan ng puno ng saging bilang materyales upang gumawa ng isang uri ng balsa o sasakyang pang-ilog na magaan at matibay. Dahil sa natural na katangian nitong magaan at may kakayahang lumutang, mainam ito para sa mga simpleng sasakyang ginagamit sa tubig. 
Ang mga kabataan likas na malikhain at maparaan. Ginagamit nila ang mga balsa mula sa katawan ng puno ng saging hindi lamang bilang paraan ng paglangoy sa ilog kung hindi bilang bahagi ng kanilang paglilibang. Sa mga hapon ng tag-init o tuwing walang pasok, makikita silang nagtutulungan sa pagputol, pag-aayos, at pagbuo ng kanilang sariling balsa. Isang gawain na hindi lamang nakaaaliw kung hindi nagpapalalim din ng kanilang koneksiyon sa kalikasan.

    </p>
    <button
      id="open-balsa-gallery"
      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
    >
      <GalleryButton images={balsaImages} label="Tingnan ang imahe ng Paggawa ng Balsa" />
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
                      src="/images/FGAWI/Bayanihan.jpg"
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
                    <p className="text-xl"> {/* Larger text for readability */}
                    Isang mahalagang tradisyon ng pagtutulungan sa komunidad, lalo na sa mga oras ng pangangailangan. Ito ay sumasalamin sa pagkakaisa, malasakit, at damayan ng mga Pilipino. Noong una, makikita ang bayanihan sa pagtulong sa paglilipat ng bahay kubo, ngunit ngayon, isinasabuhay ito sa iba’t ibang paraan tulad ng pagtulong sa paglilinis, pagbibigay donasyon, o simpleng pagtulong sa kapitbahay. Hindi nasusukat ang bayanihan sa laki ng tulong kung hindi sa buo at taos-pusong pagkakawanggawa, isang sandigan sa panahon ng krisis.
                    </p>

                    <button
                      id="open-bayanihan-gallery"
                      className="flex items-center gap-2 text-teal hover:text-tealDark transition-colors mt-2"
                    >
                      <GalleryButton images={bayanihanImages} label="Tingnan ang imahe ng Bayanihan" />
                    </button>
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
