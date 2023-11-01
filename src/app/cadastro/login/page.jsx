import './login.css'

export default function Login () {
    return (
        <> 
            <div className="form-container"> 
                <form id="loginForm" class="form">
                        <h2>Acesse sua Conta</h2>
                        <input type="text" placeholder="Digite seu Nome ou Email: " required/>
                        <input type="password" placeholder="Digite sua Senha: " required/>
                        <button className="botao-login" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}