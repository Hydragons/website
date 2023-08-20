import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="bg-video">
                <video className="bg-photo" autoPlay muted loop src="imgs/equipe_MainVid.mp4">
                </video>
                <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    NOTRE ÉQUIPE</h1>
            </div>

            <div className='w-full p-4'>
                <h1 className='text-left'>LES CAPITAINES</h1>

            </div>
        </div>
    )
}
