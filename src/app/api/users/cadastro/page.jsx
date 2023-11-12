import Link from 'next/link'
import './cadastro.css'
export default function CadastroPage() {
    return (
        <>
            <div className="form-container">
                <form className="form" >

                <h2>Crie sua conta :D</h2>
                    <input type="text" placeholder="Seu nome: " /> 
                    <input type="email" placeholder="Seu e-mail: " /> 
                    <input type="password" placeholder="Sua senha: " />

                    <button className="botao-cadastro" type="submit">  Cadastrar </button>
                    <Link href='/api/users/login'> Já possui conta?</Link>
                </form>
            </div>

        </>
    )
}