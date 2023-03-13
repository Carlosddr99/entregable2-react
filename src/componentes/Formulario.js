
export function Formulario(){

    function mandarForm(target){
            console.log("Nombre:" + target[0].value)
            console.log("First Name:" + target[1].value)
            console.log("Description:" + target[2].value)
            if(target[3].checked){
                console.log("Genero: Masculino");
            }else if(target[4].checked){
                console.log("Genero: Femenino");
            }
            else{
                console.log("Genero: Sin definir");
            }
            console.log("Age:" + target[6].value)
            console.log("Province:" + target[7].value)
            console.log("Nombre:" + target[8].value)
        
            let hobbies = [];
            if(target[9].checked){
                hobbies.concat("Football");
            }
            if(target[10].checked){
                hobbies.push("Games");
            }
            if(target[11].checked){
                hobbies.push("Basketball");
            }
            if(target[12].checked){
                hobbies.push("Art");
            }
            console.log("Hobbies:" + hobbies)
        }

    function mandarFormEnter(evento){
        evento.preventDefault();
        if(evento.code === 'Enter'){
            mandarForm(evento.target.form);
        }
    }
    function mandarFormulario(evento){
        evento.preventDefault();
        mandarForm(evento.target);
    }
    return(
        <form  onSubmit={ mandarFormulario} onKeyUp={(e)=>mandarFormEnter(e)}>
            Nombre: <input type="text"/> <br/>
            First Name : <input type="text"/> <br/><br/>
            Description : <textarea /> <br/>
            Gender :    <input type="radio" value="Male" name="gender" /> Male
                        <input type="radio" value="Female" name="gender" /> Female
                        <input type="radio" value="Other" name="gender" /> Other <br/>
            Age : <input type="number" min="0"/> <br/>
            Country: <input type="text"/> <br/>
            Province: <input type="text"/> <br/>
            Hobbies:    <input type="checkbox" name="Football"/> Football
                        <input type="checkbox" name="Games"/> Games
                        <input type="checkbox" name="Basketball"/> Basketball
                        <input type="checkbox" value="Art"/> Art <br/>
            <input type="submit"></input>
        </form>
    )
}