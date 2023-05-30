import React, {useEffect, useState} from 'react';
import './App.css';
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp';
import Tarea from './components/Tarea';
import TareaFormulario from './components/TareaFormulario';

/* Obtener la lista de tareas almacenadas en localStorage */

const obtenerTareasAlmacenadas = () => {

  let tareasAlmacenadas =  JSON.parse(localStorage.getItem('lista'));

  if(tareasAlmacenadas) {

    return tareasAlmacenadas;

  }else{

    return [];

  };
};

function App() {

  const [ tareas,setTareas ] = useState(obtenerTareasAlmacenadas()); /* Actualiza el estado con las tareas almacenadas */

  /* Guarda las tareas en localStorage con el nombre lista */

  useEffect(()=>{

    localStorage.setItem('lista', JSON.stringify(tareas));

  }, [tareas] );

  const  agregarTarea = tarea => {
    
    if(tarea.texto.trim()){

      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas]; /* ... operador spread */
      setTareas(tareasActualizadas);

    }
  };

  const eliminarTarea = id => {

    /* Crea un nuevo Array con todas las tareas menos la tarea en la que estamos pinchando  (parametro de nuestra  funcion ) */
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);

  };

  const completarTarea = id => {

    const tareasActualizadas = tareas.map(tarea => {

      if(tarea.id === id){

        tarea.completada = !tarea.completada;

      }

      return tarea;

    });

    setTareas(tareasActualizadas);
  };

  return (
    
    <div className="aplicacion-tareas">
      <LogoFreeCodeCamp />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
       {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id= {tarea.id}
              texto = {tarea.texto}
              completada = {tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
       }
      </div>
      </div>
    </div>
  );
}

export default App;
