import Image from 'next/image'
import Iframe from 'react-iframe'
import { IBM_Plex_Sans } from 'next/font/google'
import EventsComponent from './components/eventscomponent'
import { Event } from './components/eventscomponent'

const quote = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['italic'],
});

function addDate(dateString: string) {
  const NEW_YORK_OFFSET = -5 * 60
  return new Date(new Date(dateString).getTime() - NEW_YORK_OFFSET * 60 * 1000);
}
// const newYorkDate = new Date(utcDate.getTime() - newYorkOffset * 60 * 1000);
var events: Event[] = [{title:"Discovery day", date:addDate("2023-09-21")}, {title:"DBoat Festival", date:addDate("2024-02-13")}]

export default function Home() {
  return (
    <div>
      <div className='relative z-0'>
        <img src="imgs/accueil_MainPic.jpg" className='brightness-75 ' alt="Accueil Image" />
        <h1 className="absolute lg:text-6xl md:text-5xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
          CLUB DE BATEAU DRAGON DE L'UNIVERSITÉ DE MONTRÉAL</h1>
      </div>

      <div className="inline-flex items-center justify-center w-full py-10">
                <hr className="w-1/4 h-1 my-8 border-0  bg-udemLightBlue" />
                <span className="absolute px-3 text-center uppercase text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl -translate-x-1/2 bg-white left-1/2 ">
                  À PROPOS DU BATEAU DRAGON
                </span>
            </div>

            {/* insert video here */}
            <div className='grid lg:grid-cols-2 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
                <Iframe url="https://www.youtube.com/embed/zjvl02xac7s"
                width="640px"
                height="320px"
                id=""
                className="w-2/3"
                display="block"
                position="relative"/>
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ligula lectus. In euismod elementum sapien in porttitor. In pulvinar, diam eu suscipit aliquam, purus ex dignissim lectus, nec rutrum metus est vel sapien. Nulla ut velit dictum odio eleifend suscipit. Donec eget nibh erat. Proin ultricies varius enim. In sit amet sagittis arcu, in sodales nunc. Duis non nibh aliquet, condimentum neque eu, laoreet justo. Maecenas et eleifend lacus, ac convallis dui.
                </div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />

            {/* Add quote here */}
            <div className='grid lg:grid-cols-2 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

              <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
                    <h3 className={`${quote.className} ${quote.style} text-4xl pb-2`}>DON'T BE A SHEEP, BE AN UNDERDOG.</h3>
                    <h4 className='pb-5 text-xl ml-10 italic'>-Alicia Nguy, Capitaine 2023</h4>
              </div>

                <div className='pl-10 place-self-center w-2/3'>
                    <img src="comp/summer2023/BC.png" alt="Battle at the Canal image" className='border-4 border-udemLightBlue border-solid' />
                </div>

                

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />
            
            {/* Add events here */}
            
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl bg-white">
              ÉVÉNEMENTS À VENIR
            </h3>
            <EventsComponent events={events}></EventsComponent>
          </div>
                
    </div>
  )
}
