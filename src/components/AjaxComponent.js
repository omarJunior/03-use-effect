import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)
    const [errores, setErrores] = useState("")
    
    useEffect(()=>{
        getUsuariosAjaxAW()
    }, [])

    const getUsuariosEstaticos = ()=>{
        setUsuarios([
            {"id":1,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
            {"id":2,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
            {"id":3,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
            {"id":4,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
            {"id":5,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
            {"id":6,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}]
        )
    }

    const getUsuariosAjaxPms = ()=>{
        fetch("https://reqres.in/api/users?page=1")
        .then( data => data.json() )
        .then( resp => setUsuarios(resp.data))
        .catch(console.error)
    }

    const getUsuariosAjaxAW = ()=>{
        try {
            setTimeout(async()=>{
                const peticion = await fetch("https://reqres.in/api/users?page=2")
                const resp = await peticion.json()
                setUsuarios(resp.data)
                setCargando(false)
            }, 1500)

        } catch (error) {
            console.error(error)
            setErrores(error.message)
        }
    }

    if(errores !=""){
        return(
            //Cuando pasa un error
            <div className="errores">
                {errores}
            </div>
        )
    }else if(cargando == true){
         //Cuando esta todo cargando
        return (
            <div className="cargando">
                Cargando...
            </div>
        )
    }else if(cargando == false && errores == ""){
        //Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via AJAX</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Nombre</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((item, index)=>(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td><img width="100px" src={item.avatar} alt="avatar.jpg"/></td>
                                </tr>
                            ))    
                        }
                    </tbody>
                </table>
                
            </div>
          )
    }
}
