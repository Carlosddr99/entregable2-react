import {  useEffect, useState } from "react";

export function BotonCronometro(){

    const [time, setTime] =useState(0);
    const [activo, setActivo] = useState(false);

    useEffect(()=> {
        let intervalo = null;
        if(activo){
            intervalo = setInterval(actualizarTiempo,1000);
        }
        return() => {
            clearInterval(intervalo);
        }
    }, [activo])

    
    function pulsarCronometro(){
        setActivo((activo) =>!activo);
    }
    
    function actualizarTiempo(){
        setTime((time) =>time+1);
    }
    

    return(
        <div>
            <button onClick={()=>pulsarCronometro()}>{activo ? "Desactivar Cronometro":"Activar Cronometro"}</button>
            <div>{time}</div>
        </div>
    )
}