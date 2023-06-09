import React, {useState} from 'react';
import '../stylesheets/TareaFormulario.css';
import  {v4 as uuidv4} from 'uuid';
function TareaFormulario (props) {

  const [input,  setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const TareaNueva =  {
      id: uuidv4(),
      texto:input,
      completada: false 
    };
    props.onSubmit(TareaNueva, setInput(''));
  };

  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input
        className='tarea-input'
        type='text'
        value={input}
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Añadir tarea
      </button>
    </form>
  );
}

export default TareaFormulario;