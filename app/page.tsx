import Image from 'next/image'
import Iframe from 'react-iframe'
import { IBM_Plex_Sans } from 'next/font/google'
import EventsComponent from './components/eventscomponent'
import { Event } from './helper/interfaces';

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
var events: Event[] = [
  // This week test
  { title: "Discovery day", date: addDate("2023-09-23") },
  { title: "Lachine Knockout", date: addDate("2023-09-25") },
  // Next week test
  { title: "Bat Can", date: addDate("2023-09-28") },
  { title: "Montreal Challenge", date: addDate("2023-09-30") },
  // Next month test  
  { title: "Rawdon", date: addDate("2023-10-13") },
  { title: "QCup", date: addDate("2023-10-13") },
  { title: "Worlds Club Cruise", date: addDate("2023-10-13") },
  // Next year test  
  { title: "Nationals selection", date: addDate("2024-02-13") },
  { title: "Paddle sale", date: addDate("2024-11-13") },
  { title: "BBQ", date: addDate("2024-12-13") },
]

export default function Home() {
  return (
    <div>
      <div className='relative z-0'>

        <Image src="/imgs/main_pic.png" className='brightness-75 ' alt="Accueil Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }} />
        <h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
          club sportif bateau dragon de l'université de montréal</h1>
      </div>

      <div className="inline-flex items-center justify-center w-full pt-10 pb-4">
        <hr className="w-1/4 h-1 my-8 border-0  bg-udemLightBlue" />
        <span className="absolute px-3 text-center uppercase text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg -translate-x-1/2 bg-white left-1/2 ">
          À PROPOS DU BATEAU DRAGON
        </span>
      </div>

      {/* insert video here */}
      <div className='grid lg:grid-cols-2 lg:pb-13 lg:px-20 md:px-12 sm:px-5 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

        <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10 mr-8'>
          <Iframe url="https://www.youtube.com/embed/8q2dwN14hbI"
            width="640px"
            height="320px"
            id=""
            className="w-full"
            display="block"
            position="relative" />
        </div>

        <div className='text-left lmx-auto my-auto pb-10 w-2/3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ligula lectus. In euismod elementum sapien in porttitor. In pulvinar, diam eu suscipit aliquam, purus ex dignissim lectus, nec rutrum metus est vel sapien. Nulla ut velit dictum odio eleifend suscipit. Donec eget nibh erat. Proin ultricies varius enim. In sit amet sagittis arcu, in sodales nunc. Duis non nibh aliquet, condimentum neque eu, laoreet justo. Maecenas et eleifend lacus, ac convallis dui.
        </div>

      </div>

      <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />

      {/* Add quote here */}
      <div className='grid lg:grid-cols-2 px-10 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

        <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
          <h3 className={`${quote.className} ${quote.style} lg:text-3xl md:text-2xl sm:text-lg pb-2`}>DON&apos;T BE A SHEEP, BE AN UNDERDOG.</h3>
          <h4 className='pb-5 text-xl ml-10 italic'>-Alicia Nguy, Capitaine 2023</h4>
        </div>

        <div className='pl-10 w-2/3'>
          <Image src="/comp/summer2023/BC.png" alt="Battle at the Canal image" width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} />

        </div>
      </div>

      <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />

      {/* Add events here */}

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white pb-3">
          ÉVÉNEMENTS À VENIR
        </h3>
        <EventsComponent events={events}></EventsComponent>
      </div>

    </div>
  )
}
