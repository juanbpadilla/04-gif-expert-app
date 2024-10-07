import { useState } from "react";
import PropTypes from 'prop-types'

/**
 * setCategories es una función que se pasa como argumento al componente.
 * esta función se encarga de agregar un nuevo elemento al arreglo de categorías.
 * 
 * el componente AddCategory recibe un objeto con la propiedad setCategories.
 * esta propiedad es una función que se encarga de agregar un nuevo elemento al arreglo de categorías.
 * NOTA: (⚠️ Descartamos el uso de setCategories en el componente AddCategory)
 * 
 * ✅ En lugar de setCategories, podemos usar onNewCategory para que sea más descriptivo.
 * A diferencia de setCategories, onNewCategory es una función que se ejecuta cuando se agrega una nueva categoría.
 * 
 * @param {*} param0 
 * @returns 
 */
export const AddCategory = ({ onNewCategory }) => {

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
   * value.trim() elimina los espacios en blanco al inicio y al final de la cadena.
   * value.trim().length nos permite obtener la longitud de la cadena sin espacios en blanco.
   * 
   * para agregar un nuevo elemento al arreglo, podemos usar el operador spread.
   * primero agregamos el nuevo valor y luego el resto de los elementos del arreglo.
   * prevState es el estado anterior del arreglo. (no necesariamente se debe llamar prevState)
   * setCategories(prevState => [ inputValue, ...prevState ]);
   * NOTA: (⚠️ Descartamos el uso de setCategories en el componente AddCategory)
   * 
   * ✅ En lugar de setCategories, podemos usar onNewCategory para que sea más descriptivo.
   * onNewCategory es una función que emite al componente padre GifExpertApp el valor del input
   * para que este lo agregue al arreglo de categorías.
   * 
   * finalmente, limpiamos el input.
   * setInputValue('');
   * 
   * @param {*} event 
   */
  const onSubmit = ( event ) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return;

    // setCategories(prevState => [ inputValue, ...prevState ]);
    onNewCategory( inputValue.trim() );
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
  // setCategories: PropTypes.func.isRequired
  onNewCategory: PropTypes.func.isRequired
}