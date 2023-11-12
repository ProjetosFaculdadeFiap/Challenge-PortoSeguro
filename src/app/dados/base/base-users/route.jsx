import { promises as fs } from 'fs'; 
import { NextResponse } from 'next/server';

export async function POST(request) {
    // Recuperando dados do formulário 
    const { nome, email, senha } = await request.json(); 

    // Recuperando dados arquivo JSON em /app/base/db.json
    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8'); 
    const data = JSON.parse(file); 

    // Criando novo usuário 
    const newUsuarios = { 
        id:data.usuarios[data.usuarios.length-1].id + 1, 
        nome, 
        email, 
        senha, 
    }; 

    // Adicionando novo usuario ao JSON  
    data.usuarios.push(newUsuarios); 

    await fs.writeFile(process.cwd() + '/src/app/base/db.json', JSON.stringify(data)); 
    return NextResponse.json({ message: "Cadastro realizado com sucesso!"});

}
