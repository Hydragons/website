import Image from 'next/image'
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <div>
      <div className='relative z-0 '>
        <img src="imgs/accueil_MainPic.jpg" className='bg-photo' alt="Accueil Image" />
        <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
          CLUB DE BATEAU DRAGON DE L'UNIVERSITÉ DE MONTRÉAL</h1>
      </div>
      <Parallax
        bgImage={image1}
        bgImageAlt="the cat"
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: 'absolute',
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: '50%',
                top: '50%',
                borderRadius: '50%',
                transform: 'translate(-50%,-50%)',
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        The cat
      </Parallax>

      <div className='w-full p-4'>
        <h1 className='text-center'>À PROPOS DU BATEAU DRAGON</h1>

      </div>
    </div>
  )
}
