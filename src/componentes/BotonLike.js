import { useState } from "react";
import blanco from '../imagenes/blanco.jpg';
import rojo from '../imagenes/rojo.png';

export function BotonLike(){

    const [like, setLike ] = useState(false);
    const [numLike, setNumeLike] = useState(50);

    function cambiarMeGusta(){
        setLike((like) => !like);
        setNumeLike((numLike) => like ? numLike-1 : numLike+1);
    }

    function imagen(){
        console.log(like);
        if(like) return <img src= {rojo}/>;

        return <img src = {blanco}/>
    }
    return(
        <div>
            <button onClick={()=>cambiarMeGusta()}>
                
                {imagen()}
                
            </button>
            <div>{numLike}</div>
        </div>
    )
}