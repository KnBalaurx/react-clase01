import Link from "next/link";
import Perfil from "./Componentes/Perfil";



export default function Home() {
  return (
    <>
      <nav>
        <Link href={"./Componentes/Pagina1"}>Pagina1</Link>
        <Link href={"./Componentes/Pagina2"}>Calculadora</Link>
      </nav>

      <p>Hola</p>
      <p>Chao</p>
        <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="docente"/>
        <Perfil nombre="Jose" apellido="Perez" edad={15}/>
    </>
  );
}
