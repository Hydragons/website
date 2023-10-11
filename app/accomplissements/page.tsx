'use client'
import Image from 'next/image'
import React from 'react';
import ScrollUpButton from './button';


export default function Home() {
    return (
        <div>
            <div className='relative z-0'>

                <Image src="/imgs/secondmainpic.jpg" className='brightness-75 ' alt="Accomplissements Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%' }} />
                <h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
                    accomplissements</h1>
            </div>

            <div className="inline-flex items-center justify-center w-full pt-10 lg:pb-10 md:pb-10 pb-5">
                <span className="uppercase text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white ">
                    saison été 2023
                </span>
            </div>

            <div className='grid lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center md:ml-auto ml-0 pb-10'>
                    <Image src="/comp/summer2023/LKO.jpg" alt="LKO image" className=''
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '75%', height: 'auto' }} />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Lachine Knockout</h2>
                    <h4 className='pb-3 font-medium md:text-lg text-base ml-5 text-udemBlue'>200m</h4>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='pb-3 md:text-lg text-base'>Bateau Kai: Argent dans la catégorie étudiante (0:51.82)</li>
                    </ul>
                </div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />


            <div className='grid lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center md:ml-auto ml-0 pb-10'>
                    <Image src="/comp/summer2023/BC.png" alt="Battle at the Canal image" className=''
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '75%', height: 'auto' }} />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Battle at the Canal</h2>
                    <h4 className='pb-3 font-medium md:text-lg text-base ml-5 text-udemBlue'>Relais final</h4>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='pb-3 md:text-lg text-base'>Bateau Kai: Bronze dans le relais final étudiant</li>
                        <li className='pb-3 md:text-lg text-base'>Bateau Zen: Argent dans le relais final étudiant</li>
                    </ul>
                </div>

            </div>



            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />


            <div className='grid lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center md:ml-auto ml-0 pb-10'>
                    <Image src="/comp/summer2023/MC.JPG" alt="Montreal Challenge image" className=''
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '75%', height: 'auto' }} />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Montreal Challenge</h2>
                    <h4 className='pb-3 font-medium md:text-lg text-base ml-5 text-udemBlue'>200m</h4>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='pb-3 md:text-lg text-base'>Bateau Kai: 6e dans la catégorie sports mixte
                            finale C (0:53.23)</li>
                        <li className='pb-3 md:text-lg text-base'>Bateau Zen: Or dans la catégorie sports mixte
                            finale D (0:52.41)</li>
                    </ul>

                    <h4 className='pb-3 font-medium md:text-lg text-base ml-5 text-udemBlue'>500m</h4>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='pb-3 md:text-lg text-base'>Bateau Kai: 5e dans la catégorie sports mixte
                            finale C (2:14.16)</li>
                        <li className='pb-3 md:text-lg text-base'>Bateau Zen: Argent dans la catégorie sports mixte
                            finale D (2:14.96)</li>
                    </ul>

                    <h4 className='pb-3 font-medium md:text-lg text-base ml-5 text-udemBlue'>2000m</h4>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='pb-3 md:text-lg text-base'>Bateau Kai: 3e dans la catégorie étudiante (11:05.05)</li>
                        <li className='pb-3 md:text-lg text-base'>Bateau Zen: 6e dans la catégorie étudiante (11:47.43)</li>
                    </ul>


                </div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto  md:block lg:block" />

            <div className='grid lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center md:ml-auto ml-0 pb-10'>
                    <Image src="/comp/summer2023/Rawdon.png" alt="Rawdon image" className=''
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '75%', height: 'auto' }} />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Rawdon</h2>
                    <h4 className='pb-3 font-medium md:text-lg text-base ml-5 text-udemBlue'>400m</h4>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='pb-3 md:text-lg text-base'>Bateau Kai: 2e dans la petite finale étudiante (1:53.42)</li>
                        <li className='pb-3 md:text-lg text-base'>Bateau Zen: Or dans la grande finale étudiante (1:48.22)</li>
                    </ul>
                </div>

            </div>

            <ScrollUpButton />

        </div>
    )
}
