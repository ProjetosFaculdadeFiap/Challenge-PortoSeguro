import React from "react";
import './cabecalho.css'; 
import Link from "next/link";


export default function Cabecalho() {
    return (
        <> 
            <header className="bg-grey-300 h-18">     
                <h1> Área Cliente </h1> 

                <nav className="flex justify-around">
                    <Link className="cabecalho-links" href="/contratacao"> Constratação</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Vistoria</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Ajuda</Link>
                    <Link className="cabecalho-links" href="/vistoria"> Sobre Nós</Link>
                </nav>
            </header>
        </>
    );
};


