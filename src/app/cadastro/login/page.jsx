"use client"; 
import { useState } from 'react';
import './login.css'

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
    const resposta = await fetch("http://localhost:3001/dados/base/base-users", {
        method: "POST", 
        body: JSON.stringfy(usuario), }); 




}



export default function Login () {
    return (
        <> 
            <div className="form-container"> 
                <form id="loginForm" class="form">
                        <h2>Acesse sua Conta</h2>
                        <input type="text" placeholder="Digite seu Email: " required/>
                        <input type="password" placeholder="Digite sua Senha: " required/>
                        <button className="botao-login" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

