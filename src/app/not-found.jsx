import Link from "next/link";

export default function NotFound() {
    return (
        <> 
            <h1 className="flex justify-center"> <strong> OOPS! 404  </strong></h1> 
                <p className="flex justify-center"> parece que você está tentando acessar uma página que não existe! </p> 
                <p className="flex justify-center"> <Link href="/porto"> Volte a página <strong>Porto</strong> antes que você se perca!</Link></p>
        </>
    )
}