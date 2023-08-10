import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='relative z-0 '>
        <img src="imgs/accueil_MainPic.jpg" className='brightness-75' alt="Accueil Image" />
        <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
          CLUB DE BATEAU DRAGON DE L'UNIVERSITÉ DE MONTRÉAL</h1>
      </div>

      <div className='w-full p-4'>
        <h1 className='text-center'>À PROPOS DU BATEAU DRAGON</h1>

      </div>
    </div>
  )
}
