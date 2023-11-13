import { NextResponse } from 'next/server'
import { promises as fs } from 'fs';

export async function GET(request, { params }) { // Solicitação método HTTP GET 
    try {
        const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8'); // Lendo arquivos JSON
        const arquivo = JSON.parse(file) 
        return NextResponse.json(arquivo);
    } catch (error) {
        console.error(error);
        return NextResponse.error(new Error('Erro, não conseguimos processar sua vistoria'));
    }
}

