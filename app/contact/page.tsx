import Image from 'next/image'

export default function Home() {
    return (
        <div className=''>
            <div className='relative z-0 '>
                <img src="imgs/contact_MainPic.jpg" className='brightness-75 w-full' alt="Accueil Image" />
                <h1 className="absolute text-7xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight">
                    CONTACTEZ-NOUS</h1>
            </div>

            <div className='columns-2 gap-14 p-20 place-content-center'>
                <div className='w-full'>
                    <h1 className='text-udemBlue font-semibold text-right text-3xl mb-2'>Tu as des questions? <div className='whitespace-pre'></div>Écris-nous!</h1>


                    <form id="contact-form" method="POST" className='flex flex-col text-right'>
                        <div className="form-group p-2">
                            <label htmlFor="name">Name: </label>
                            <input type="text" className="form-control border-dashed" />
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="exampleInputEmail1">Email address: </label>
                            <input type="email" className="form-control border-dashed" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group p-2">
                            <label for="message" className="block mb-2">Ton message</label>
                            <textarea id="message" rows="2" className="ml-auto w-2/5 block p-2 mb-2 rounded-lg border border-dashed focus:ring-udemBlue-500 focus:border-udemBlue-500" placeholder=""></textarea>
                        </div>
                        <button className="border-2 border-udemBlue text-udemBlue rounded-md text-right p-2 ml-auto hover:bg-udemBlue hover:text-white active:scale-95 focus:outline-none">
                            Envoyer
                        </button>

                    </form>



                </div>
                <img className='max-w-xl border-dashed border-8 border-udemBlue' src="imgs/contact_pic1.png" alt="Picture of UdeM Team" />


            </div>
        </div>
    )
}
