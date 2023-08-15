import Image from 'next/image'

export default function Home() {
    return (
        <div className=''>
            <div className='relative z-0 '>
                <img src="imgs/contact_MainPic.jpg" className='brightness-75 w-full' alt="Accueil Image" />
                <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    CONTACTEZ-NOUS</h1>
            </div>

            <div className='columns-2 gap-5 p-20 place-content-center'>
                <div className='w-full'>
                    <h1 className='text-udemBlue font-semibold text-right text-3xl'>Tu as des questions? <div className='whitespace-pre'></div>Écris-nous!</h1>
                </div>
                <img className='ml-auto max-w-xl object-left' src="imgs/contact_pic1.png" alt="Picture of UdeM Team" />


            </div>
        </div>
    )
}
