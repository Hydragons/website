import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className='relative z-0 '>
                <img src="imgs/accomplissements_MainPic.jpg" className='brightness-75' alt="Accueil Image" />
                <h1 className="absolute lg:text-6xl md:text-5xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    ACCOMPLISSEMENTS</h1>
            </div>

            <div className="inline-flex items-center justify-center w-full py-10">
                <hr className="w-1/4 h-1 my-8 border-0  bg-udemLightBlue" />
                <span className="absolute px-3 text-center uppercase text-udemBlue font-semibold lg:text-3xl md:text-2xl text-xl -translate-x-1/2 bg-white left-1/2 ">saison été 2023</span>
            </div>

            <div className='grid lg:grid-cols-2 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
                    <img src="comp/summer2023/LKO.jpg" alt="LKO image" className='border-4 border-udemLightBlue border-solid' />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h3 className='pb-5 text-2xl ml-5 font-semibold'>Lachine Knockout</h3>
                    <h4 className='pb-5 font-semibold text-xl ml-10'>200m</h4>
                    <ul className='list-disc pl-5 ml-14'>
                        <li className='pb-5 text-xl'>Bateau Kai: Argent dans la catégorie étudiante (0:51.82)</li>
                    </ul>
                </div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />

            <div className='grid lg:grid-cols-2 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
                    <img src="comp/summer2023/BC.png" alt="Battle at the Canal image" className='border-4 border-udemLightBlue border-solid' />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h3 className='pb-5 text-2xl ml-5 font-semibold'>Battle at the Canal</h3>
                    <h4 className='pb-5 font-semibold text-xl ml-10'>Relais final</h4>
                    <ul className='list-disc pl-5 ml-14'>
                        <li className='pb-5 text-xl'>Bateau Kai: Bronze dans le relais final étudiant</li>
                        <li className='pb-5 text-xl'>Bateau Zen: Argent dans le relais final étudiant</li>
                    </ul>
                </div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto md:block lg:block" />

            <div className='grid lg:grid-cols-2 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
                    <img src="comp/summer2023/MC.JPG" alt="Montreal Challenge image" className='border-4 border-udemLightBlue border-solid' />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h3 className='pb-5 text-2xl ml-5 font-semibold'>MTL Challenge</h3>

                    <h4 className='pb-5 font-semibold text-xl ml-10'>200m</h4>
                    <ul className='list-disc pl-5 ml-14'>
                        <li className='pb-5 text-xl'>Bateau Kai: 6e dans la catégorie sports mixte
                            finale C (0:53.23)</li>
                        <li className='pb-5 text-xl'>Bateau Zen: Or dans la catégorie sports mixte
                            finale D (0:52.41)</li>
                    </ul>

                    <h4 className='pb-5 font-semibold text-xl ml-10'>500m</h4>
                    <ul className='list-disc pl-5 ml-14'>
                        <li className='pb-5 text-xl'>Bateau Kai: 5e dans la catégorie sports mixte
                            finale C (2:14.16)</li>
                        <li className='pb-5 text-xl'>Bateau Zen: Argent dans la catégorie sports mixte
                            finale D (2:14.96)</li>
                    </ul>

                    <h4 className='pb-5 font-semibold text-xl ml-10'>2000m</h4>
                    <ul className='list-disc pl-5 ml-14'>
                        <li className='pb-5 text-xl'>Bateau Kai: 3e dans la catégorie étudiante (11:05.05)</li>
                        <li className='pb-5 text-xl'>Bateau Zen: 6e dans la catégorie étudiante (11:47.43)</li>
                    </ul>
                </div>

            </div>

            <hr className="pb-16 border-udemLightBlue w-2/3  mx-auto  md:block lg:block" />

            <div className='grid lg:grid-cols-2 lg:pb-16 grid-cols-none md:grid-cols-2 md:pb-10 pd-5'>

                <div className='w-2/3 place-self-center lg:ml-auto md:ml-auto ml-0 pb-10'>
                    <img src="comp/summer2023/Rawdon.png" alt="Rawdon image" className='border-4 border-udemLightBlue border-solid' />
                </div>

                <div className='text-left lg:mr-auto lg:my-auto md:mx-0 mx-0 md:ml-10 ml-10 pb-10 '>
                    <h3 className='pb-5 text-2xl ml-5 font-semibold'>Rawdon</h3>

                    <h4 className='pb-5 font-semibold text-xl ml-10'>400m</h4>
                    <ul className='list-disc pl-5 ml-14'>
                        <li className='pb-5 text-xl'>Bateau Kai: 2e dans la petite finale étudiante (1:53.42)</li>
                        <li className='pb-5 text-xl'>Bateau Zen: Or dans la grande finale étudiante (1:48.22)</li>

                    </ul>

                </div>

            </div>

        </div>
    )
}
