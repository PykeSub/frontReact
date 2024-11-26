import { registrarPersona } from '@/firebase/Promesas'
import { Persona } from '@/interface/interfaces'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


const initialStatePersona: Persona = {
    nombre: "",
    apellido: "",
    edad: 0,
    rut: "",
    fechaNacimiento: "",
    correo: ""
  }

const Pagina3 = ()=>{
    const [persona, setPersona] = useState<Persona>(initialStatePersona)

    const validarLargo = (nombre: string, value: string)=>{
        setPersona({...persona, [nombre]: value})
        
    }
     const registrar = ()=>{
        registrarPersona(persona).then(()=>{
            alert('Se registra con exito.')
        }).catch((e)=>{
            alert("Algo ocurrio")
        console.log(e)
        })
    }

  return (
    <>
    <Form>
        <Form.Group>
            <Form.Label>Rut</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su Rut'
            name='rut'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su apellido'
            name='apellido'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su Nombre'
            name='nombre'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control type='number' placeholder='Ingrese su Edad'
            name='edad'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control type='email' placeholder='Ingrese su Correo'
            name='correo'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
            <Form.Label>FechaNacimiento</Form.Label>
            <Form.Control type='date' placeholder='Ingrese su Fecha de Nacimiento'
            name='fechaNacimiento'
            onChange={(e)=>{validarLargo(e.currentTarget.name, e.currentTarget.value)}}/>
            <Form.Text></Form.Text>
        </Form.Group>
    <Button variant="success" type="button" onClick={registrar}>Registrar</Button>
    </Form>
    </>
  )
}

export default Pagina3