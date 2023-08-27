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

            <div className='w-full pt-10 pl-32 pr-32 pb-5'>
                <h2 className='text-udemBlue font-semibold text-3xl mb-2 uppercase'>à propos du club</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam fugiat suscipit 
                    ipsam dolorem odio laudantium iste minima delectus natus quia, maiores cum tempore? 
                    Incidunt aliquid doloribus, accusamus odio perferendis unde. Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Cupiditate, nihil inventore! Unde dignissimos dolor assumenda! 
                    Delectus sapiente quas ratione itaque laudantium quidem. Omnis, doloremque in voluptates dolorem d
                    olores tempora quo!</p>
            </div>

            <div className='grid grid-cols-2 pt-10 '>

                <div className='w-full text-center'>
                <h2 className='text-udemBlue font-semibold text-3xl mb-2 uppercase'>où est le club</h2>
                <ul><li>Adresse: </li>
                <li></li></ul>
                </div>

                <div className='pr-32 pt-5'>
                    <Map/>
                </div>
            </div>
            

        
            
            

            </div>
       
    )
}
