
import { useState } from "react";

export function BotonJson(){

    const [datos, setDatos] = useState([]);

    function obtenerJson(){
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => { setDatos(datos.concat(data))
            })
    }


    return(
        <div>
            <button onClick={() => obtenerJson()}>Llamar Api</button>
            {datos.map((item)=>
            <div>
            <label>Usuario: {item.userId}</label>
            <label>Titulo: {item.title}</label>
            <br/>
            </div>)}
        </div>
    )
}