"use client";
import Link from 'next/link'
import { useState } from "react";
import './login.css'

export default function Login() {
  const [usuario, setUsuario] = useState({
    info: "login",
    email: "",
    senha: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const response = await fetch("http://localhost:3000/usuarios-porto",
      {
        method: "POST",
        body: JSON.stringify(usuario),
      }
    );

    const resultado = await response.json();

    if (resultado.status) {
      window.location.href = "/";
    } else {
      alert("Perfil inválido! Você já tem cadastro?");
    }
  };
    return (
        <>
        <div className="form-container"> 
            <form className="form"> 
                <fieldset>
                    <legend className='font-bold'>Acessando sua conta</legend>
                    <div className="mb-4"> 
                        <input
                        className="w-full border border-2 rounded-md py-2 px-3"
                        type="email" name="email" id="idEmail"
                        placeholder="Digite seu e-mail:"
                        value={usuario.email}
                        onChange={handleChange} />
                    </div>
    
                    <div className="mb-4">
                        <input className="w-full border border-2 rounded-md py-2 px-3"
                        type="password" name="senha" id="idSenha"
                        placeholder="Digite sua senha:"
                        value={usuario.senha}
                        onChange={handleChange} />
                    </div>

                    <div className="text-center">
                      <button className='botao-login' type="submit"> Entrar </button>
                    </div>
                </fieldset>

                    <div className="mt-4 text-center">
                        <span>Ainda não possui um cadastro?</span><Link href="/usuarios-porto/cadastro">
                        <p className="destaque-mouse">Clique aqui</p> </Link>
                    </div>
            </form>
            </div>
        </>
    )
}
