"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { useEffect, useState} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (

    <html lang='en'>
      <body>


<nav className="border-gray-200 dark:bg-udemBlue text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <img src="imgs/udemLogo.png" className='h-12 w-15 pr-5' alt="UDEM Dragonboat logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UDEM Bateau-Dragon</span>
    </a>

    {/* FOR WHEN THE SCREEN IS SMALLER, COLLAPSE NAVBAR
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}


    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white">
            Accueil
            </a>
        </li>
        <li>
          <a href="/equipe" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white">
            Notre équipe
            </a>
        </li>
        <li>
          <a href="/accomplissements" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white">
            Accomplissements
            </a>
        </li>
        <li>
          <a href="/rejoindre" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white">
            Rejoindre le club
            </a>
        </li>
        <li>
          <a href="/photos" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white">
            Photos
            </a>
        </li>
        <li>
          <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white">
          Contact
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        {children}


      </body>
    </html>
  )
}
