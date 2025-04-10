import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">E-Agos</h3>
            <p className="text-lightBlue">
              Naglalaman ito ng mga impormasyon tungkol sa Naratibong Salaysay ng mga Naninirahan sa Tabi ng Ilog Daet.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Mga Pahina</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-lightBlue hover:text-white transition-colors">
                  Tahanan
                </Link>
              </li>
              <li>
                <Link href="/paniniwala-at-gawi" className="text-lightBlue hover:text-white transition-colors">
                  Paniniwala at Gawi
                </Link>
              </li>
              <li>
                <Link href="/pamumuhay" className="text-lightBlue hover:text-white transition-colors">
                  Pamumuhay
                </Link>
              </li>
              <li>
                <Link href="/mananaliksik" className="text-lightBlue hover:text-white transition-colors">
                  Mananaliksik
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tungkol sa Proyekto</h3>
            <p className="text-lightBlue">
              Magsisilbi ang Website na ito bilang preserbasyon at Magagamit bilang kagamitang pantulong sa pagpapaunlad
              ng kaalaman.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-lightBlue text-center">
          <p className="text-lightBlue">&copy; {new Date().getFullYear()} E-Agos. Lahat ng karapatan ay nakalaan.</p>
        </div>
      </div>
    </footer>
  )
}
