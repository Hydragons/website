import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className='relative z-0 '>
                <img src="imgs/rejoindre_MainPic.jpg" className='bg-photo' alt="Accueil Image" />
                <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    REJOINDRE LE CLUB</h1>
            </div>

            <div className='w-full p-4'>
                <h1 className='text-left'>À PROPOS DU CLUB</h1>

            </div>
        </div>
    )
}
