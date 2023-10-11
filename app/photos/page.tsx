"use client"
import Image from 'next/image'
import React, { Component } from 'react';
import { Carousel } from "@material-tailwind/react";


export default function Home() {

    return (

        <div>
            <div className='relative z-0'>

<Image src="/imgs/thirdmainpic.jpg" className='brightness-75 ' alt="Club Image"
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%' }} />
<h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
    galerie photos</h1>
</div>

<div className="inline-flex items-center justify-center w-full pt-10 pb-5">
                <span className="uppercase text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg bg-white ">
                    saison été 2023
                </span>
            </div>
            <div className='pb-10'>

                
                <Carousel className="rounded-xl flex items-center w-1/2 mx-auto max-w-md pt-5" loop={true}>
                    <Image
                        src="/carousel/summer2023/item1.jpg"
                        alt="image 1"
                        className="w-full h-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="/carousel/summer2023/item2.JPG"
                        alt="image 2"
                        className="w-full h-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="/carousel/summer2023/item3.JPG"
                        alt="image 3"
                        className="w-full h-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="/carousel/summer2023/item4.JPG"
                        alt="image 4"
                        className="w-full h-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="/carousel/summer2023/item5.JPG"
                        alt="image 5"
                        className="w-full h-full"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />

                </Carousel>


            </div>
        </div>

    )
}

