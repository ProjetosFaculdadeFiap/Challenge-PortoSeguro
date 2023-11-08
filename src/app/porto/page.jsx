import Image from "next/image";

export default function Porto() {
    return ( 
    <> 
        
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
                        <div className="flex justify-end"> 
                                <Image
                                    src="/img/ciclista2.png"
                                    alt="Criança brincando em uma bicicleta"
                                    width={250}
                                    height={10} />
            
                                <Image
                                    src="/img/ciclista3.png"
                                    alt="Um casal utilizando uma bicicleta"
                                    width={250}
                                    height={50} />

                                <Image
                                    src="/img/ciclista1.png"
                                    alt="Uma pessoa andando de bike"
                                    width={220}
                                    height={50} />
                    </div>
            </div>

            <div className="px-10"> 
                <h1 className="text-2xl"> Com o Seguro Bike da Porto Seguro, é pedalar e relaxar </h1>
                    <p className="mb-4"> O Seguro Bike é uma solução completa, que cuida não só da bicicleta e do ciclista, mas dos terceiros. <br />
                        São garantias e serviços pensados para cada modelo e perfil de cliente, com contratação simples e rápida, sem burocracia.</p>
            
                <h1 className="text-2xl "> Conheça as coberturas </h1>
                    <p className="mb-8"> Informações resumidas. Para mais detalhes, consulte as condições gerais. <br /> 
                        As coberturas de responsabilidade civil organizador ou expositor são coberturas básicas e obrigatórias. As coberturas adicionais não poderão ser contratadas isoladamente. </p>
            
            </div>

            <div className="px-10 flex justify-between"> 
               <Image 
                src="/img/bike.png"
                alt="Png bike"
                width={55}
                height={55}   />

               <Image 
                src="/img/ladrao.png"
                alt="Png ladrão"
                width={55}
                height={55}  /> 
                
                <Image 
                src="/img/doente.png"
                alt="Png ícone doente"
                width={55}
                height={55}  />
                
                <Image 
                src="/img/mundo.png"
                alt="Png mundo"
                width={55}
                height={55}  /> 
            </div>

            <div className="px-10 flex justify-between"> 
                <h4 className="text-1xl font-bold mb-2"> Danos à Bike </h4>
                <h4 className="text-1xl font-bold mb-2"> Subtração da Bike </h4>
                <h4 className="text-1xl font-bold mb-2"> Acidentes Pessoais </h4>
                <h4 className="text-1xl font-bold mb-2"> Cobertura Internacional </h4>
            </div>
        
    </>
    )
}

//  <p className="mb-4 text-sm"> Cobre os danos causados por incêndio, queda, tentativa <br /> de roubo e, ainda, situações em que a bicicleta estiver <br /> sendo levada  por um veículo transportador. </p>
