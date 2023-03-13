
import { useState } from "react";

export function Password(){

    const [tipo, setTipo] = useState("Débil");
    const [valorBarra, setValorBarra] = useState(0);


    function comprobarPassword(evento){
        let valor = 0;
        let password = evento.target.value;
        let letraMayusucula = false;
        let letraNumero = false;
        let letraCaracterEspecial= false;
        console.log(password.length);
        if(password.length>=8){
            valor = valor+1;
            console.log("Llegue tamaño" + valor);
        }

        for(let i=0; i<password.length;i++){
            let letra = password.charAt(i);
            if(!letraCaracterEspecial && (letra === '$' || letra === '%' ||letra === '&'|| letra === '/'|| letra === '(' ||letra === ')' || letra === '+' ||letra === '-')){
                valor++;
                letraCaracterEspecial = true;
                console.log("Llegue especial" + valor);
            }
            else if(letraCaracterEspecial && (letra === '$' || letra === '%' ||letra === '&'|| letra === '/'|| letra === '(' ||letra === ')' || letra === '+' ||letra === '-')){
                valor = valor;
            }
            else if(!isNaN(letra*1) && !letraNumero){
                valor++;
                letraNumero = true;
                console.log("Llegue numero" + valor);
            }
            else if(letra === letra.toUpperCase() && !letraMayusucula){
                console.log(letra)
                valor++;
                letraMayusucula = true;
                console.log("Llegue mayuscula" + valor);
            }
        }
        
        console.log("Llegue switch" + valor);
        switch(valor){
            case 1: 
                setTipo("Débil");
                setValorBarra(1);
                break;
            case 2:
            case 3:
                setTipo("Normal");
                setValorBarra(2);
                break;
            case 4:
                setTipo("Fuerte");
                setValorBarra(3);
                break;    
            default:
                setTipo("Débil");
                setValorBarra(0);
                break;
        }

    }

    return(
        <div>
            <input type="text" onKeyUp={(e)=>comprobarPassword(e)}></input>
            <br/>
            <progress max="3" value={valorBarra}/>
            <div>{tipo}</div>
        </div>
    )

}