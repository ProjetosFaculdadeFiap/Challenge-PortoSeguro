"use client";
import React from "react";
import { useState } from "react";

export default function Cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    info: "cadastro",
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

        try {
          const resposta = await fetch("http://localhost:8080/porto", {
            method: "POST",
            body: JSON.stringify(novoUsuario),
          });

      const resultado = await resposta.json();
      console.log(resultado)
      console.log(resposta.status)

        } catch (error) {
          console.log("ocorreu um erro no envio dos dados",error)
        //   
        } };


  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleCadastro}>

          <fieldset className="form-fieldset">
            <legend className="mb-2 font-bold">Crie seu conta</legend> 
            <div>
              <input className='w-full border border-2 rounded-md py-2 px-3'
                type="text"  name="nome" id="idNome"
                placeholder="Digite seu nome:" value={novoUsuario.nome} onChange={handleChange} />
            </div>

            <div>
              <input className='w-full border border-2 rounded-md py-2 px-3'
                type="email" name="email" id="idEmail" 
                placeholder="Digite seu e-mail:" value={novoUsuario.email} onChange={handleChange} />
            </div>

            <div>
              <input className='w-full border border-2 rounded-md py-2 px-3'
                type="password" name="senha" id="idSenha"
                placeholder="Crie uma senha:" value={novoUsuario.senha} onChange={handleChange} />
            </div>

            <div> 
              <button className="botao-cadastro" type="submit">  Cadastrar </button>
              <Link className="destaque-mouse" href='/usuarios-porto/login'> Já possui conta?</Link>
              {successMessage && <p>{successMessage}</p>}
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
} 