import Link from 'next/link'
import './login.css'

export default function LoginPage() {
    return (
        <>
            <div className="form-container"> 
                    <form className="form"> 
                    <h2>Acesse sua Conta</h2>
                        <input type="email" placeholder='Seu e-mail:' /> 
                        <input type="password" placeholder='Sua senha:'/>


                        <div> 
                            <button className='botao-login' type="submit"> Entrar </button>
                            <Link href='/usuarios-porto/cadastro'> Ainda não possui conta?</Link>
                        </div> 
                    </form>
            </div>
        </>
    )
}
