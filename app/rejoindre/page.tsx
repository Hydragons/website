"use client"
import Map from './map.js';
import './map.css';


export default function Home() {

    return (
        <div>
            <div className='relative z-0 '>
                <img src="imgs/rejoindre_MainPic.jpg" className='brightness-75' alt="Accueil Image" />
                <h1 className="absolute uppercase lg:text-6xl md:text-5xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    rejoindre le club</h1>
            </div>

            <div className='w-full p-4'>
                <h1 className='uppercase text-left'>à propos du club</h1>
            </div>

            <div className='grid grid-cols-2 '>

                <div className=''>
                   <h2>ou ets le bclu</h2>
                </div>

                <div className=''>
                    <Map/>
                </div>
            </div>
            

        
            
            

            </div>
       
    )
}
