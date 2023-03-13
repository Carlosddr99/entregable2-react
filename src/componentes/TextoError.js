import { useState } from "react";

export function TextoError(){

    const texto ="A tope con React";
    const[textoCorrecto,setValoracionTexto]=useState(false);

    function valorarTexto(evento){
        if (evento.charCode === 13 ) {
        if(evento.target.value != texto){
            setValoracionTexto(false);
        }else{
            setValoracionTexto(true);
        }
        }
    }

    return(
        <div>
            <input type="text" onKeyPress={(event)=>valorarTexto(event)}></input>
            <br/>
            {textoCorrecto ? "Succesful":<div>Error en el mensaje</div>}
        </div>
    );
}
