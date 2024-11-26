import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Pagina2(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)
    
    const actualizarNumero1 = (valor : number)=>{
        setNumero1(valor)
        
    }

    const actualizarNumero2 = (valor : number)=>{
        setNumero2(valor)
        
    }

    const sumar = ()=>{
        const t = numero1 + numero2
        setResultado(t)
    }

    useEffect(()=>{
        sumar()
    },[numero1, numero2])

    return (
        <>
          <Form>
            <Form.Group>
                <Form.Label>Numero1</Form.Label>
                <Form.Control type='text' placeholder='Ingrese un numero.'
                onChange={(e)=>{setNumero1(parseInt(e.currentTarget.value))}}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Numero2</Form.Label>
                <Form.Control type='text' placeholder='Ingrese un numero.'
                onChange={(e)=>{setNumero2(parseInt(e.currentTarget.value))}}/>
            </Form.Group>
            <Button variant= 'primary' onClick={sumar}>Sumar</Button>
            <Form.Label>Resultado</Form.Label>
                    
          </Form>
        </>
    )
}

export default Pagina2