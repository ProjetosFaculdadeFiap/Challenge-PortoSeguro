"use client"; 
import { useState } from 'react';
import './login.css'

export default function Login() { 

// Armazenando o objeto "usuário" que deve ser preenchido no formulário, e enviado na base de dados
const [usuario, setUsuario] = useState ({
    info: "login", 
    email: "", 
    senha: "", 
})

// Função de capturar dados
const handleChange = (e) => {
    const { name, value } = e.target; 
    setUsuario({...usuario, [name]: value}); 
}

const handleSubmit = async (e) => {
    e.preventDefault(); 

    // Requisição utilizando POST 
    // Requisição será enviada para a rota: /api/login
    // Requisição será enviada com os dados do formulário 
    const resposta = await fetch("http://localhost:3000/dados/base/base-users", {
        method: "POST", 
        body: JSON.stringfy(usuario), }); 

    // Armazenando resultado em formarto JSON 
    const resultado = await resposta.json();

            //Verificando resposta
            if (resultado.status) {
                //Redirecionar para a página de produtos.
                window.location.href = "/";
            } else {
                //Exibir uma mensagem de erro.
                alert("Usuário ou senha inválidos!");
            }  };
    return (
        <> 
            <div className="form-container"> 
                <h2>Acesse sua Conta</h2>
                    <form id="loginForm" class="form" onSubmit={handleSubmit}>
                        <fieldset>

                            <div>
                            <label htmlFor="idEmail">Digite seu email:</label>
                            <input
                                type="email"
                                name="email"
                                id="idEmail"
                                placeholder="Digite seu e-mail" value={usuario.email} onChange={handleChange} />
                            </div>

                            <div>
                            <label htmlFor="idSenha">Digite sua senha:</label>
                            <input
                                type="password"
                                name="senha"
                                id="idSenha"
                                placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange} />
                            </div>

                            <div>
                                <button className="botao-login" type="submit">Entrar</button>
                            </div>
                    </fieldset>
                </form> 
            </div>
        </>
    )
}
