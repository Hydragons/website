import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className='relative z-0 '>
                <img src="imgs/photos_MainPic.jpg" className='bg-photo' alt="Accueil Image" />
                <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    PHOTOS</h1>
            </div>

            <div className='w-full p-4'>
                <h1 className='text-left'>SAISON ÉTÉ 2023</h1>

            </div>
        </div>
    )
}
