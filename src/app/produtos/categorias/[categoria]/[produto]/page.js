import Link from "next/link";

const ProductPage = ({params}) => {
    const produto = params.produto;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Vendo produto: {produto}</h1>
      </main> 
      <Link href="/">Ir para Home</Link>
    </div>
  )
}

export default ProductPage
