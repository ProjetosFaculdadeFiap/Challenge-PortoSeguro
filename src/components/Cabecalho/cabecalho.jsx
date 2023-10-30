import React from "react";
// import './cabecalho.css'; 
import Link from "next/link";


export default function Cabecalho() {
    return (
        <> 
            <header className="bg-grey-300 h-18">     
            
                <div className="flex flex-wrap items-center rounded-b-xl border-t-2"> 
                    <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
                        Área Cliente
                    </button>
                    
                </div> 



                <nav className="flex justify-around bg-neutral-300">
                    <Link className="cabecalho-links" href="/contratacao"> Constratação</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Vistoria</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Ajuda</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Sobre Nós</Link>
                </nav>
            </header>
        </>
    );
};


