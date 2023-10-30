import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between rounded-b-xl border-t-2">
                    <div>
                        <a href="https://www.portoseguro.com.br/pdc/login">
                            <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
                                Área Cliente
                            </button>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Image
                            src="/img/logo-porto01.png"
                            alt="Logo Porto"
                            width={200}
                            height={100}
                        />
                    </div>
                </div>

                <nav className="flex justify-around bg-neutral-300">
                    <Link className="cabecalho-links" href="https://www.portoseguro.com.br/"> Contratação</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Vistoria</Link>
                    <Link className="cabecalho-links" href="https://www.portoseguro.com.br/canal-de-ajuda"> Ajuda</Link>
                    <Link className="cabecalho-links" href="https://www.portoseguro.com.br/institucional/sobre-a-porto-seguro"> Sobre Nós</Link>
                </nav>
            </header>
        </>
    );
}


