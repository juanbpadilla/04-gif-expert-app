import { useState } from "react";

export const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState('');

  /**
   * esta función se encarga de capturar el valor del input en tiempo real.
   * event.target.value nos permite obtener el valor del input.
   * 
   * también podemos desestructurar el evento y obtener el target directamente.
   * es decir, en lugar de (event) => onInputChange(event) podemos hacer ({ target }) => onInputChange(target)
   * 
   * @param {Event} event
   */
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  /**
   * para evitar que el formulario se envíe automáticamente, podemos usar el evento preventDefault.
   * 
   * @param {*} event 
   */
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(inputValue);
  }

  /**
   * onSubmit es una función que se ejecuta cuando se envía el formulario.
   * 
   * cuando en una función de flecha el primer argumento es el mismo
   * que se pasa a otra función, podemos simplificarlo de la siguiente forma:
   * De: { (event) => onInputChange(event) }
   * A:  { onInputChange }
   */
  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
