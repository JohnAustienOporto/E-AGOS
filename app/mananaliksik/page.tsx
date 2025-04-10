import ParallaxHero from "@/components/parallax-hero"
import Image from "next/image"

export default function Mananaliksik() {
  return (
    <div className="bg-softWhite">
      {/* Header with Parallax */}
      <ParallaxHero
        imageUrl="/images/ilog-daet-4.png"
        height="300px"
        title="Mga Mananaliksik"
        subtitle="Kilalanin ang mga mananaliksik na nag-ambag sa pag-aaral tungkol sa Ilog Daet"
      />

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkBlue">Tungkol sa Proyekto</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="mb-4">
                    Ang proyektong ito ay nagsimula bilang bahagi ng isang mas malaking inisyatiba para sa
                    pagdodokumento at pangangalaga ng mga lokal na kultura at tradisyon sa Pilipinas.
                  </p>
                  <p>
                    Ang pangunahing layunin ay ang makolekta, mapangalagaan, at maibahagi ang mga kwento, tradisyon, at
                    kaalaman ng mga naninirahan sa tabi ng Ilog Daet, na maaaring mawala sa paglipas ng panahon kung
                    hindi idodokumento.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/images/ilog-daet-5.png" alt="Proyekto ng Pananaliksik" fill className="object-cover" />
                </div>
              </div>

              <div className="section-divider">
                <h3 className="text-xl font-bold mb-4 text-darkBlue">Metodolohiya</h3>
                <p className="mb-4">Ang pananaliksik ay isinagawa gamit ang mga sumusunod na pamamaraan:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Pakikipanayam</strong> - Nakipag-usap ang mga mananaliksik sa mga matatanda at iba pang
                    miyembro ng komunidad upang makolekta ang kanilang mga kwento at karanasan.
                  </li>
                  <li>
                    <strong>Participant Observation</strong> - Nanirahan ang mga mananaliksik sa komunidad para
                    direktang maobserbahan ang pang-araw-araw na buhay at mga gawain ng mga lokal.
                  </li>
                  <li>
                    <strong>Dokumentasyon</strong> - Kumuha ng mga larawan, video, at audio recording para sa mas
                    komprehensibong dokumentasyon.
                  </li>
                  <li>
                    <strong>Pagsusuri ng Literatura</strong> - Sinuri ang mga naunang pag-aaral at dokumentasyon tungkol
                    sa Ilog Daet at mga kalapit na lugar.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-darkBlue">Ang Aming Grupo</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card">
                  <div className="relative h-80 overflow-hidden">
                    <Image src="/images/jiane.png" alt="Jiane Mae M. Pacleta" fill className="object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-darkBlue">Jiane Mae M. Pacleta</h3>
                    <p className="text-sm text-gray-600 mb-4">Mananaliksik</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm text-darkBlue mb-2">PERSONAL NA IMPORMASYON</h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          <strong>Tirahan:</strong> Purok 10, Brgy. VIII Daet, Camarines Norte
                        </li>
                        <li>
                          <strong>Numero ng Telepono:</strong> 09916184610
                        </li>
                        <li>
                          <strong>Petsa ng Kapanganakan:</strong> Marso 9, 2004
                        </li>
                        <li>
                          <strong>Lugar ng Kapanganakan:</strong> Daet Camarines Norte
                        </li>
                        <li>
                          <strong>Katayuang Sibil:</strong> Dalaga
                        </li>
                        <li>
                          <strong>Nasyonalidad:</strong> Pilipino
                        </li>
                        <li>
                          <strong>Lenggwahe:</strong> Filipino
                        </li>
                        <li>
                          <strong>E-mail:</strong> jianemaempacleta@gmail.com
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm text-darkBlue mb-2">EDUKASYON</h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          <div className="font-medium">2022 – Kasalukuyan</div>
                          <div>Batsilyer sa Pansekondaryang Edukasyon Medyor sa Filipino</div>
                          <div className="italic">Camarines Norte State College</div>
                        </li>
                        <li>
                          <div className="font-medium">2020-2022</div>
                          <div>Senior High School</div>
                          <div className="italic">Mabini Colleges, Inc.</div>
                        </li>
                        <li>
                          <div className="font-medium">2016 – 2020</div>
                          <div>Sekondarya</div>
                          <div className="italic">Moreno Integrated School</div>
                        </li>
                        <li>
                          <div className="font-medium">2010 – 2016</div>
                          <div>Elementarya</div>
                          <div className="italic">Moreno Integrated School</div>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm text-darkBlue mb-2">MGA PARANGAL AT GANTIMPALA</h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          <div className="font-medium">2024</div>
                          <div>Parangal ng Dekano (Dean's Lister Awardee)</div>
                          <div className="italic">Ikalawang Semestre A.Y 2023-2024</div>
                        </li>
                        <li>
                          <div className="font-medium">2021</div>
                          <div>Mataas na Karangalan (With High Honor)</div>
                          <div className="italic">Pagtatapos sa Senior High School</div>
                        </li>
                        <li>
                          <div className="font-medium">2019</div>
                          <div>Mataas na Karangalan (With Honor)</div>
                          <div className="italic">Pagtatapos sa Junior High School</div>
                        </li>
                        <li>
                          <div className="font-medium">2015</div>
                          <div>May Karangalan (With Honor)</div>
                          <div className="italic">Pagtatapos sa Elementarya</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-darkBlue mb-2">
                        PAGSASANAY, PALIHAN, AT KUMPERENSIYA NA DINALUHAN
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          <div className="font-medium">2024</div>
                          <div>SANGGATOS: Buwan ng Sining</div>
                        </li>
                        <li>
                          <div className="font-medium">2022</div>
                          <div>
                            DALUYONG: Isang Kumperensiya sa Pananaliksik tungkol sa mga bagong usbong na salita.
                          </div>
                          <div className="italic">(Tagapaglahad ng Pananaliksik)</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="relative h-80 overflow-hidden">
                    <Image src="/images/rica.png" alt="Rica Responde" fill className="object-contain" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-darkBlue">Rica Responde</h3>
                    <p className="text-sm text-gray-600 mb-4">Mananaliksik</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm text-darkBlue mb-2">PERSONAL NA IMPORMASYON</h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          <strong>Tirahan:</strong> Purok 3, Brgy. Calabagas San Vicente, Camarines Norte
                        </li>
                        <li>
                          <strong>Numero ng Telepono:</strong> 09065548196
                        </li>
                        <li>
                          <strong>Petsa ng Kapanganakan:</strong> Agosto 23, 2003
                        </li>
                        <li>
                          <strong>Lugar ng Kapanganakan:</strong> San Vicente Camarines Norte
                        </li>
                        <li>
                          <strong>Katayuang Sibil:</strong> Dalaga
                        </li>
                        <li>
                          <strong>Nasyonalidad:</strong> Pilipino
                        </li>
                        <li>
                          <strong>Lenggwahe:</strong> Filipino
                        </li>
                        <li>
                          <strong>E-mail:</strong> ricaresponde023@gmail.com
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm text-darkBlue mb-2">EDUKASYON</h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          <div className="font-medium">2022 – Kasalukuyan</div>
                          <div>Batsilyer sa Pansekondaryang Edukasyon Medyor sa Filipino</div>
                          <div className="italic">Camarines Norte State College</div>
                        </li>
                        <li>
                          <div className="font-medium">2021-2022</div>
                          <div>Sekondarya</div>
                          <div className="italic">Froilan D. Lopez High school</div>
                        </li>
                        <li>
                          <div className="font-medium">2015-2016</div>
                          <div>Elementarya</div>
                          <div className="italic">V. Orendain Elementary School</div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-darkBlue mb-2">
                        PAGSASANAY, PALIHAN, AT KUMPERENSIYA NA DINALUHAN
                      </h4>
                      <ul className="text-sm space-y-2">
                        <li>
                          <div className="font-medium">2024</div>
                          <div>SANGGATOS: Buwan ng Sining</div>
                        </li>
                      </ul>
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
