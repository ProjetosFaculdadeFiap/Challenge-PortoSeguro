"use client";
import Link from 'next/link'
import './cadastro.css'
import { useState } from 'react'
export default function CadastroPage() {
//Variável //Função
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
})
const handleFormEdit = (event, name) => {
setFormData({
...formData, [name]: event.target.value
})
}
const handleForm = async (event) => {
try {
event.preventDefault()
const response = await fetch (`/api/user/cadastro`, {
method: 'POST',
body: JSON.stringify(formData)
})
const json = await response.json()
console.log(response.status)
console.log(json)
} catch (err) {
}
}
return (
<>
    <div className="form-container">
      <form className="form" >
      <h2>Crie sua conta :D</h2>
          <input type="text" placeholder="Seu nome: " required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
<input type="email" placeholder="Seu e-mail: " required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
<input type="password" placeholder="Sua senha: " required value={formData.password} onChange={(e) => {handleFormEdit(e, 'senha')}}/>
<button className="botao-cadastro" type="submit"> Cadastrar </button>
<Link href='/api/users/login'> Já possui conta?</Link>

        </form>
      </div>
    </>
  )
}
