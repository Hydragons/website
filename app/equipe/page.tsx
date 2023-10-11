'use client'
import Image from 'next/image'
import React from 'react';
import ScrollUpButton from './button';

export default function Home() {

    return (
        <div>
            <div className='relative z-0'>

                <Image src="/imgs/secondmainpic.jpg" className='brightness-75 ' alt="Equipe Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%' }} />
                <h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
                    notre équipe</h1>
            </div>

            <div className="inline-flex items-center justify-center w-full pt-10 lg:pb-10 md:pb-10 pb-5">
                <span className="uppercase text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white ">
                    les capitaines
                </span>
            </div>

            <div className="container p-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/3 md:mt-0 mb-4 md:mb-0 text-center md:text-left ">
                        <Image
                            src="/equipe/currentCap/GW.png"
                            alt="photo de Geoffrey Wang"
                            className="object-center mx-auto md:mx-0 px-5 md:ml-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: 'auto' }}
                        />
                    </div>
                    <div className="px-5 md:px-0 md:w-2/3">
                        <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Geoffrey Wang</h2>
                        <p className="text-gray-700 md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates inventore!
                            Distinctio laborum quod in inventore! Officia modi corporis fugiat voluptatum consequuntur,
                            repellat natus eius sint repudiandae ipsa reiciendis doloribus!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/3 md:mt-0 mb-4 md:mb-0 text-center md:text-left ">
                        <Image
                            src="/equipe/currentCap/LL.png"
                            alt="photo de Leon Li"
                            className="object-center mx-auto md:mx-0 px-5 md:ml-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: 'auto' }}
                        />
                    </div>
                    <div className="px-5 md:px-0 md:w-2/3">
                        <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Leon Li</h2>
                        <p className="text-gray-700 md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates inventore!
                            Distinctio laborum quod in inventore! Officia modi corporis fugiat voluptatum consequuntur,
                            repellat natus eius sint repudiandae ipsa reiciendis doloribus!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/3 md:mt-0 mb-4 md:mb-0 text-center md:text-left ">
                        <Image
                            src="/equipe/currentCap/EW.png"
                            alt="photo de Eric Wang"
                            className="object-center mx-auto md:mx-0 px-5 md:ml-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: 'auto' }}
                        />
                    </div>
                    <div className="px-5 md:px-0 md:w-2/3">
                        <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Eric Wang</h2>
                        <p className="text-gray-700 md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates inventore!
                            Distinctio laborum quod in inventore! Officia modi corporis fugiat voluptatum consequuntur,
                            repellat natus eius sint repudiandae ipsa reiciendis doloribus!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container p-4 pb-14">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/3 md:mt-0 mb-4 md:mb-0 text-center md:text-left ">
                        <Image
                            src="/equipe/currentCap/LN.png"
                            alt="photo de Liamos Nguyen"
                            className="object-center mx-auto md:mx-0 px-5 md:ml-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: 'auto' }}
                        />
                    </div>
                    <div className="px-5 md:px-0 md:w-2/3">
                        <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Liamos Nguyen</h2>
                        <p className="text-gray-700 md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates inventore!
                            Distinctio laborum quod in inventore! Officia modi corporis fugiat voluptatum consequuntur,
                            repellat natus eius sint repudiandae ipsa reiciendis doloribus!
                        </p>
                    </div>
                </div>
            </div>


            <hr className="py-10 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />

            <div className="inline-flex items-center justify-center w-full pb-10">
                <span className="absolute uppercase px-3 text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg -translate-x-1/2 bg-white left-1/2 ">
                    les entraineurs
                </span>
            </div>

            <div className="container p-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/3 md:mt-0 mb-4 md:mb-0 text-center md:text-left ">
                        <Image
                            src="/equipe/currentCap/B.png"
                            alt="photo de Bernadette"
                            className="object-center mx-auto md:mx-0 px-5 md:ml-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: 'auto' }}
                        />
                    </div>
                    <div className="px-5 md:px-0 md:w-2/3">
                        <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Bernadette</h2>
                        <p className="text-gray-700 md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates inventore!
                            Distinctio laborum quod in inventore! Officia modi corporis fugiat voluptatum consequuntur,
                            repellat natus eius sint repudiandae ipsa reiciendis doloribus!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center">
                    <div className="w-full md:w-1/3 md:mt-0 mb-4 md:mb-0 text-center md:text-left ">
                        <Image
                            src="/equipe/currentCap/Z.png"
                            alt="photo de Zee"
                            className="object-center mx-auto md:mx-0 px-5 md:ml-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: 'auto' }}
                        />
                    </div>
                    <div className="px-5 md:px-0 md:w-2/3">
                        <h2 className="text-lg md:text-xl text-udemBlue font-medium mb-4">Zee</h2>
                        <p className="text-gray-700 md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates inventore!
                            Distinctio laborum quod in inventore! Officia modi corporis fugiat voluptatum consequuntur,
                            repellat natus eius sint repudiandae ipsa reiciendis doloribus!
                        </p>
                    </div>
                </div>
            </div>



            <hr className="pb-16 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />

            <div className="inline-flex items-center justify-center w-full pb-10">
                <span className="absolute uppercase px-3 text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg -translate-x-1/2 bg-white left-1/2 ">
                    les anciens pagayeurs
                </span>
            </div>

            <div className='w-full pb-16 text-center'>
                <h3 className='text-udemBlue font-medium lg:text-2xl md:text-xl text-lg mb-2 uppercase pb-5'>saison été 2023</h3>

                <h4 className='text-udemBlue lg:text-lg md:text-md text-base uppercase font-light mb-2'>Les capitaines</h4>
                <div className="flex flex-wrap pb-10">
                    <div className="w-full">
                        
                        <ul className=''>
                            <li className='pb-2'>Eric Wang</li>
                            <li className='pb-2'>Alicia Nguy</li>
                            <li className='pb-2'>Liamos Nguyen</li>
                            <li className='pb-2'>Geoffrey Wang</li>
                            
                        </ul>
                    </div>

                </div>

                <h4 className='text-udemBlue lg:text-lg md:text-md text-base uppercase font-light mb-2'>Les entraineurs</h4>
                <div className="flex flex-wrap pb-10">
                    <div className="w-full">
                        <ul className=''>
                            <li className='pb-2'>Zee</li>
                            <li className='pb-2'>Bernadette</li>
                        </ul>
                    </div>

                </div>

                <h4 className='text-udemBlue lg:text-lg md:text-md text-base uppercase font-light mb-2'>Les pagayeurs</h4>
                <div className="flex flex-wrap pb-10">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <ul className=''>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                        </ul>

                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <ul className=''>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                        </ul>

                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <ul className=''>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                        </ul>

                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <ul className=''>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                            <li className='pb-2'>John Doe</li>
                        </ul>

                    </div>
                </div>

            </div>

            <ScrollUpButton />
            
        </div >
    )
}

