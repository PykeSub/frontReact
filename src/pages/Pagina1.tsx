import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Pagina1() {
  const [nombre, setNombre] = useState("Joselito")
  const [apellido, setapellido] = useState("Contreras")
  const [eNombre, setENombre] = useState("")
  const validarNombre = (valor : string)=>{
    if (valor.length > 4){
      setENombre("");
    }
    else{
      setENombre("Debes ingresar al menos 4 caracteres.")
    }
    setNombre(valor);
  }
  const registrar = ()=>{
    console.log(nombre+""+apellido)
    alert("Resgistrate:"+nombre+""+apellido)
  }
  return (
    <>
      <h1>Bienvenido {nombre} {apellido}</h1>
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='text' placeholder='Ingrese tu nombre'
          onChange={(e)=>{validarNombre(e.currentTarget.value)}}/>
          <Form.Text>
            
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type='text' placeholder='Ingrese tu apellido'
          onChange={(e)=>{setapellido(e.currentTarget.value)}}/>
        </Form.Group>
        <Button variant='primary' onClick={registrar}>Registrar</Button>
      </Form>



      <form>
        <label>Nombre</label>
        <input type= 'text' placeholder='Ingrese nombre'/>
        <label>Apellido</label>
        <input type='text' placeholder='Ingrese apellido'/>
        <button type='button'>Registrar</button>
      </form>
    </>
  )
}

export default Pagina1