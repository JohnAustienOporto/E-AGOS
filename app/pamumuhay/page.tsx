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
        imageUrl="/images/pamumuhay/MtoD.png"
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
                      src="/images/pagbubuhangin.jpg"
                      alt="Pagbubuhangin sa Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Isang gawaing karaniwang isinasagawa sa tabi ng Ilog Daet, kung saan kumukuha ng buhangin bilang
                      pangunahing pinagkukunan ng kabuhayan.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pangingisda</h3>
                  </div>
                  <div className="relative h-64">
                    <Image src="/images/pamumuhay/PANGINGISDA.jpg" alt="Pangingisda sa Ilog Daet" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p>
                      Isa sa pangunahing kabuhayan sa tabi ng Ilog Daet ang pangingisda, kung saan nanghuhuli ng isda
                      gamit ang bangka, lambat, o kawil.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagtatanim ng Palay</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/taniman-ng-palay.jpg"
                      alt="Pagtatanim ng Palay sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Pangunahing pinagkukuhanan ng kabuhayan sa tabi ng Ilog Daet dahil sa matabang lupa at sapat na
                      patubig. Pagtatanim ng palay ay nagbibigay ng bigas na pangunahing pagkain ng mga Pilipino.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagtatanim ng Mais</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/pagtatanim-ng-mga-mais.jpg"
                      alt="Pagtatanim ng Mais sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Bukod sa palay, ang mais ay isa ring pangunahing pananim sa mga lugar malapit sa Ilog Daet. Ito ay
                      ginagamit bilang pagkain at pakain sa mga alagang hayop.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pag-aalaga ng Hayop</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/pag-aalaga-ng-gansa.jpg"
                      alt="Pag-aalaga ng Gansa sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Pangunahing pamumuhay na nagbibigay pagkain at kabuhayan sa mga residente. Ang pag-aalaga ng mga
                      hayop tulad ng gansa, manok, at baboy ay karaniwang makikita sa mga komunidad sa tabi ng ilog.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pagtatanim ng Kawayan</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/pagtatanim-ng-kawayan.jpg"
                      alt="Pagtatanim ng Kawayan sa tabi ng Ilog Daet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Ang kawayan ay isang mahalagang halaman sa tabi ng ilog na ginagamit sa pagpapagawa ng bahay,
                      muwebles, at iba pang kagamitan. Ito rin ay nakatutulong sa pagpigil nang pagguho ng lupa sa tabi ng
                      ilog.
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
                      src="/images/pag-deliver-ng-buhangin.jpg"
                      alt="Pagde-deliver ng Buhangin"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Ang pagde-deliver ng buhangin at graba gamit ang motorsiklo at sidecar ay isang paraan ng
                      transportasyon at kabuhayan para sa mga naninirahan sa tabi ng ilog. Ang mga materyales na ito ay
                      karaniwang kinukuha mula sa ilog at ibinebenta para sa konstruksyon.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Buhangin at Graba</h3>
                  </div>
                  <div className="relative h-64">
                    <Image src="/images/buhangin.jpg" alt="Buhangin at Graba" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p>
                      Ang buhangin at graba mula sa Ilog Daet ay ginagamit sa konstruksyon ng mga bahay at gusali. Ang
                      pagkuha at pagbebenta ng mga ito ay isang mahalagang pinagkukunan ng kabuhayan para sa maraming
                      pamilya.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pag-aalaga ng Kalabaw</h3>
                  </div>
                  <div className="relative h-64">
                    <Image
                      src="/images/pagaalagangkalabaw.jpg"
                      alt="Pag-aalaga ng Kalabaw"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p>
                      Ang kalabaw ay mahalagang hayop sa buhay ng mga magsasaka sa tabi ng Ilog Daet. Ito ay ginagamit
                      sa pagsasaka at nagsisilbing katulong sa paghahakot ng mga produkto.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="text-xl font-bold text-white">Pag-aalaga ng Baboy</h3>
                  </div>
                  <div className="relative h-64">
                    <Image src="/images/pagaalagangbaboy.jpg" alt="Pag-aalaga ng Baboy" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p>
                      Ang pag-aalaga ng baboy ay isang mahalagang hanapbuhay para sa mga pamilya sa tabi ng Ilog Daet.
                      Ito ay nagbibigay ng karagdagang kita at pagkain sa mga residente.
                    </p>
                  </div>
                </div>

                <div className="card">
                <div className="card-header">
                  <h3 className="text-xl font-bold text-white">Pagbabangka</h3>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/images/pamumuhay/PAGBABANGKA.jpg"
                    alt="Pagbabangka"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p>
                    Nagagamit na transportasyon bilang daanan ng mga bangka patungong bayan ng Mercedes at Daet, na nagpapadali sa pamumuhay, kalakalan, at nagpapabuti sa kabuhayan ng mga naninirahan sa paligid nito.
                  </p>
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
                    <p>
                      Ang paggawa ng hollow blocks gamit ang buhangin mula sa ilog ay isang industriya sa lugar. Ito ay
                      nagbibigay ng trabaho sa mga residente at nagsusulong ng lokal na konstruksyon.
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
                    src="/images/pamumuhay/saging.jpg"
                    alt="Pagtatanim ng Saging"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p>
                  pagtatanim ng saging - saging na kanilang pinakikinabangan sa kanilang pagkain sa pang-araw-araw na pamumuhay sa kanilang barangay. Maliban dito, nagsisilbi rin pangunahing pinagkukunan ng kanilang kabuhayan, sapagkat naibebenta nila ang kanilang ani sa mga kalapit na pamilihan.                  </p>
                </div>
              </div>
            </div>


              

                      <div className="card mb-8">
            <div className="card-header">
              <h3 className="text-xl font-bold text-white">Paglilikas tuwing may bagyo</h3>
            </div>
            <div className="relative h-64">
              <Image src="/images/paglikas.jpg" alt="Paglilikas tuwing may bagyo" fill className="object-cover" />
            </div>
            <div className="p-6">
              <p>
                Isang mahalagang hakbang na isinasagawa ng mga tao upang masiguro ang kanilang kaligtasan tuwing may
                banta ng malalakas na bagyo at pagbaha.
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
                  <p className="mb-4">
                    Ang Ilog Daet ay hindi lamang isang natural na anyong tubig kundi isang mahalagang bahagi ng buhay
                    ng mga naninirahan sa paligid nito. Ito ay nagsisilbing pinagkukunan ng tubig, pagkain, at kabuhayan
                    para sa maraming pamilya sa Barangay I at iba pang mga barangay sa paligid.
                  </p>
                  <p>
                    Ang ilog ay nagsisilbing sentro ng komunidad kung saan nagaganap ang iba't ibang gawain tulad ng
                    paglalaba, pagliligo, at iba pang pang-araw-araw na aktibidad.
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
