"use client"
import Map from './map.js';
import './map.css';
import Image from 'next/image'
import Link from 'next/link.js';


export default function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    return (
        <div>
            <div className='relative z-0'>

                <Image src="/imgs/thirdmainpic.jpg" className='brightness-75 ' alt="Club Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%' }} />
                <h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
                    le club</h1>
            </div>

            <div className="inline-flex items-center justify-center w-full pt-10 lg:pb-10 md:pb-10">
                <span className="uppercase text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white ">
                    à propos du club
                </span>
            </div>

            <div className='w-full lg:px-32 md:px-24 px-10 pb-16'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam fugiat suscipit
                    ipsam dolorem odio laudantium iste minima delectus natus quia, maiores cum tempore?
                    Incidunt aliquid doloribus, accusamus odio perferendis unde. Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Cupiditate, nihil inventore! Unde dignissimos dolor assumenda!
                    Delectus sapiente quas ratione itaque laudantium quidem. Omnis, doloremque in voluptates dolorem d
                    olores tempora quo!</p>

                <h3 className='text-udemBlue lg:text-2xl md:text-xl text-lg mb-2 pb-5 text-left sm:text-center pt-5'>Nos valeurs</h3>
                <ul className='list-disc md:pl-5 md:ml-14'>
                    <li className='pb-2'>Kaizen: ipsum dolor sit amet consectetur adipisicing elit. Non, saepe
                        expedita! Animi ipsum fugiat iure sit cumque accusantium quis in, ea magnam ab molestias quaerat
                        suscipit voluptatibus, necessitatibus ipsam veritatis.</li>
                    <li className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe
                        expedita! Animi ipsum fugiat iure sit cumque accusantium quis in, ea magnam ab molestias quaerat
                        suscipit voluptatibus, necessitatibus ipsam veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe
                        expedita! Animi ipsum fugiat iure sit cumque accusantium quis in, ea magnam ab molestias quaerat
                        suscipit voluptatibus, necessitatibus ipsam veritatis.</li>
                    <li className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe
                        expedita! Animi ipsum fugiat iure sit cumque accusantium quis in, ea magnam ab molestias quaerat
                        suscipit voluptatibus, necessitatibus ipsam veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe
                        expedita! Animi ipsum fugiat iure sit cumque accusantium quis in, ea magnam ab molestias quaerat
                        suscipit voluptatibus, necessitatibus ipsam veritatis.</li>


                </ul>

            </div>


            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto  md:block lg:block" />

            <div className="inline-flex items-center justify-center w-full lg:pb-10 md:pb-10 pb-5">
                <span className="uppercase text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white ">
                    où sommes-nous?
                </span>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-none md:grid-cols-2 lg:pb-16 pb-10'>

                <div className='text-left lg:mx-auto mx-0 md:ml-10 ml-10 sm:pb-10'>
                    <h3 className='pb-5 text-xl uppercase text-udemBlue'>Saison Été</h3>
                    <ul className='list-disc marker:text-udemBlue pl-5'><li className='pb-5 '>Adresse: </li>
                        <li className='pb-5'>Heures d&apos;ouverture: </li>
                        <li className='pb-5'>Stationnement: </li>
                    </ul>

                    <h3 className='pb-5 text-xl uppercase text-udemBlue'>Saison Hiver</h3>
                    <ul className='list-disc marker:text-udemBlue pl-5'><li className='pb-5 '>Adresse: </li>
                        <li className='pb-5'>Heures d&apos;ouverture: </li>
                        <li className='pb-5'>Stationnement: </li>
                    </ul>

                </div>

                <div className='mx-auto w-full '>
                    {/* <Map ApiUrlWithKey={API_URL}/> */}
                    <Link href="https://maps.app.goo.gl/LpzMBZ6AhUGaukQg7" target="_blank">
                        <div className="hover:cursor-pointer">
                            <Image src="/practices/map.png" className='mx-auto md:mx-0 hover:cursor-pointer hover:border-2 hover:border-udemBlue hover:border-solid' alt="Accueil Image"

                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '70%', height: 'auto' }} />
                        </div>
                    </Link>

                </div>
            </div>


            <hr className="pb-16 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />

            <div className="inline-flex items-center justify-center w-full lg:pb-10 md:pb-10 pb-5">
                <span className="uppercase text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white ">
                    les pratiques
                </span>
            </div>

            <div className='w-full lg:px-32 md:px-24 sm:px-10 pb-16'>
                <div className='grid lg:grid-cols-2 gap-10 pb-10 sm:grid-cols-none md:grid-cols-none'>
                    <div>
                        <h3 className='md:text-xl text-lg uppercase text-udemBlue text-center'>au bassin intérieur</h3>
                        <Image src="/practices/intpractice.jpeg" alt="Photo du lieu de pratique intérieure" className='aspect-square w-2/3 mx-auto p-5'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '65%', height: 'auto' }} />
                        <p className='text-left w-2/3 mx-auto'>En Hiver, .... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero architecto quidem necessitatibus, veniam ipsam odio sequi similique omnis ut voluptas vel moles
                            tias suscipit voluptatibus repellendus neque. Accusamus voluptate reiciendis eveniet?</p>
                    </div>
                    <div>
                        <h3 className='md:text-xl text-lg uppercase text-udemBlue text-center'>au Canal de Lachine</h3>
                        <Image src="/practices/extpractice.png" alt="Photo du lieu de pratique intérieure" className='aspect-square w-2/3 mx-auto p-5'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '65%', height: 'auto' }} />
                        <p className='text-left w-2/3 mx-auto'>En ete, .... Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero architecto quidem necessitatibus, veniam ipsam odio sequi similique omnis ut voluptas vel moles
                            tias suscipit voluptatibus repellendus neque. Accusamus voluptate reiciendis eveniet?</p>
                    </div>
                </div>
            </div>



        </div>

    )
}
