import {  obtenerPersonas } from '@/firebase/Promesas'
       //eliminarPersona,
import { Persona } from '@/interface/interfaces'
import Link from 'next/link';
//import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'


export const Pagina4 = ()=>{
  const [personas, setPersonas] = useState<Persona[]>([])
  //const router = useRouter();
  const traerDatos = ()=>{
      obtenerPersonas().then((personas)=>{
        console.log(personas)
        setPersonas(personas)
      })
  }

    useEffect(()=>{
        traerDatos()
    },[])
    
    const editar = ()=>{
               //key: string
      //router.push({
        //pathname: '/Pagina5',
        //query: {key}
      //});
    }

    const eliminar = ()=>{
                  //key: string
      //eliminarPersona({key} as Persona).then(()=>{
        //alert('Persona eliminada con exito.')
        //traerDatos();
      //}).catch((e)=>{
        //console.log(e)
        //alert('Ocurrio un error al eliminar la persona')
      //})
    }

  return (
    <>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Fecha de Nacimiento</th>
          <th>Edad</th>
          <th>Rut</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {
          personas.map((p)=>{
            return <tr key={p.key}>
              <td>{p.nombre}</td>
              <td>{p.apellido}</td>
              <td>{p.correo}</td>
              <td>{p.fechaNacimiento}</td>
              <td>{p.edad}</td>
              <td>{p.rut}</td>
              <td>
              <Link href={{pathname:'/Pagina5', query:{key: p.key}}}>
                <Button variant='success' type='button' onClick={editar}>Editar</Button>
              </Link>
              <Link href={{pathname:'/Pagina5', query:{key: p.key}}}>
                <Button variant='danger' type='button' onClick={eliminar}>Eliminar</Button>
              </Link>
              </td>
            </tr>
          })
        }
      </tbody>
     </Table>
    </>
  )
}

export default Pagina4


//onClick={()=> editar(p.key!)}>Editar</Button>
//onClick={()=> eliminar(p.key!)}>Eliminar</Button>