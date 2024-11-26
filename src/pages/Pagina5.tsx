import { eliminarPersona, modificarPersona, obtenerPersona } from '@/firebase/Promesas'
import { Persona } from '@/interface/interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import  Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const initialStatePersona: Persona = {
    nombre: "",
    apellido: "",
    edad: 0,
    rut: "",
    fechaNacimiento: "",
    correo: ""
}

export const Pagina5 = ()=>{
    const params = useRouter()
    const [persona, setPersona] = useState<Persona>(initialStatePersona)

    useEffect(()=>{
        console.log(params.query)
        console.log(params.query.key)
        const key = params.query.key
        if (typeof key === 'string')(
            obtenerPersona(key).then((p)=>{
                if(p!=undefined){
                    setPersona(p)
                }
                //else{
                    //console.log("Persona no Encontrada.")
                //}
            })
        )
    },[])
    
    const validarLargo = (nombre: string, value: string)=>{
        setPersona({...persona, [nombre]: value})
        
    }

    const modificar = ()=>{
        modificarPersona(persona).then(()=>{
            alert("Se ha modificado con exito.")
        }).catch((m)=>{
            alert("Algo Ocurrio")
            console.log(m)
        })
    }

    const eliminar = ()=>{
        eliminarPersona(persona).then(()=>{
            alert("Se ha eliminado con exito.")
        }).catch((e)=>{
            console.log(e)
        })
    };

    return (
    <Form>
        <Form.Group>
            <Form.Label>Rut</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su Rut'
            value = {persona.rut}
            name='rut'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su apellido'
            value={persona.apellido}
            name='apellido'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su Nombre'
            value={persona.nombre}
            name='nombre'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control type='number' placeholder='Ingrese su Edad'
            value={persona.edad}
            name='edad'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control type='email' placeholder='Ingrese su Correo'
            value={persona.correo}
            name='correo'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>FechaNacimiento</Form.Label>
            <Form.Control type='date' placeholder='Ingrese su Fecha de Nacimiento'
            value={persona.fechaNacimiento}
            name='fechaNacimiento'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
    <Button variant="success" type="button" onClick={modificar}>Modificar</Button>
    
    </Form>
    
    )
}

export default Pagina5

//<Button variant="danger" type='button' onClick={eliminar}>Eliminar</Button>