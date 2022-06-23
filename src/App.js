import Row from './components/row';
import './App.css';
import { categorias } from './api';
function App() {
  return (
    <div className="App">
    {categorias.map((category)=>{
          return(
            <Row
            key={category.name}
            title={category.titulo}
            path={category.path}
            />

          )
    })}   
   </div>
  );
}

export default App;
