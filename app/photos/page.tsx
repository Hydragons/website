"use client"
import Image from 'next/image'
import React, { Component } from 'react';
import { Carousel } from "@material-tailwind/react";


export default function Home() {

    return (

        <div>
            <div className='relative z-0 '>
                <img src="imgs/photos_MainPic.jpg" className='brightness-75' alt="Accueil Image" />
                <h1 className="absolute lg:text-6xl md:text-5xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    PHOTOS</h1>
            </div>

            <div className='p-10'>

                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-1/4 h-1 my-8 border-0  bg-udemLightBlue" />
                    <span className="absolute px-3 text-center uppercase text-udemBlue font-base text-2xl -translate-x-1/2 bg-white left-1/2 ">saison été 2023</span>
                </div>
                <Carousel className="rounded-xl flex items-center w-1/2 mx-auto max-w-md pt-5" loop={true}>
                    <img
                        src="carousel/summer2023/item1.jpg"
                        alt="image 1"
                        className="w-full h-full"
                    />
                    <img
                        src="carousel/summer2023/item2.JPG"
                        alt="image 2"
                        className="w-full h-full"
                    />
                    <img
                        src="carousel/summer2023/item3.JPG"
                        alt="image 3"
                        className="w-full h-full"
                    />
                    <img
                        src="carousel/summer2023/item4.JPG"
                        alt="image 4"
                        className="w-full h-full"
                    />
                    <img
                        src="carousel/summer2023/item5.JPG"
                        alt="image 5"
                        className="w-full h-full"
                    />

                </Carousel>


            </div>
        </div>

    )
}

