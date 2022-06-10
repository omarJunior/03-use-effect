import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        alert("El componente AvisoComponent esta montado")  
        
        //Cuando el componente se desmonta
        return ()=>{
            alert("Componente desmontado")
        }
    }, [])

  return (
    <div>
        <h3>saludos victor ¿Que tal estas?</h3>
        <button onClick={(e)=> alert("Bienvenido!!")}>Mostrar alerta</button>
    </div>
  )
}
