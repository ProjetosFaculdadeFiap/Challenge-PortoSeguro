import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, response) {
    try {
        // leitura arquivo json
        const file = await fs.readFile(process.cwd() + '/src/app/api/visto-bicicletas/db.json', 'utf8');

        // converção de arquivos
        const dados = JSON.parse(file);

        // Retornar os dados da base.
        return NextResponse.json(dados);
    } catch (error) {
        // Em caso de erro, retornar uma resposta com status falso.
        return NextResponse.json({ status: false, error: error.message });
    }
}