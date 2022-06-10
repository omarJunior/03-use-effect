import React, {useState, useEffect} from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Victor robles")
    const [fecha, setFecha] = useState("01/01/1998")
    const [contador, setContador] = useState(0)

    //Solo se ejecuta una vez, al cargar el componente
    useEffect(() => {
        console.log("Has cargado el componente de PruebasComponent")
    }, [])

    //Se ejecuta si solo se cambia el usuario
    useEffect(() => {
        console.log("Has modificado algo: " + contador)
        setContador(contador + 1)
    }, [fecha, usuario])
    

    const modUsuario = (e, nombre)=>{
        setUsuario(nombre)
    }

    const cambiarFecha = ()=>{
        setFecha(Date.now())
    }

  return (
    <div>
        <h1>El efecto useffect</h1>
        <strong className={contador >= 10 ? 'label label-green': 'label'}>{usuario}</strong>

        &nbsp;
        <strong className={contador >= 10 ? 'label label-green': 'label'}>{fecha}</strong>

        &nbsp;
        <input 
            type="text"
            onChange={(e)=>modUsuario(e, e.target.value)}
            placeholder="Cambia el nombre..."
        />
        &nbsp;
        <button onClick={()=> cambiarFecha()}>Cambiar Fecha</button>

        <hr/>
        {
            usuario == "VICTOR" &&(
                <AvisoComponent />
            )
        }

    </div>
  )
}
