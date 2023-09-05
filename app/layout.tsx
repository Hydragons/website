
'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>('')
  const pathname = usePathname();

  return (

    <html lang='en'>
      <Head>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <body>
        <nav className=" bg-udemBlue lg:bg-opacity-70 bg-opacity-95 absolute z-10 w-full">
          <div className="flex flex-wrap">

            <div id="logoAndName" className="flex items-center pl-8">
              <img src="imgs/udemLogo.png" className='h-12 w-15 pr-5' alt="UDEM Dragonboat logo" />
              <span className="self-center text-xl font-normal whitespace-nowrap text-white tracking-tight">HYDRAGONS</span>
            </div>

            <button data-collapse-toggle="navbar-default" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-auto" aria-controls="navbar-default" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

            <div className={`w-full lg:block lg:w-auto ml-auto flex ${isMenuOpen ? "" : "hidden"}`}>

              <ul className="flex lg:flex-row lg:text-lg lg:ml-auto
              md:flex-col md:mx-auto md:text-center md:text-sm md:mr-auto
              flex-col mx-auto text-center text-base mr-auto
              text-white font-normal whitespace-nowrap py-4 pr-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li>
                  <Link href="/" className={`${pathname === '/' ? 'text-udemLightBlue' : 'text-white'} block py-2 px-4 hover:text-udemLightBlue transition`}>
                    ACCUEIL
                  </Link>
                </li>
                <li>
                  <Link href="/equipe" className={`${pathname === '/equipe' ? 'text-udemLightBlue' : 'text-white'} block py-2 px-4 hover:text-udemLightBlue transition`}>
                    NOTRE ÉQUIPE
                  </Link>
                </li>
                <li>
                  <Link href="/accomplissements" className={`${pathname === '/accomplissements' ? 'text-udemLightBlue' : 'text-white'} block py-2 px-4 hover:text-udemLightBlue transition`}>
                    ACCOMPLISSEMENTS
                  </Link>
                </li>
                <li>
                  <Link href="/club" className={`${pathname === '/club' ? 'text-udemLightBlue' : 'text-white'} block py-2 px-4 hover:text-udemLightBlue transition`}>
                    LE CLUB
                  </Link>
                </li>
                <li>
                  <Link href="/photos" className={`${pathname === '/photos' ? 'text-udemLightBlue' : 'text-white'} block py-2 px-4 hover:text-udemLightBlue transition`}>
                    PHOTOS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`${pathname === '/contact' ? 'text-udemLightBlue' : 'text-white'} block py-2 px-4 hover:text-udemLightBlue transition`}>
                    CONTACTEZ-NOUS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}

        <footer className="relative bg-udemBlue pt-8 pb-6">
          <div className="container mx-auto my-5 px-4">
            <div className="flex flex-wrap text-left">
              <div className="w-full lg:w-6/12 px-4 flex flex-col items-center">
                <h4 className="text-3xl font-semibold text-white">Intéressé(e) à rejoindre l’équipe?</h4>
                <Link href="/contact" >
                  <button className="mt-2 bg-transparent border-2 border-white text-white py-2 px-4 rounded-2xl transition-colors hover:bg-white hover:text-udemBlue active:scale-95 focus:outline-none">
                    Contactez-nous
                  </button>
                </Link>
              </div>
              <div className="w-full mx-auto my-5 lg:w-6/12 px-12">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-5/12 px-4">
                    <span className="block uppercase text-white text-sm font-semibold mb-2">Nos réseaux sociaux</span>
                    {/* Based on this template: https://tailwindcomponents.com/component/footer-9 */}
                    <ul className="list-unstyled text-white">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100095021042903" className="flex items-center space-x-3 hover:text-udemLightBlue transition">
                          <i className="fab fa-facebook"></i>
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/udem.bateaudragon" className="flex items-center space-x-3 hover:text-udemLightBlue transition">
                          <i className="fab fa-instagram"></i>
                          <span>Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />

          </div>
        </footer>

      </body>


    </html >
  )
}