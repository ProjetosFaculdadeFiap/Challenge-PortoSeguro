// Criação de página para envio de API 
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function POST(request){ // Método POST
    const { id, modelo, serie, preco, } = await request.json();
    const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');
    const data = JSON.parse(file);

    const novaBike = {
        id:data.bike[data.bike.length-1].id + 1,
        modelo,
        serie,
        preco,
    };
    data.bike.push(novaBike);

    await fs.writeFile(process.cwd() + '/src/app/base/db.json', JSON.stringify(data));
    return NextResponse.json({"message": "Seu pedido foi realizado!!"});

}