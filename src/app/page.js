import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      Hello World!
      </main> 
      <br />
      <Link href="/sobre">Sobre</Link>
      {/* Dados dinâmicos */}
      <Link href="/posts">Posts</Link>
      {/* Parâmetros na URL */}
      <Link href="/exemplo?parametro=valor">Página com parâmetro</Link>
      {/* Nested routes */}
      <Link href="/produtos/categorias/roupas">Ir a categoria de Roupas</Link>
      {/* Nested layouts */}
      <Link href="/dashboard">Ir para Dashboard</Link>
    </div>
  );
}
