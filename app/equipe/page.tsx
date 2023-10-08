import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="bg-video">
                <Image src="/imgs/pic.jpg" className='brightness-75 w-full' alt="Accueil Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} />
                <h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
                    notre équipe</h1>
            </div>

            <div className="inline-flex items-center justify-center w-full pt-10 pb-10">
                <span className="absolute uppercase px-3 text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg -translate-x-1/2 bg-white left-1/2 ">
                    les capitaines
                </span>
            </div>


            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                {/* Geoffrey Wang */}
                <div className="col-span-1"><Image src="/equipe/currentCap/GW.png" alt="photo de Geoffrey Wang" className='ml-auto px-5 pb-10'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '40%', height: 'auto' }} /></div>
                <div className="col-span-2 w-2/3 pb-10">
                    <h2 className='text-udemBlue text-lg font-medium pb-2'>Geoffrey Wang</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                    fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                    placeat nihil, enim magnam fuga ad ducimus quos?</div>

                {/* Alicia Nguy */}
                <div className="col-span-1"><Image src="/equipe/currentCap/AN.png" alt="photo de Alicia Nguy" className='ml-auto px-5 pb-10'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '40%', height: 'auto' }} /></div>
                <div className="col-span-2 w-2/3">
                    <h2 className='text-udemBlue text-lg font-medium pb-2'>Alicia Nguy</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                    fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                    placeat nihil, enim magnam fuga ad ducimus quos?</div>

                {/* Eric Wang */}
                <div className="col-span-1"><Image src="/equipe/currentCap/EW.png" alt="photo de Eric Wang" className='ml-auto px-5 pb-10'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '40%', height: 'auto' }} /></div>
                <div className="col-span-2 w-2/3">
                    <h2 className='text-udemBlue text-lg font-medium pb-2'>Eric Wang</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                    fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                    placeat nihil, enim magnam fuga ad ducimus quos?</div>

                {/* Liamos Nguyen */}
                <div className="col-span-1"><Image src="/equipe/currentCap/LN.png" alt="photo de Liamos Nguyen" className='ml-auto px-5 pb-10'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '40%', height: 'auto' }} /></div>
                <div className="col-span-2 w-2/3">
                    <h2 className='text-udemBlue text-lg font-medium pb-2'>Liamos Nguyen</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                    fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                    placeat nihil, enim magnam fuga ad ducimus quos?</div>

                {/* Leon Li */}
                <div className="col-span-1"><Image src="/equipe/currentCap/LL.png" alt="photo de Leon Li" className='ml-auto px-5 pb-10'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '40%', height: 'auto' }} /></div>
                <div className="col-span-2 w-2/3">
                    <h2 className='text-udemBlue text-lg font-medium pb-2'>Leon Li</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                    fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                    placeat nihil, enim magnam fuga ad ducimus quos?</div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />

            <div className="inline-flex items-center justify-center w-full pb-10">
                <span className="absolute uppercase px-3 text-center text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg -translate-x-1/2 bg-white left-1/2 ">
                    les entraineurs
                </span>
            </div>


                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                    {/* Bernadette */}
                    <div className="col-span-1"><Image src="/equipe/currentCap/B.png" alt="photo de Bernadette" className='ml-auto px-5 pb-10'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '40%', height: 'auto' }} /></div>
                    <div className="col-span-2 w-2/3 pb-10">
                        <h2 className='text-udemBlue text-lg font-medium pb-2'>Bernadette</h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                        fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                        placeat nihil, enim magnam fuga ad ducimus quos?</div>

                    {/* Zee */}
                    <div className="col-span-1"><Image src="/equipe/currentCap/Z.png" alt="photo de Zee" className='ml-auto px-5'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '40%', height: 'auto' }} /></div>
                    <div className="col-span-2 w-2/3">
                        <h2 className='text-udemBlue text-lg font-medium'>Zee</h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et necessitatibus
                        fugiat corrupti officia beatae nobis explicabo vero debitis natus saepe iure recusandae
                        placeat nihil, enim magnam fuga ad ducimus quos?</div>
                </div>

            <hr className="pb-16 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />


            <div className='w-full lg:px-32 md:px-24 sm:px-10 pb-16'>
                <h2 className='text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl mb-2 uppercase pb-5 text-center'>les pagayeurs</h2>

                <h3 className='text-udemBlue font-medium lg:text-2xl md:text-xl text-lg mb-2 uppercase pb-5 pl-5'>saison été 2023</h3>

                <h4 className='text-udemBlue lg:text-xl md:text-lg text-md mb-2 pl-10'>Les entraineurs</h4>
                <div className="flex flex-wrap pb-10">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <ul className='pl-5 ml-14'>
                            <li className='pb-2'>Zee</li>
                            <li className='pb-2'>Bernadette</li>
                        </ul>
                    </div>

                </div>

                <h4 className='text-udemBlue lg:text-xl md:text-lg text-md mb-2 pl-10'>Les pagayeurs</h4>
                <div className="flex flex-wrap pb-10">
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <ul className='pl-5 ml-14'>
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
                        <ul className='pl-5 ml-14'>
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
                        <ul className='pl-5 ml-14'>
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
                        <ul className='pl-5 ml-14'>
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


        </div >
    )
}
