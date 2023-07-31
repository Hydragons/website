'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, } : { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>('')

  return (

    <html lang='en'>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

      <body>


<nav className="dark:bg-udemBlue text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <img src="imgs/udemLogo.png" className='h-12 w-15 pr-5' alt="UDEM Dragonboat logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UDEM Bateau-Dragon</span>
    </a>

    {/* FOR WHEN THE SCREEN IS SMALLER, COLLAPSE NAVBAR */}
    <button data-collapse-toggle="navbar-default" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>


    <div className={`w-full lg:block lg:w-auto ${ isMenuOpen ? "" : "hidden"}`}>
      <ul className="absolute w-full lg:relative font-medium flex flex-col items-center p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
            Accueil
            </a>
        </li>
        <li>
          <a href="/equipe" className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
            Notre équipe
            </a>
        </li>
        <li>
          <a href="/accomplissements" className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
            Accomplissements
            </a>
        </li>
        <li>
          <a href="/rejoindre" className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
            Rejoindre le club
            </a>
        </li>
        <li>
          <a href="/photos" className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
            Photos
            </a>
        </li>
        <li>
          <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
          Contact
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        {children}


      </body>

<footer className="relative dark:bg-udemBlue pt-8 pb-6">
  <div className="container mx-auto my-5 px-4">
    <div className="flex flex-wrap text-left lg:text-left">
    <div className="w-full lg:w-6/12 px-4 flex flex-col items-center">
  <h4 className="text-3xl fonat-semibold text-white">Intéressé(e) à rejoindre l’équipe?</h4>
  <button className="mt-2 bg-transparent border-2 border-white text-white py-2 px-4 rounded-2xl transition-colors hover:bg-white hover:text-udemBlue active:scale-95 focus:outline-none">
    Contactez-nous
  </button>
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
    <hr className="my-6 border-blueGray-300"/>

  </div>
</footer>
    </html>
  )
}
