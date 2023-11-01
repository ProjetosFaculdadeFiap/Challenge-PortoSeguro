import './cadastro.css'

export default function Cadastro() {
    return (
        <>
            <div class="form-container">
                    <form id="createAccountForm" class="form">
                        <h2>Crie sua conta :D</h2>
                        <input type="text" placeholder="Digite seu Nome:" required/> 
                        <input type="email" placeholder="Digite seu Email:" required/>
                        <input type="password" placeholder="Crie uma Senha:" required/>
                        <button className="botao-cadastro" type="submit">Cadastrar</button>
                    </form>

            <div> 
                <a href="/cadastro/login">
                    <button className="botao-login">
                            Acesse sua Conta :D 
                        </button>
                    </a>
                </div>
                </div>
        </>
    )
}