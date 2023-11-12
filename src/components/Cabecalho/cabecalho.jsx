import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between rounded-b-xl ">

                    <div className="flex items-center px-5 m-5">
                        <Image
                            src="/img/logo-porto01.png"
                            alt="Logo Porto"
                            width={100}
                            height={50}
                        />
                    </div>
                    
                    <div>
                        <a href="/api/users/login">
                            <button className="border-2 border-blue-400 rounded-2xl text-blue-400 shadow-sm p-1 px-3 m-3">
                                Área Cliente/ Login 
                            </button>
                        </a>

                    </div>


                </div>

                <nav className="flex justify-around bg-neutral-300 border-none p-2">
                    <Link className="cabecalho-links" href="/porto">Contratação</Link>
                    <Link className="cabecalho-links" href="/vistoria">Vistoria</Link>
                    <Link className="cabecalho-links" href="https://www.portoseguro.com.br/canal-de-ajuda">Ajuda</Link>
                    <Link className="cabecalho-links" href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro">Sobre Nós</Link>
                </nav>
            </header>
        </>
    );
}
