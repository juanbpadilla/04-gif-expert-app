import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

/**
 * GifExpertApp es el componente principal de la aplicación.
 * ..este componente se encarga de mostrar el título de la aplicación y el componente AddCategory.
 * ..y de mostrar los componentes GifGrid por cada categoría que se agregue.
 * 
 * En este punto estamos usando el hook useState para manejar el estado de las categorías.
 * ..el estado inicial de las categorías es un arreglo con un elemento vacío.
 * ..y usamos la función setCategories para actualizar el estado de las categorías.
 * 
 * @returns 
 */
export const GifExpertApp = () => {

  /**
   * ⚠️ IMPORTANTE:
   * Los hooks son funciones que nos permiten conectar el estado y el ciclo de vida de los componentes funcionales.
   * estos son pocisionales, es decir, el orden en el que se declaran es importante.
   * no se pueden llamar condicionalmente, ni dentro de un loop. Solo se pueden llamar en el nivel más alto de un componente.
   */
  const [ categories, setCategories ] = useState([ 'kimetsu no yaiba' ]);

  /**
   * newCategory es el valor que se obtiene del input.
   * ..lo recibimos como argumento (value) en la función onAddCategory.
   * 
   * Usamos un operador spread para hacer una copia del arreglo categories original. ...categories
   * 
   * Validamos si el nuevo elemento ya existe en el arreglo de categorías:
   * ..categories.includes(newCategory) nos permite saber si el elemento "newCategory" ya existe en el arreglo.
   * ..si el elemento ya existe, retornamos un return para que la función no haga nada.
   * 
   * HAY MUCHAS FORMAS DE AGREGAR UN NUEVO ELEMENTO A UN ARREGLO USANDO EL HOOK useState:
   * 
   * 1. crear una variable que contenga el nuevo arreglo y luego pasarlo al hook.
   *     const newCategories = [...categories, newCategory];
   *     setCategories(newCategories)
   * 
   * 2. Usar el callback del hook useState.
   *     setCategories( cat => [ ...cat, newCategory ] );
   * 
   * 3. Pasar el nuevo arreglo directamente al hook.
   *     setCategories([ ...categories, newCategory ]);
   * 
   * ..En este caso, estamos usando la tercera opción.
   * ..Pero pasando el nuevo elemento al inicio del arreglo y luego el resto de los elementos.
   */
  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  /**
   * en <AddCategory setCategories={ setCategories } /> tenemos que pasar la función setCategories como propiedad.
   * esta función se encarga de agregar un nuevo elemento al arreglo de categorías.
   * <AddCategory setCategories={ setCategories } />
   * NOTA: (⚠️ Descartamos el uso de setCategories en el componente AddCategory)
   * 
   * ✅ En lugar de setCategories, podemos usar onNewCategory para que sea más descriptivo.
   * onNewCategory es una función que se ejecuta para emitir el valor del input desde el componente AddCategory al componente GifExpertApp
   * para que lo podamos agregar al arreglo de categorías con onAddCategory.
   * 
   * cuando una propiedad empieza con on, es porque es una función que se ejecuta cuando ocurre un evento.click, change, submit, etc.
   * en lugar de setCategories, podemos usar onNewCategory para que sea más descriptivo.
   */
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      { 
        categories.map( category => (
            <GifGrid key={ category } category={ category } />
          )) 
      }

    </>
  )
}
