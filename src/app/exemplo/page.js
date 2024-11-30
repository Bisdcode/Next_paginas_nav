"use client"; //Quando for usar o 'use...' (hook) => deve ser sempre em ambiente client

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const ExemploPage = () => {
    const searchParams = useSearchParams();

    const valorParam = searchParams.get("parametro");

    const presencaParam = searchParams.has("parametro");

    // console.log(searchParams);

  return (
    <div>
      <main>
      <h1>Exibindo resultados para: {valorParam}
      </h1>
      </main>
      {presencaParam ? "Tem parametro" : "Não tem parametro"}
      <Link href="/">Home</Link> 
    </div>
  )
}

export default ExemploPage
