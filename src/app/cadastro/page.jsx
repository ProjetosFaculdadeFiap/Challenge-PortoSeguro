"use client"; 
import './cadastro.css'
import React, { useState } from "react";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setMensagem("Cadastro realizado com sucesso!");
    };

    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Crie sua conta :D</h2>
                    <input
                        type="text"
                        placeholder="Digite seu Nome:"
                        required
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Digite seu Email:"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="senha"
                        placeholder="Crie uma Senha:"
                        required
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />
                    <p>{mensagem}</p>
                    <button className="botao-cadastro" type="submit">
                        Cadastrar
                    </button>
                </form>

                <div>
                    <a href="/cadastro/login">
                        <button className="botao-login">Acesse sua Conta :D</button>
                    </a>
                </div>
            </div>
        </>
    );
};  
export default Cadastro;