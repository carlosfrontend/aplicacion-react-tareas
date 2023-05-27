import './App.css';
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreeCodeCamp />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}

export default App;
