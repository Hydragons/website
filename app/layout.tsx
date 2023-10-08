
'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import Head from 'next/head'
import Image from 'next/image'

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
        <nav className=" bg-udemBlue absolute z-10 w-full">
          <div className="flex flex-wrap">
            <div id="logoAndName" className="flex items-center pl-8 pr-0">
              <Link href="/">
                <div className="hover:cursor-pointer">
                  <Image src="/imgs/udem_dboat_logo.png" className=' hover:cursor-pointer' alt="UDEM Dragonboat logo"
                    width={15}
                    height={12}
                    sizes="100vw"
                    style={{ width: '25%', height: '15%' }} />
                </div>
              </Link>
            </div>
            <button data-collapse-toggle="navbar-default" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-auto" aria-controls="navbar-default" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

            <div className={`w-full lg:block lg:w-auto ml-auto flex ${isMenuOpen ? "" : "hidden"}`}>

              <ul className="flex lg:flex-row lg:text-base lg:ml-auto
              md:flex-col md:mx-auto md:text-center md:text-sm md:mr-auto
              flex-col mx-auto text-center text-base mr-auto
              text-white font-normal whitespace-nowrap py-3 pr-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

        <footer className="relative bg-udemBlue pt-10 pb-6">
          <div className="container mx-auto my-5 px-4">
            <div className="flex flex-wrap text-left">
              <div className="w-full lg:w-6/12 px-4 flex flex-col items-center">
                <h4 className="text-2xl font-semibold text-white pb-2">Intéressé(e) à rejoindre l’équipe?</h4>
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
                        <a href="https://www.facebook.com/profile.php?id=100095021042903" target="_blank" className="flex items-center space-x-3 hover:text-udemLightBlue transition">
                          <button className="font-semibold text-white inline-flex items-center space-x-2 hover:text-udemLightBlue transition">
                            <svg className="w-4 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                          </button>
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/udem.bateaudragon" target="_blank" className="flex items-center space-x-3 hover:text-udemLightBlue transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
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