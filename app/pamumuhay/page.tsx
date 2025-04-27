import GalleryButton from "@/components/gallery-button"
import ParallaxHero from "@/components/parallax-hero"
import Image from "next/image"

export default function Pamumuhay() {

  const pagbabangkaImages = [
    {
      src: "/images/pamumuhay/PAGBABANGKA.jpg",
      alt: "Pagbabangka sa Ilog Daet",
    },
    {
      src: "/images/pamumuhay/b1.jpg",
      alt: "Bangka sa ilog",
    },
    {
      src: "/images/pamumuhay/b2.jpg",
      alt: "Pagbabangka ng mga residente",
    },
    {
      src: "/images/pamumuhay/b3.jpg",
      alt: "Pagbabangka ng mga residente",
    },
    {
      src: "/images/pamumuhay/MtoD.png",
      alt: "Pagbabangka ng mga residente",
    },
  ]

  return (
    <div className="bg-softWhite">
      {/* Header with Parallax */}
      <ParallaxHero
        imageUrl="/images/cpp.png"
        height="400px"
        title="Pamumuhay"
        subtitle="Pang-araw-araw na buhay ng mga naninirahan sa tabi ng Ilog Daet"
      />

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-darkBlue">
                Pamumuhay sa BARANGAY I, III, IV, VIII, AT SAN ISIDRO
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagbubuhangin</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/pagbubuhangin 1.jpg"
                      alt="Pagbubuhangin sa Ilog Daet"
                      fill
                      className="object-cover"
                      priority // Add this if the image is critical for loading performance
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xl"> {/* Larger text for readability */}
                      Isang gawaing karaniwang isinasagawa sa tabi ng Ilog Daet, kung saan kumukuha ng buhangin bilang pangunahing pinagkukuhanan ng kabuhayan. Maraming mga mamamayan ang nagkakaroon ng kabuhayan sa pagkuha at pagbebenta ng buhangin na ginagamit sa paggawa ng hollow blocks, semento, at iba pang materyales sa konstruksyon. Itinuturing nilang mahalagang likas na yaman ang buhangin na nagbibigay ng dagdag na kita sa mga pamilya. Bukod pa rito, ang gawaing ito nagsisilbing alternatibong hanapbuhay lalo na sa panahon ng tag-ulan o kapag limitado ang kita nila mula kanila pang pangunahing pangkabuhayan. Kaya’t mahalaga para sa kanila ang ilog hindi lamang bilang pinagkukunan ng pagkain kung hindi bilang kabuoang bahagi ng kanilang ikinabubuhay.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pangingisda</h3>
                  </div>
                  <div className="relative h-64">
                    <Image src="/images/FPamumuhay/Pangingisda 2.jpg" alt="Pangingisda sa Ilog Daet" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Isa sa pangunahing kabuhayan sa tabi ng Ilog Daet ang pangingisda, kung saan nanghuhuli ng isda gamit ang bangka, antipara, lambat, o kawil. Makikitang nagsisilbi ang ilog bilang simbolo ng kanilang matagal nang ugnayan sa tabi ng ilog. Isa sa kanilang paraan sa panghuhuli ng isda sa kanilang barangay at ginagamit ang kawil o kawit na may pain upang makahuli ng isda. Makikita tuwing umaga hanggang hapon ang mga mangingisda na tahimik na nakaupo sa gilid ng ilog o sa kanilang maliliit na bangka, buong tiyagang naghihintay ng huli. Sa bawat hila ng kawil, kasabay ang pananabik at panalangin na may sapat na huli para sa pamilya. 
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagtatanim ng Palay</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/pagtatanim ng palay.jpg"
                      alt="Pagtatanim ng Palay sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Pangunahing pinagkukuhanan ng kabuhayan sa tabi ng Ilog Daet ang agrikultura dahil sa matabang lupa at sapat na patubig na nagbibigay ng angkop na kondisyon para sa pagtatanim. Pagtatanim ng palay ang pangunahing gawain, na siyang pinagmumulan ng bigas na pangunahing pagkain ng mga mamamayan. Bukod sa pansariling konsumo, ang ani nilang palay kanilang naibebenta rin sa lokal na pamilihan, na nagsisilbing karagdagang kita sa kanilang kabuhayan. Sa ganitong paraan, nagiging mahalagang salik ang Ilog Daet sa pagpapatuloy ng kanilang tradisyunal na pamumuhay at pag-unlad ng lokal na ekonomiya.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagtatanim ng Mais</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/Pagtatanim ng Mais.jpg"
                      alt="Pagtatanim ng Mais sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Dahil sa mayabong na lupa at masaganang patubig, naging pangunahing kabuhayan ng mga naninirahan dito ang pagsasaka na kanilang na pakikinabangan sa pang-araw-araw na pamumuhay sa kanilang barangay at tumutugon sa pangangailangan sa pagkain ng mga tao. Bukod sa sariling gamit, naibebenta rin ito sa mga lokal na pamilihan, kaya’t nakatutulong sa pagdagdag ng kita ng mga mamamayan. Sa ganitong paraan, ang ilog Daet patuloy na nagiging mahalagang bahagi ng pamumuhay at kabuhayang nakaugat sa agrikultura.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pag-aalaga ng Gansa</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/Pag-aalaga ng Gansa.jpg"
                      alt="Pag-aalaga ng Gansa sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Isa sa mga alternatibong kabuhayan ng ilang mamamayan sa tabi ng Ilog Daet ang pag-aalaga ng gansa. Dahil sa malapit sa tubig at luntiang kapaligiran, nagiging angkop ang lugar para sa ganitong uri ng hayop. Ang mga gansa kilala sa pagiging matipid alagaan, matatag sa sakit, at madaling pakainin gamit ang mga damo at tirang pagkain.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagtatanim ng Kawayan</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/Pagtatanim ng Kawayan.jpg"
                      alt="Pagtatanim ng Kawayan sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Isang mahalagang gawain na may layuning pangkabuhayan at pangkalikasan. Dahil sa matabang lupa at sapat na tubig mula sa ilog, ang mga kawayan mabilis tumubo at lumago sa lugar. Ginagamit ang kawayan bilang materyales sa paggawa ng mga kasangkapan, muwebles, bakod, at maging sa mga tradisyonal na bahay. Maliban sa mapagkakakitaan, nakatutulong din ito sa pagpigil ng pagguho ng lupa sa gilid ng ilog, at nagsisilbing panangga sa malalakas na agos ng tubig tuwing tag-ulan. Sa ganitong paraan, ang pagtatanim ng kawayan nagiging bahagi ng isang sustenableng pamumuhay na nag-uugnay sa kabuhayan at pangangalaga sa kalikasan.
                    
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pangongontrata ng Buhangin</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/Pangongontrata ng Buhangin.jpg"
                      alt="Pagde-deliver ng Buhangin"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Ang pagde-deliver ng buhangin at graba gamit ang motorsiklo na may sidecar ay isang mahalagang anyo ng transportasyon at kabuhayan para sa mga naninirahan sa tabi ng ilog. Karaniwang kinukuha ang mga materyales na ito mula sa mismong ilog at ibinebenta para sa mga proyektong konstruksyon sa komunidad at kalapit na lugar. Gayunpaman, mahalaga ring isaalang-alang ang wastong pamamaraan sa pagkuha upang mapanatili ang kalikasan ng ilog at maiwasan ang labis na pagkaubos ng likas na yaman.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Buhangin at Graba</h3>
                  </div>
                  <div className="relative h-64">
                    <Image src="/images/FPamumuhay/Buhangin at Graba.jpg" alt="Buhangin at Graba" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Ang buhangin at graba mula sa Ilog Daet ay ginagamit sa konstruksyon ng mga bahay at gusali. Ang pagkuha at pagbebenta ng mga ito ang isang mahalagang pinagkukunan ng kabuhayan para sa maraming pamilya. Mahalagang sangkap ang dalawang materyales na ito sa paggawa ng kongkreto, semento, at iba pang gamit sa konstruksyon. Dahil dito, mataas ang demand sa buhangin at graba bilang pangunahing materyales sa pagtatayo ng bahay, gusali, kalsada, at iba pang imprastruktura. 
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pag-aalaga ng Kalabaw</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/FPamumuhay/Pag-aalaga ng Kalabaw.jpg"
                      alt="Pag-aalaga ng Kalabaw"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Ang pag-aalaga ng kalabaw isang mahalagang bahagi ng kabuhayan at pamumuhay ng mga mamamayan na naninirahan sa tabing-ilog. Kilala ang kalabaw bilang matibay at maaasahang hayop sa pagsasaka, lalo na sa pag-aararo ng bukirin at paghila ng mga kariton o pananim. Karaniwang pinakakain ng damo at pinapaliguan sa ilog upang mapanatiling malinis at malusog. Ang pag-aalaga ng kalabaw hindi lamang nagdudulot ng praktikal na tulong sa pagsasaka kung hindi nagsisilbi ring simbolo ng kasipagan at tradisyonal na pamumuhay sa mga naninirahan sa tabi ng ilog Daet.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pag-aalaga ng Baboy</h3>
                  </div>
                  <div className="relative h-64">
                    <Image src="/images/FPamumuhay/Pag-aalaga ng Baboy.jpg" alt="Pag-aalaga ng Baboy" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Ang pag-aalaga ng baboy isang karaniwang kabuhayan sa mga komunidad na malapit sa Ilog Daet. Madaling alagaan at mabilis dumami, kaya’t ito ay isang magandang mapagkukunan ng pagkain at kita. Bukod sa kanilang karne na pangunahing pinagkukunan ng pagkain, ang mga baboy binebenta rin sa mga lokal na pamilihan. Ang pag-aalaga ng baboy may malaking papel sa pagpapabuti ng kabuhayan ng mga residente, lalo na sa mga mahihirap na komunidad, dahil sa mabilis na paraan ng pagkakaroon ng karagdagang kita.
                    </p>
                  </div>
                </div>

                <div className="card">
                <div className="card-header">
                  <h3 className="text-xl font-bold text-white">Pagbabangka</h3>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/images/FPamumuhay/Pagbabangka 2.jpg"
                    alt="Pagbabangka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                <p className="text-xl"> {/* Larger text for readability */}
                Nagagamit na transportasyon bilang daanan ng mga bangka patungong bayan ng Mercedes at Daet, na nagpapadali sa pamumuhay, kalakalan, at nagpapabuti sa kabuhayan ng mga naninirahan sa paligid nito. Ang mga bangka na dumaraan sa Ilog Daet nagsisilbing pangunahing isa sa paraan ng pagbiyahe ng mga mangingisda dahil sa direktang koneksyon nito sa mga bayan ng Mercedes at Daet, mas pinadali ang pagdaloy ng mga produkto.                  </p>
                  <GalleryButton images={pagbabangkaImages} />
                </div>
              </div>


                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagawaan ng Hollow Blocks</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/PAGAWAAN NG HOLLOW BLOCKS .jpg"
                      alt="Pagawaan ng Hollow Blocks"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <p className="text-xl"> {/* Larger text for readability */}
                  Ang paggawa ng hollow blocks gamit ang buhangin mula sa ilog mahalaga sa kanilang barangay
dahil mayroon itong malaking papel sa lokal na ekonomiya. Ang buhangin na kinukuha mula sa ilog  ginagamit bilang pangunahing sangkap sa paggawa ng mga hollow blocks, na karaniwang ginagamit sa pagtatayo ng mga bahay, kalsada, at iba pang mga estruktura. Ang mga lokal na materyales tulad ng buhangin mula sa ilog ang nagiging susi sa mas mabilis na kita ng mga naninirahan dito.

                    </p>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-xl font-bold text-white">Pagtatanim ng Saging</h3>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/images/FPamumuhay/Pagtatanim ng Saging 1.jpg"
                    alt="Pagtatanim ng Saging"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                <p className="text-xl"> {/* Larger text for readability */}
                Kanilang pinakikinabangan sa pagkain sa pang-araw-araw na pamumuhay sa kanilang barangay. Maliban dito, nagsisilbi rin itong pangunahing pinagkukunan ng kanilang kabuhayan, sapagkat naibebenta nila ang kanilang ani sa mga kalapit na pamilihan, na nagbibigay sa kanila ng dagdag na kita. Ang kanilang mga produkto, tulad ng mga gulay, prutas, o agrikultural na kalakal, tumutulong sa pagpapalago ng lokal na ekonomiya at sa pagtataguyod ng mga ugnayang pangkalakalan sa mga kalapit na komunidad. Sa ganitong paraan, hindi lamang nakakamtan ng mga residente ang kanilang pangangailangan sa pagkain, kung hindi nagiging mahalaga rin ang kanilang kontribusyon sa lokal na merkado, na nagpapalawak ng kanilang kabuhayan at oportunidad.                  </p>
                </div>
              </div>
            </div>


              

                      <div className="card mb-8">
            <div className="card-header">
              <h3 className="text-xl font-bold text-white">Paglilikas tuwing may bagyo</h3>
            </div>
            <div className="relative h-64">
              <Image src="/images/FPamumuhay/Paglilikas tuwing may bagyo.jpg" alt="Paglilikas tuwing may bagyo" fill className="object-cover" />
            </div>
            <div className="p-6">
                    <p className="text-xl"> {/* Larger text for readability */}
                    Isang mahalagang hakbang na isinasagawa ng mga tao upang masiguro ang kanilang kaligtasan tuwing may banta ng malalakas na bagyo at pagbaha ay ang paghahanda at pagpaplano ng mga diskarte sa pagtugon sa mga kalamidad. Kabilang dito ang paglilikas sa mga ligtas na lugar, pagsiguro ng mga suplay ng pagkain at inumin, at ang pagtatayo ng mga pansamantalang mga kanlungan upang maiwasan ang pinsala mula sa mga natural na kalamidad. Sa gitna ng sakuna kanilang hinaharap ito ng buong may katatagan, pagkakaisa, at bayanihan. Gayunpaman, sa kabila ng mga pagsubok, ang mga tao sa komunidad nagpapakita ng matinding pagnanais na magtulungan at magsanib-puwersa upang malampasan ang mga pagsubok. Nagsisilbing simbolo ang kanilang mga karanasan sa paglikas at pagtulong sa isa’t isa ng diwa ng bayanihan, isang pagpapahalaga na nagpapakita ng malasakit at pagtutulungan sa oras ng pangangailangan. Sa kabila ng mga pagbabago sa kanilang kapaligiran, ang mga kuwento ng buhay sa ilog nagpapatuloy, naglalarawan ng kanilang katatagan, pagkakaisa, at patuloy na pag-asa.
              </p>
              <a
                href="https://images.app.goo.gl/W8aBt6dgx6rUEH2y5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Tingnan ang larawan
              </a>
            </div>
          </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/images/pagtatanim.jpg" alt="Ilog Daet" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-darkBlue">Kahalagahan ng Ilog Daet</h3>
                  <p className="text-xl"> {/* Larger text for readability */}
                  Tunay ngang duyan ng kabihasnan, sibilisayon at pag-unlad ang ilog. Napatunayan na kung saan mayroong ilog, doon sumisibol isang komunidad at pinagmumulan ng kabuhayan ng pamayanan. Kagaya rin ng bayan ng Daet na unang tinawag na “diit-diit”, isang salitang Bikol na nangangahulugang malapit sa isa’t isa na kinalaunana’y naging daet-daet hanggang sa tuluyang tinawag na bayan ng Daet. Mapapansin na magkakatabi ang mga Brgy. I, Brgy. III, Brgy. IV, Brgy. VIII, at Brgy. San Isidro, na sumisimbolo sa pagkakaisa at matibay na samahan ng mga pamayanan. Gayundin, matatagpuan ang karamihan sa mga pamayananang ito na nasa tabing ilog sa pinakasentro ng bayan na nagsisilbing puso ng bayan ng Daet. Patunay ito na ang ilog buhay.
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
