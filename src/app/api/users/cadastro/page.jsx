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
}
