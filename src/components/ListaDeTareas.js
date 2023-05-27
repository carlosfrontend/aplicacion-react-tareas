import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../stylesheets/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas () {

  const [ tareas,setTareas ] = useState([]);

  const  agregarTarea = tarea => {
    console.log(tarea);
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
    <>
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
    </>
  );
}

export default ListaDeTareas;