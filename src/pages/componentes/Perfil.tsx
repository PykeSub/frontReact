import React from 'react'

interface Props{
    nombre: string,
    apellido: string,
    edad: number
}

export const Perfil = (props: Props) => {
  return (
    <div>
        Nombre: {props.nombre}
        Apellido: {props.apellido}
        Edad: {props.edad}
        {props.edad > 18 && <p>Eres de mayor edad</p>}
    </div>
  )
}
