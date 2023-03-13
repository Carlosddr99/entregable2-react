import { useState, useEffect } from "react";

export function ComponenteUser(){

    const[users, setUsers] = useState(['Maria','Pedro']);
    const [destruido, setDestruido] = useState(false);

    useEffect(()=>{
        setUsers([...users,'Carlos']);
        return()=>setDestruido(false)
        ;
    },[]);

    return(
        <div>
            {destruido ? <div>¡Componente destruido!</div> : 
            users.map((item)=> item + ",")}
        </div>
    )
}