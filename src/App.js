import './App.css';
import { BotonCronometro } from './componentes/BotonCronometro';
import { BotonLike } from './componentes/BotonLike';
import { ComponenteUser } from './componentes/ComponenteUser';
import {ListaUsuarios} from './componentes/ListaUsuarios'
import {ListUserNameAge} from './componentes/ListUserNameAge'
import { TextoError } from './componentes/TextoError';
import { BotonJson } from './componentes/BotonJson';
import { Password } from './componentes/Password';
import { Formulario } from './componentes/Formulario';
import { SelectItem } from './componentes/SelectItem';

function App() {
  return (
    <div className="App">
      <BotonCronometro/> <br/>
      <BotonLike /><br/>
      <ComponenteUser/><br/>
      <ListaUsuarios/><br/>
      <ListUserNameAge/><br/>
      <SelectItem value={["Valor 1", "Valor 2", "Valor 3"]} items={["Item 1", "Item 2", "Item 3"]}/><br/>
      <TextoError/><br/>
      <BotonJson/><br/>
      <Password/><br/>
      <Formulario/>
      
    </div>
  );
}

export default App;
