import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
// import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  /**
   * ⚠️ IMPORTANTE:
   * Los hooks son funciones que nos permiten conectar el estado y el ciclo de vida de los componentes funcionales.
   * estos son pocisionales, es decir, el orden en el que se declaran es importante.
   * no se pueden llamar condicionalmente, ni dentro de un loop. Solo se pueden llamar en el nivel más alto de un componente.
   */
  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  /**
   * Hay muchas formas de agregar un nuevo elemento a un arreglo usando el hook useState.
   * 1. crear una variable que contenga el nuevo arreglo y luego pasarlo al hook.
   * const newCategories = [...categories, 'Valorant'];
   * setCategories(newCategories)
   * 
   * 2. Usar el callback del hook useState.
   * setCategories( cat => [ ...cat, 'Valorant' ] );
   * 
   * 3. Pasar el nuevo arreglo directamente al hook.
   * setCategories([ ...categories, 'Valorant' ]);
   */
  // const onAddCategory = () => {
  //   setCategories([ 'Valorant', ...categories ]);
  // }

  /**
   * en <AddCategory setCategories={ setCategories } /> tenemos que pasar la función setCategories como propiedad.
   * esta función se encarga de agregar un nuevo elemento al arreglo de categorías.
   */
  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={ setCategories } />

      {/* Listado de Gif */}
      <ol>
        { 
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          }) 
        }
      </ol>
        {/* Gif Item */}

    </>
  )
}
