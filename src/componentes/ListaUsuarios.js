
export function ListaUsuarios(){

    const usuarios = ['sergio','victoria','iván','liviu'];

    return(
        <div>
            {usuarios.map((user)=>
                <ul key={user}>{user}</ul>
            )}
        </div>
    )
}