"use client"; //Quando for usar o 'use...' (hook) => deve ser sempre em ambiente client

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const ExemploPage = () => {
    const searchParams = useSearchParams();

    const valorParam = searchParams.get("parametro");

    const presencaParam = searchParams.has("parametro");

    // console.log(searchParams);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Exibindo resultados para: {valorParam}
      </h1>
      </main>
      {presencaParam ? "Tem parametro" : "Não tem parametro"}
      <Link href="/">Home</Link> 
    </div>
  )
}

export default ExemploPage
