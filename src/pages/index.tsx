

//import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { Perfil } from "./componentes/Perfil";
import { useState } from "react";



export default function Home() {
  return (
    <>
    <nav>
      <Link href="About">
      About
      </Link>
      <br/>
      <Link href="Pagina1">
      Pagina 1
      </Link>
      <br/>
      <Link href="Pagina2">
      Pagina 2 
      </Link>
      <br/>
      <Link href="Pagina3">
      Pagina 3
      </Link>
      <br/>
        <Link href="Pagina4">
      Mostrar todo
      </Link>
      <br/>
        <Link href="Pagina5">
        Pagina 5
        </Link>
    </nav>
    Hola<br/>
    <Perfil nombre = "Gaston" apellido ="Alvarez" edad ={17}/>
    <Perfil nombre ="Julio" apellido ="Arias" edad ={24}/>
    </>
  );
}
