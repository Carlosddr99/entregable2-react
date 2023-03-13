export function ListUserNameAge(){

    const usuarios = [{name:'Sergio',age:28},
        {name:'Victoria',age:27},
        {name:'Iván', age:30},
        {name:'Liviu', age:26}];

    return(
        <div>
            {usuarios.map((user)=>
                <ul key={user.name}>Nombre: {user.name} <br/>
                    Edad: {user.age}
                </ul>
            )}
        </div>
    )
}