import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
    return (
        <>
            <header>
                <div className="flex items-center justify-between rounded-b-xl border-t-2">

                <div className="flex items-center">
                        <Image
                            src="/img/logo-porto01.png"
                            alt="Logo Porto"
                            width={100}
                            height={50}
                        />
                    </div>
                    
                    <div>
                        <a href="https://www.portoseguro.com.br/pdc/login">
                            <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
                                Área Cliente
                            </button>
                        </a>
                    </div>
                </div>

                <nav className="flex justify-around bg-neutral-300">
                    <Link className="cabecalho-links" href="/porto">Porto Seguro</Link>
                    <Link className="cabecalho-links" href="/vistoria">Vistoria</Link>
                    <Link className="cabecalho-links" href="/sobre">Sobre Nós</Link>
                    <Link className="cabecalho-links" href="https://www.portoseguro.com.br/canal-de-ajuda">Ajuda</Link>
                </nav>
            </header>
        </>
    );
}


