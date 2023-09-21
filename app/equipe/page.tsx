import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="bg-video">
                <video className="bg-video__content brightness-90" autoPlay muted loop src="imgs/equipe_MainVid.mp4">
                </video>
                <h1 className="absolute lg:text-6xl md:text-5xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    NOTRE ÉQUIPE</h1>
            </div>

            <div className='w-full pt-10 lg:px-32 md:px-24 px-10'>
                <h2 className='text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl mb-2 uppercase pb-5 text-left '>les capitaines</h2>
            </div>

            <div className="flex flex-wrap pb-10">
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <h3 className='text-2xl text-udemBlue text-center font-medium'>Geoffrey Wang</h3>
                    <img src="equipe/currentCap/GW.png" alt="photo de Geoffrey Wang" className='w-2/3 mx-auto p-5' />
                    <p className='bg-gray-400 text-white w-2/3 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque temporibus maiores omnis nulla soluta eos neque sunt laborum praesentium aspernatur dolores esse vel unde corporis
                        autem modi dolore, repellat incidunt!</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <h3 className='text-2xl text-udemBlue text-center font-medium'>Eric Wang</h3>
                    <img src="equipe/currentCap/EW.png" alt="photo de Eric Wang" className='w-2/3 mx-auto p-5' />
                    <p className='bg-gray-400 text-white w-2/3 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque temporibus maiores omnis nulla soluta eos neque sunt laborum praesentium aspernatur dolores esse vel unde corporis
                        autem modi dolore, repellat incidunt!</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <h3 className='text-2xl text-udemBlue text-center font-medium'>Alicia Nguy</h3>
                    <img src="equipe/currentCap/AN.png" alt="photo de Alicia Nguy" className='w-2/3 mx-auto p-5' />
                    <p className='bg-gray-400 text-white w-2/3 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque temporibus maiores omnis nulla soluta eos neque sunt laborum praesentium aspernatur dolores esse vel unde corporis
                        autem modi dolore, repellat incidunt!</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                    <h3 className='text-2xl text-udemBlue text-center font-medium'>Liamos Nguyen</h3>
                    <img src="equipe/currentCap/LN.png" alt="photo de Liamos Nguyen" className='w-2/3 mx-auto p-5' />
                    <p className='bg-gray-400 text-white w-2/3 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque temporibus maiores omnis nulla soluta eos neque sunt laborum praesentium aspernatur dolores esse vel unde corporis
                        autem modi dolore, repellat incidunt!</p>
                </div>
            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />

            <div className='w-full lg:px-32 md:px-24 sm:px-10 pb-16'>
                <h2 className='text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl mb-2 uppercase pb-5 text-center'>les entraineurs</h2>
                <div className='grid lg:grid-cols-2 gap-10 pb-10 sm:grid-cols-none md:grid-cols-none'>
                    <div className='pb-5'>
                        <h3 className='text-2xl text-udemBlue text-center font-medium'>Zee </h3>
                        <img src="equipe/currentCap/Z.png" alt="photo de Zee" className='h-2/3 mx-auto p-5' />
                        <p className='bg-gray-400 text-white w-2/3 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque temporibus maiores omnis nulla soluta eos neque sunt laborum praesentium aspernatur dolores esse vel unde corporis
                            autem modi dolore, repellat incidunt!</p>
                    </div>
                    <div className='pb-5'>
                        <h3 className='text-2xl text-udemBlue text-center font-medium'>Bernadette</h3>
                        <img src="equipe/currentCap/B.png" alt="photo de Bernadette" className='h-2/3 mx-auto p-5' />
                        <p className='bg-gray-400 text-white w-2/3 mx-auto p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque temporibus maiores omnis nulla soluta eos neque sunt laborum praesentium aspernatur dolores esse vel unde corporis
                            autem modi dolore, repellat incidunt!</p>
                    </div>
                </div>
            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3 mx-auto md:block lg:block" />


            <div className='w-full lg:px-32 md:px-24 sm:px-10 pb-16'>
                <h2 className='text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl mb-2 uppercase pb-5 text-center'>les rammeurs</h2>

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

                <h4 className='text-udemBlue lg:text-xl md:text-lg text-md mb-2 pl-10'>Les rammeurs</h4>
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
