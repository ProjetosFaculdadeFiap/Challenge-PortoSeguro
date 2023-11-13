import Image from "next/image";
export default function Porto() {
    return (
    <>
        <div id="lin_grad">
            <div className="flex justify-between">
                <div className="border-2 border-black rounded-md px-5 m-5">
                    <h1 className="text-4xl font-bold p-3"> Seguro Bike da Porto Seguro</h1>
                        <p> Seja bem-vindo! Ao Seguro de Bike da Porto Seguro
                            <br />
                            Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.
                        </p>
                        <a href="/vistoria">
                            <button className="border-2 border-blue-800 rounded-2xl text-black shadow-sm p-1 px-3 m-5 font-bold">
                                CONTRATE JÁ
                            </button>
                        </a>
                </div>
                    <div className="flex justify-end m-2">
                        <Image
                            src="/img/ciclista2.png"
                            alt="Criança brincando em uma bicicleta"
                            width={206}
                            height={10} />
                        <Image
                            src="/img/ciclista3.png"
                            alt="Um casal utilizando uma bicicleta"
                            width={206}
                            height={50} />
                        <Image
                            src="/img/ciclista1.png"
                            alt="Uma pessoa andando de bike"
                            width={220}
                            height={50} />
                    </div>
            </div>
            

                            