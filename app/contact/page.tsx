import Image from 'next/image'

export default function Home() {
    return (
        <div className='relative'>
            <div className='relative z-0'>

                <Image src="/imgs/contact.jpg" className='brightness-75 ' alt="Contact Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%' }} />
                <h1 className="absolute lg:text-5xl md:text-4xl sm:text-3xl text-white top-1/4 right-1/4 left-1/4 text-center tracking-tight uppercase">
                    Contactez-nous</h1>
            </div>

            <div className='grid lg:grid-cols-4 p-20 lg:gap-5 grid-cols-none pt-10 gap-1'>
                <div></div>
                <div className='lg:w-full'>

                    <h1 className='uppercase text-left text-udemBlue font-semibold lg:text-2xl md:text-xl text-lg pb-3'>Tu as des questions? <div className='whitespace-pre'></div>Écris-nous!</h1>
                    <form action="https://api.web3forms.com/submit" id="contact-form" method="POST" className='flex flex-col'>
                        <input type="hidden" name="access_key" value="b67a0f58-0637-4e9a-a3eb-01619d8b29b0" />

                        <div className="form-group">
                            <label htmlFor="name">Nom: </label>
                            <input type="text" name="nom" required className=" form-control rounded-lg border-solid border-udemBlue border-2 w-full" />
                        </div>

                        <input type="hidden" name="from_name" value="New UdeM Website Form"></input>
                        <input type="checkbox" name="botcheck" className="hidden"></input>



                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Adresse courriel : </label>
                            <input type="email" name="courriel" required className=" form-control rounded-lg border-solid border-udemBlue border-2 w-full" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="block mb-2"></label>
                            <textarea id="message" name="message" rows={4} className=" p-2 w-full ml-auto block mb-3 rounded-lg border-udemBlue border-2 border-solid " placeholder="Ton message..."></textarea>
                        </div>
                        <button className="border-2 border-udemBlue text-udemBlue rounded-md p-2 place-self-center w-2/6 hover:bg-udemBlue hover:text-white active:scale-95 focus:outline-none transition-colors">
                            Envoyer
                        </button>

                    </form>

                    <script src="https://web3forms.com/client/script.js" async defer></script>

                </div>
                <Image className='lg:max-w-xl sm:place-self-center lg:w-full md:place-self-center ' src="/imgs/kaizenbanner.png" alt="Picture of UdeM Team"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} />
                <div></div>

            </div>
        </div>
    )
}
