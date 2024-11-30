import Link from "next/link";

const Postpage = ({params}) => {
    
    // Load de dados baseado em params.id
    const id = params.id;

  return (
    <div>
      <main>
      <h1>Título: {id}</h1>
      <p>Texto do post...</p>
      </main>
      <Link href="/">Home</Link>
    </div>
  )
}

export default Postpage
