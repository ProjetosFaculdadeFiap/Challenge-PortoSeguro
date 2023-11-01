import Image from "next/image";

export default function Rodape () {
    return (
        <> 
            <footer className="bg-neutral-400 h-35 fixed w-full bottom-0">
            <div className="flex items-center justify-between rounded-b-xl border-t-2">

            <div className="flex"> 
                <a href="https://www.portoseguro.com.br/pdc/login">
                    <button className="border-2 border-black rounded-2x1 text-black shadow-sm p-1 px-5 m-5">
                        Parceiros e Investidores
                    </button>
                </a>
            </div>

            <div className="flex  px-5 m-5">
                <div className="text-white">
                    <p>Acompanhe a Porto nas redes sociais</p> <br /> 
                    
                    <div className="flex justify-between">
                        <a href="http://facebook.com">
                            <Image
                                src="/img/facebook.png"
                                alt="Facebook Logo"
                                width={30}
                                height={30}
                                style={{ marginRight: '5px' }} // Aplicando margin a direita de 5px
                            />
                        </a>

                        <a href="http://twitter.com">
                            <Image
                                src="/img/twitter.png"
                                alt="Twitter Logo"
                                width={30}
                                height={30}
                                style={{ marginRight: '5px' }} 
                            />
                        </a>

                        <a href="http://instagram.com">
                            <Image
                                src="/img/instagram.png"
                                alt="Instagram Logo"
                                width={30}
                                height={30} /> </a>
                    </div>
                    
                </div> 
            </div>
                
                <div className="p-1 px-5 m-5">
                            <Image
                                src="/img/logo-porto02.png"
                                alt="Logo Porto"
                                width={100}
                                height={50} />
                </div>
            </div>
            
        
            </footer>
        </>
    )
}

