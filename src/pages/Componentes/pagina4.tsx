import React , { useEffect, useState }from 'react'
import { Persona } from '@/interfaces/iPersonas';
import { obtenerPersonas } from '@/Firebase/promesas';
import { Table } from "react-bootstrap";


export const pagina4 = () => {
    const [personas, setpersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //traer listado de personas desde las promesas
        obtenerPersonas().then((personas)=>{
            setpersonas(personas)
        }).catch((e)=>{
            console.log(e),
            alert('algo ocurrio')
        })

    }, [])

  return (
    <>
        <Table>
            <thead>
                <tr>
                    <th>Nombre:</th>
                    <th>Apellido:</th>
                    <th>Rut:</th>
                    <th>Correo:</th>
                    <th>Fecha Nacimiento:</th>
                    <th>Edad:</th>
                </tr>
            </thead>
            <tbody>
                {
                    personas.map((p)=>{
                        return(
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>{p.correo}</td>
                                <td>{p.fechaNacimiento}</td>
                                <td>{p.edad}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </>
  )
}
export default pagina4

