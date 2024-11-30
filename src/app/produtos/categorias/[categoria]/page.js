import Link from "next/link";

const CategoryPage = () => {
  return (
    <div>
      <main>
      <h1>Conheça as nossas roupas</h1>
      <Link href="/produtos/categorias/roupas/camisa_gola_v">Camisa Gola V</Link>
      </main> 
      <Link href="/">Ir para Home</Link>
    </div>
  )
}

export default CategoryPage;
