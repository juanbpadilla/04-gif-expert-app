import { useState } from "react";
import PropTypes from 'prop-types'

/**
 * setCategories es una función que se pasa como argumento al componente.
 * esta función se encarga de agregar un nuevo elemento al arreglo de categorías.
 * 
 * el componente AddCategory recibe un objeto con la propiedad setCategories.
 * esta propiedad es una función que se encarga de agregar un nuevo elemento al arreglo de categorías.
 * 
 * setCategories nos marca un error porque no está definido en el componente AddCategory.
 * para solucionar este error, debemos agregar setCategories como argumento de la función AddCategory.
 * con propTypes podemos definir las propiedades que recibe un componente.
 * 
 * @param {*} param0 
 * @returns 
 */
export const AddCategory = ({ setCategories }) => {

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
   * event.preventDefault() evita que el formulario se envíe automáticamente.
   * 
   * también podemos validar que el valor del input no esté vacío.
   * si el valor del input está vacío, retornamos un return para que la función no haga nada.
   * 
   * para agregar un nuevo elemento al arreglo, podemos usar el operador spread.
   * primero agregamos el nuevo valor y luego el resto de los elementos del arreglo.
   * prevState es el estado anterior del arreglo. (no necesariamente se debe llamar prevState)
   * setCategories(prevState => [ inputValue, ...prevState ]);
   * 
   * finalmente, limpiamos el input.
   * setInputValue('');
   * 
   * @param {*} event 
   */
  const onSubmit = ( event ) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return;

    setCategories(prevState => [ inputValue, ...prevState ]);
    setInputValue('');
  }

  /**
   * onSubmit es una función que se ejecuta cuando se envía el formulario.
   * 
   * onInputChange es una función que se ejecuta cuando se cambia el valor del input.
   * 
   * cuando en una función de flecha el primer argumento es el mismo
   * que se pasa a otra función, podemos simplificarlo de la siguiente forma:
   * De: { (event) => onInputChange(event) }
   * A:  { onInputChange }
   */
  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}